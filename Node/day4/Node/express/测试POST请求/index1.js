const express = require('express');
const http = require('http');
const { createServer } = require('http');
const querystring = require('querystring');
const fs = require('fs');
const app = express();
app.get('/index1', (req, res) => {
    res.send('FFFF')
});
app.get('/main', (req, res) => {
    res.send('阿珍爱上了阿强')
})
const parseBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        })
        req.on('end', () => {
            resolve(querystring.parse(body));
        })
        req.on('error', (err) => {
            reject(err);
        })
    })
}


// app.post('/list', async (req, res) => {
const server = createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { username, password, type } = await parseBody(req);
    console.log(username, password, type);

    let str = 'name=' + username + '&password=' + password;
    if (type == 'registar') {
        fs.appendFile('./msg.txt', str + '\n', () => {
            console.log('写入成功');

        })
    } else if (type == 'login') {
        const data = fs.readFileSync('./msg.txt').toString();
        let xb = data.indexOf(str);
        if (xb >= 0) {

            res.write('success')
            res.end();
        } else {
            res.write('failure')

            res.end();

        }
    }

    // res.send();
})

// })




server.listen(900);
console.log('启动服务器');
