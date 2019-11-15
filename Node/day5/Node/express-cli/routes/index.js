var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.append
  // res.send
  // 就是去默认设置好的views文件夹里面找index.jade文件
  // 把数据放进jade里面生成html，然后发送到前端
  // res.render('index', { title: 'eno yao' });
  let template = fs.readFileSync('./template/index.html').toString()
  res.send(template)
});

module.exports = router;
