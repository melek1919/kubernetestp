const http = require('http');

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || 'v1.0.0';

const server = http.createServer((req, res) => {
  if (req.url === '/health' || req.url === '/ready') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Application Mon-App - Version: ${VERSION}\n`);
});

server.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT} (Version: ${VERSION})`);
});
