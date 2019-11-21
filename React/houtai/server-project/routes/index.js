var express = require('express');
var router = express.Router();
const {
  find,
  insert,
  remove,
  update
} = require('../db/db');
/* GET home page. */
const { formatData, token } = require('../utils')

router.get('/juejin', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('juejin');
  res.json(data);
});

router.get('/boiling', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('feidian');
  res.json(data);
});

router.get('/talk', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('huati');
  res.json(data);
});

router.get('/brochure', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('xiaoce');
  res.json(data);
});

router.get('/activity', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('huodong');
  res.send(data);
});

router.post('/shopcar', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let { id } = req.body;
  try {
    data = await find('xiaoce', { id });
    res.send(data)
    // console.log(data)
  } catch (err) {
  }
});

router.post('/details', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let { id } = req.body;
  try {
    data = await find('juejin', { id });
    res.send(data)
  } catch (err) {
  }
});

//登录
router.post('/user', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let { username, psw } = req.body;
  let data;
  console.log(username, psw)
  try {
    data = await find('user', { username, psw });
    data = data[0]
    console.log(data)
    let authorization = token.create(username);
    if (data) {
      res.send(formatData({ data: { nicheng: data.nicheng, username: data.username, authorization } }))
    } else {
      res.send(formatData({ code: 0 }))
    }

  } catch (err) {
    res.send(formatData({ code: 0 }))
  }
});

//验用户的手机号是否已经注册
router.post('/yan', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let { username } = req.body;

  console.log(username)
  try {
    data = await find('user', { username });

    console.log(data)
    res.send(data)

  } catch (err) {

  }
});



//注册
router.post('/reg', async (req, res) => {
  res.append('Access-Control-Allow-Origin', '*')

  let { username, psw, nicheng } = req.body;
  console.log(username, psw, nicheng)
  try {
    insert('user', [{ username, psw, nicheng }]);//{username,password,age,gender}

    res.send(formatData())
  } catch (err) {

    res.send(formatData({ code: 0 }))
  }
})

module.exports = router;