using System;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;

namespace FootballApp
{
    static class Program
    {
        private static HttpListener _listener;
        private static string _appDir;
        private static int _port = 8899;
        private static volatile bool _isRunning = true;

        [STAThread]
        static void Main()
        {
            try
            {
                _appDir = AppDomain.CurrentDomain.BaseDirectory;

                // Check if port 8899 is already running our server
                bool isPort8899InUse = IsPortOccupied(8899);
                if (isPort8899InUse)
                {
                    // Server is already running in background, just open the window
                    string existingUrl = "http://127.0.0.1:8899/index.html";
                    LaunchAppWindow(existingUrl);
                    return;
                }

                _port = GetAvailablePort(8899);

                _listener = new HttpListener();
                _listener.Prefixes.Add("http://127.0.0.1:" + _port + "/");
                _listener.Start();

                var serverThread = new Thread(ServerWorker)
                {
                    IsBackground = true
                };
                serverThread.Start();

                // Target URL
                string targetUrl = "http://127.0.0.1:" + _port + "/index.html";

                // Launch Edge or Chrome in isolated App Mode
                Process browserProc = LaunchAppWindow(targetUrl);

                // Keep server alive reliably while the user is playing
                while (_isRunning)
                {
                    Thread.Sleep(3000);

                    if (browserProc != null)
                    {
                        try
                        {
                            if (!browserProc.HasExited)
                            {
                                continue;
                            }
                        }
                        catch { }
                    }

                    // Keep-alive loop: stays active without premature 7-second termination
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

        private static bool IsPortOccupied(int port)
        {
            try
            {
                var test = new TcpListener(IPAddress.Loopback, port);
                test.Start();
                test.Stop();
                return false;
            }
            catch
            {
                return true;
            }
        }

        private static int GetAvailablePort(int preferredPort)
        {
            try
            {
                var test = new TcpListener(IPAddress.Loopback, preferredPort);
                test.Start();
                test.Stop();
                return preferredPort;
            }
            catch
            {
                var rnd = new TcpListener(IPAddress.Loopback, 0);
                rnd.Start();
                int p = ((IPEndPoint)rnd.LocalEndpoint).Port;
                rnd.Stop();
                return p;
            }
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

            // Fallback: standard system default browser
            Process.Start(url);
            return null;
        }

        private static void ServerWorker()
        {
            while (_isRunning && _listener != null && _listener.IsListening)
            {
                try
                {
                    var ctx = _listener.GetContext();
                    ThreadPool.QueueUserWorkItem(ProcessRequest, ctx);
                }
                catch
                {
                    break;
                }
            }
        }

        private static void ProcessRequest(object state)
        {
            var ctx = (HttpListenerContext)state;
            try
            {
                string rawUrl = ctx.Request.Url.AbsolutePath.TrimStart('/');
                if (string.IsNullOrEmpty(rawUrl) || rawUrl == "/")
                {
                    rawUrl = "index.html";
                }

                // Heartbeat API
                if (rawUrl.Equals("api/heartbeat", StringComparison.OrdinalIgnoreCase))
                {
                    byte[] ok = Encoding.UTF8.GetBytes("{\"ok\":true}");
                    ctx.Response.ContentType = "application/json";
                    ctx.Response.ContentLength64 = ok.Length;
                    ctx.Response.OutputStream.Write(ok, 0, ok.Length);
                    return;
                }

                // Security check against directory traversal
                rawUrl = rawUrl.Replace('/', Path.DirectorySeparatorChar);
                string filePath = Path.Combine(_appDir, rawUrl);

                if (File.Exists(filePath))
                {
                    byte[] data = File.ReadAllBytes(filePath);
                    string ext = Path.GetExtension(filePath).ToLowerInvariant();
                    string mime = "application/octet-stream";
                    if (ext == ".html" || ext == ".htm") mime = "text/html; charset=utf-8";
                    else if (ext == ".js") mime = "application/javascript; charset=utf-8";
                    else if (ext == ".css") mime = "text/css; charset=utf-8";
                    else if (ext == ".json") mime = "application/json; charset=utf-8";
                    else if (ext == ".png") mime = "image/png";
                    else if (ext == ".jpg" || ext == ".jpeg") mime = "image/jpeg";
                    else if (ext == ".svg") mime = "image/svg+xml";

                    ctx.Response.ContentType = mime;
                    ctx.Response.ContentLength64 = data.Length;
                    ctx.Response.AddHeader("Access-Control-Allow-Origin", "*");
                    ctx.Response.OutputStream.Write(data, 0, data.Length);
                }
                else
                {
                    ctx.Response.StatusCode = 404;
                    byte[] notFound = Encoding.UTF8.GetBytes("File not found");
                    ctx.Response.OutputStream.Write(notFound, 0, notFound.Length);
                }
            }
            catch { }
            finally
            {
                try { ctx.Response.Close(); } catch { }
            }
        }
    }
}
