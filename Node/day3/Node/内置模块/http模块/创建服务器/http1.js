const { createServer } = require('http');
const fs = require('fs');
const server = createServer((request, response) => {

    fs.appendFile('./msg.txt', request.url + '\n', () => {
        console.log('写入成功');

    })
    response.writeHead('202');

    response.write('hello world');

    response.end();
})
server.listen(5000);
console.log('启动服务器');

const { createServer } = require('http');
const fs = require('fs');
const server = createServer((Request, Response) => {
    console.log(Request.url);
    fs.appendFile('./msg.txt', Request.url + '\n', () => {
        console.log('写入成功');

    })
    Response.writeHead('202');
    Response.write('hello world');
    Response.end();

})
server.listen(5000)