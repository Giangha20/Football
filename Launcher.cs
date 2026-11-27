using System;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Windows.Forms;

namespace FootballApp
{
    static class Program
    {
        private static TcpListener _listener;
        private static string _appDir;
        private static int _port = 8899;
        private static volatile bool _isRunning = true;
        private static DateTime _startTime;
        private static DateTime _lastHeartbeat;

        [STAThread]
        static void Main()
        {
            try
            {
                _appDir = AppDomain.CurrentDomain.BaseDirectory;
                _startTime = DateTime.UtcNow;
                _lastHeartbeat = DateTime.UtcNow;

                // 1. Sanity check: Ensure index.html exists in app directory
                string indexHtmlPath = Path.Combine(_appDir, "index.html");
                if (!File.Exists(indexHtmlPath))
                {
                    MessageBox.Show(
                        "Vui lòng GIẢI NÉN (Extract All) toàn bộ tệp nén Football_Windows_Offline.zip ra một thư mục trên máy tính rồi mới khởi động game!\n\nNếu bạn mở trực tiếp từ trong file zip, Windows sẽ không cho phép game tải đầy đủ dữ liệu đồ họa và cầu thủ.",
                        "EFOOT Mobile Arena - Chú ý Giải Nén",
                        MessageBoxButtons.OK,
                        MessageBoxIcon.Warning
                    );
                    return;
                }

                // 2. Check if server is already running on port 8899..8920
                for (int p = 8899; p <= 8920; p++)
                {
                    if (IsServerResponding(p))
                    {
                        // Existing server is alive! Just open browser window and exit
                        LaunchAppWindow("http://127.0.0.1:" + p + "/index.html");
                        return;
                    }
                }

                // 3. Find an available port and start raw TCP HTTP listener
                _port = BindAvailablePort(8899, 8990);
                if (_listener == null)
                {
                    MessageBox.Show(
                        "Không thể khởi động cổng mạng nội bộ cho game. Vui lòng kiểm tra lại quyền truy cập hoặc tường lửa.",
                        "EFOOT Mobile Arena - Lỗi Cổng Mạng",
                        MessageBoxButtons.OK,
                        MessageBoxIcon.Error
                    );
                    return;
                }

                _listener.Start(100);

                // Start server background thread
                var serverThread = new Thread(ServerWorker)
                {
                    IsBackground = true,
                    Name = "HttpServerWorker"
                };
                serverThread.Start();

                // Target URL
                string targetUrl = "http://127.0.0.1:" + _port + "/index.html";

                // 4. Launch browser in isolated App mode
                Process browserProc = LaunchAppWindow(targetUrl);

                // 5. Keep-alive monitor loop
                while (_isRunning)
                {
                    Thread.Sleep(2000);

                    // Allow at least 20 seconds of grace period on startup
                    if ((DateTime.UtcNow - _startTime).TotalSeconds < 20)
                    {
                        continue;
                    }

                    // Check heartbeat from web page
                    bool isHeartbeatActive = (DateTime.UtcNow - _lastHeartbeat).TotalSeconds < 15;

                    // Check browser process
                    bool isBrowserAlive = false;
                    if (browserProc != null)
                    {
                        try
                        {
                            isBrowserAlive = !browserProc.HasExited;
                        }
                        catch { }
                    }

                    // If neither browser is alive nor heartbeat is received, gracefully terminate
                    if (!isHeartbeatActive && !isBrowserAlive)
                    {
                        break;
                    }
                }
            }
            catch (Exception ex)
            {
                try
                {
                    File.WriteAllText(Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "launcher_error.txt"), ex.ToString());
                }
                catch { }
            }
            finally
            {
                _isRunning = false;
                try
                {
                    if (_listener != null) _listener.Stop();
                }
                catch { }
            }
        }

        private static bool IsServerResponding(int port)
        {
            try
            {
                using (var client = new TcpClient())
                {
                    var result = client.BeginConnect(IPAddress.Loopback, port, null, null);
                    bool success = result.AsyncWaitHandle.WaitOne(300, true);
                    if (!success || !client.Connected) return false;

                    client.EndConnect(result);
                    var stream = client.GetStream();
                    stream.ReadTimeout = 400;
                    stream.WriteTimeout = 400;

                    byte[] req = Encoding.ASCII.GetBytes("GET /api/heartbeat HTTP/1.1\r\nHost: 127.0.0.1\r\nConnection: close\r\n\r\n");
                    stream.Write(req, 0, req.Length);

                    byte[] resp = new byte[256];
                    int read = stream.Read(resp, 0, resp.Length);
                    string text = Encoding.ASCII.GetString(resp, 0, read);
                    return text.Contains("200 OK") || text.Contains("{\"ok\":true}");
                }
            }
            catch
            {
                return false;
            }
        }

        private static int BindAvailablePort(int startPort, int endPort)
        {
            for (int port = startPort; port <= endPort; port++)
            {
                try
                {
                    var l = new TcpListener(IPAddress.Loopback, port);
                    l.Server.SetSocketOption(SocketOptionLevel.Socket, SocketOptionName.ReuseAddress, true);
                    l.Start();
                    _listener = l;
                    return port;
                }
                catch
                {
                    // Port is in use, try next port
                }
            }
            return 8899;
        }

        private static Process LaunchAppWindow(string url)
        {
            string userDataDir = Path.Combine(Path.GetTempPath(), "FootballGameOfflineProfile");

            string[] possibleBrowsers = new string[]
            {
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86), @"Microsoft\Edge\Application\msedge.exe"),
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles), @"Microsoft\Edge\Application\msedge.exe"),
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles), @"Google\Chrome\Application\chrome.exe"),
                Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86), @"Google\Chrome\Application\chrome.exe")
            };

            foreach (var browserPath in possibleBrowsers)
            {
                if (File.Exists(browserPath))
                {
                    var psi = new ProcessStartInfo
                    {
                        FileName = browserPath,
                        Arguments = "--user-data-dir=\"" + userDataDir + "\" --app=\"" + url + "\" --window-size=1360,860 --disable-features=Translate",
                        UseShellExecute = false
                    };
                    return Process.Start(psi);
                }
            }

            // Fallback: system default browser
            Process.Start(url);
            return null;
        }

        private static void ServerWorker()
        {
            while (_isRunning && _listener != null)
            {
                try
                {
                    TcpClient client = _listener.AcceptTcpClient();
                    ThreadPool.QueueUserWorkItem(ProcessClient, client);
                }
                catch
                {
                    if (!_isRunning) break;
                }
            }
        }

        private static void ProcessClient(object state)
        {
            TcpClient client = (TcpClient)state;
            try
            {
                client.ReceiveTimeout = 4000;
                client.SendTimeout = 4000;
                using (NetworkStream stream = client.GetStream())
                {
                    byte[] buffer = new byte[4096];
                    int bytesRead = stream.Read(buffer, 0, buffer.Length);
                    if (bytesRead <= 0) return;

                    string requestText = Encoding.UTF8.GetString(buffer, 0, bytesRead);
                    string[] lines = requestText.Split(new string[] { "\r\n", "\n" }, StringSplitOptions.RemoveEmptyEntries);
                    if (lines.Length == 0) return;

                    string requestLine = lines[0]; // e.g. "GET /index.html HTTP/1.1"
                    string[] parts = requestLine.Split(' ');
                    if (parts.Length < 2) return;

                    string method = parts[0].ToUpperInvariant();
                    if (method != "GET" && method != "HEAD")
                    {
                        SendResponse(stream, 405, "Method Not Allowed", "text/plain", Encoding.ASCII.GetBytes("Method Not Allowed"));
                        return;
                    }

                    string rawPath = parts[1];
                    int queryIdx = rawPath.IndexOf('?');
                    if (queryIdx >= 0) rawPath = rawPath.Substring(0, queryIdx);
                    rawPath = rawPath.TrimStart('/');
                    if (string.IsNullOrEmpty(rawPath)) rawPath = "index.html";

                    // Heartbeat endpoint
                    if (rawPath.Equals("api/heartbeat", StringComparison.OrdinalIgnoreCase))
                    {
                        _lastHeartbeat = DateTime.UtcNow;
                        byte[] ok = Encoding.UTF8.GetBytes("{\"ok\":true}");
                        SendResponse(stream, 200, "OK", "application/json; charset=utf-8", ok);
                        return;
                    }

                    // Security: prevent directory traversal
                    rawPath = rawPath.Replace('/', Path.DirectorySeparatorChar).Replace('\\', Path.DirectorySeparatorChar);
                    if (rawPath.Contains(".."))
                    {
                        SendResponse(stream, 403, "Forbidden", "text/plain", Encoding.ASCII.GetBytes("Forbidden"));
                        return;
                    }

                    string fullPath = Path.Combine(_appDir, rawPath);
                    if (File.Exists(fullPath))
                    {
                        byte[] fileBytes = File.ReadAllBytes(fullPath);
                        string mime = GetMimeType(fullPath);
                        SendResponse(stream, 200, "OK", mime, fileBytes);
                    }
                    else
                    {
                        byte[] notFound = Encoding.UTF8.GetBytes("File not found");
                        SendResponse(stream, 404, "Not Found", "text/plain; charset=utf-8", notFound);
                    }
                }
            }
            catch { }
            finally
            {
                try { client.Close(); } catch { }
            }
        }

        private static void SendResponse(NetworkStream stream, int statusCode, string statusMsg, string contentType, byte[] body)
        {
            string header = "HTTP/1.1 " + statusCode + " " + statusMsg + "\r\n" +
                            "Content-Type: " + contentType + "\r\n" +
                            "Content-Length: " + body.Length + "\r\n" +
                            "Access-Control-Allow-Origin: *\r\n" +
                            "Cache-Control: no-cache\r\n" +
                            "Connection: close\r\n\r\n";

            byte[] headerBytes = Encoding.ASCII.GetBytes(header);
            stream.Write(headerBytes, 0, headerBytes.Length);
            if (body.Length > 0)
            {
                stream.Write(body, 0, body.Length);
            }
            stream.Flush();
        }

        private static string GetMimeType(string path)
        {
            string ext = Path.GetExtension(path).ToLowerInvariant();
            switch (ext)
            {
                case ".html":
                case ".htm": return "text/html; charset=utf-8";
                case ".js": return "application/javascript; charset=utf-8";
                case ".css": return "text/css; charset=utf-8";
                case ".json": return "application/json; charset=utf-8";
                case ".png": return "image/png";
                case ".jpg":
                case ".jpeg": return "image/jpeg";
                case ".svg": return "image/svg+xml";
                case ".ico": return "image/x-icon";
                case ".mp3": return "audio/mpeg";
                case ".wav": return "audio/wav";
                default: return "application/octet-stream";
            }
        }
    }
}
