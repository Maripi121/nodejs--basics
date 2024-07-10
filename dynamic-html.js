const http = require('http');
const fs = require('fs');

const HeaderData = fs.readFileSync(
  `${__dirname}/dynamic-html-render/data.json`,
  'utf-8'
);
const headerTemplate = fs.readFileSync(
  `${__dirname}/dynamic-html-render/index.html`,
  'utf-8'
);
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    res.end(headerTemplate);
  }
});

server.listen(4000, () => {
  console.log('listening to port 3000');
});
