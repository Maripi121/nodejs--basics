//synchronous
//read file
const fs = require('fs');
const text = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(text);

//write into file file
const write = 'text to write into files using js into ts';
const textWrite = fs.writeFileSync('./txt/output.txt', write);
console.log('file written');

//asynchronous

const textasync = fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
  console.log('reading data', data);
  console.log('file reading'); // consoles last
});
console.log('file reading outside'); // due to async nature this console will first
