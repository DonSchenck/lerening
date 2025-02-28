const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Hello Iframe</title>
    </head>
    <body>
      <iframe src="/terminaliframe" width="600" height="400"></iframe>
      <iframe src="/textiframe" width="600" height="400"></iframe>
    </body>
    </html>
  `);
});

app.get('/terminaliframe', (req, res) => {
  res.send(`
  <html>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/xterm@4.19.0/css/xterm.css" />
      <script src="https://cdn.jsdelivr.net/npm/xterm@4.19.0/lib/xterm.js"></script>
    </head>
    <body>
      <div id="terminal"></div>
    </head>
    </body>
    <script src="client.js"></script>
  </html>
  `);
});

app.get('/textiframe', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Instructions</title>
    </head>
    <body>
      <h1>Instructions are written here.</h1>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
