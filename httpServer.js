const http = require('http');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/json-data/producs.json`, 'utf-8');
const result = JSON.parse(data); // parse json in javascript
const server = http.createServer((req, res) => {
  // res.end('hello this is response');
  // basic routing
  const pathName = req.url;
  if (pathName === '/') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    res.end('this is home page router');
  } else if (pathName === '/products') {
    res.setHeader('cookies', '12sdhfkfsdbfjhsfhsfh');
    res.end('this is products page');
  }
  //simple api for reading file data
  else if (pathName === '/api') {
    res.writeHead(200, {
      'Content-type': 'application/json',
    });
    console.log(result);
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
    });
    res.end(`<h1>Page not found</h1>`);
  }
});

server.listen('4000', () => {
  console.log('listening at port 4000');
});
