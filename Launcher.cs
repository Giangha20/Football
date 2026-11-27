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
        private static int _port;

        [STAThread]
        static void Main()
        {
            try
            {
                _appDir = AppDomain.CurrentDomain.BaseDirectory;

                // Find a free TCP port
                var tcpListener = new TcpListener(IPAddress.Loopback, 0);
                tcpListener.Start();
                _port = ((IPEndPoint)tcpListener.LocalEndpoint).Port;
                tcpListener.Stop();

                // Start local embedded offline HTTP server
                _listener = new HttpListener();
                _listener.Prefixes.Add("http://127.0.0.1:" + _port + "/");
                _listener.Start();

                var serverThread = new Thread(ServerWorker)
                {
                    IsBackground = true
                };
                serverThread.Start();

                // Launch Desktop App Window using Edge or Chrome in app mode
                string targetUrl = "http://127.0.0.1:" + _port + "/index.html";
                Process browserProc = LaunchAppWindow(targetUrl);

                if (browserProc != null)
                {
                    browserProc.WaitForExit();
                }
                else
                {
                    // Fallback to default browser
                    Process.Start(targetUrl);
                    // Keep server alive while user interacts
                    Thread.Sleep(3000);
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
        }

        private static Process LaunchAppWindow(string url)
        {
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
                        Arguments = "--app=\"" + url + "\" --window-size=1360,860",
                        UseShellExecute = false
                    };
                    return Process.Start(psi);
                }
            }

            return null;
        }

        private static void ServerWorker()
        {
            while (_listener != null && _listener.IsListening)
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

                // Security check to avoid directory traversal
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
