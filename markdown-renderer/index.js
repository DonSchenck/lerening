const fs = require('fs');
const http = require('http');
const marked = require('marked');

const PORT = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Read the Markdown file
  fs.readFile('C:\\Users\\dschenck\\src\\instruqt\\instruqt-tracks\\rhdh\\01-playground\\assignment.md', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }

    // Convert Markdown to HTML
    const htmlContent = marked.parse(data);

    // Serve the HTML content
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
