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
  let { num, psw } = req.body;
  let data;
  console.log(num, psw)
  try {
    data = await find('user', { num, psw });
    data = data[0]
    console.log(data)
    let authorization = token.create(num);
    if (data) {
      res.send(formatData({ data }))
    } else {
      res.send(formatData({ code: 0 }))
    }

  } catch (err) {
    res.send(formatData({ code: 0 }))
  }
});

//技术问题渲染
router.post('/technologyfind', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let { username } = req.body;

  console.log(username)
  try {
    data = await find('wenti', { username });

    console.log(data)
    res.send(data)

  } catch (err) {

  }
});

//技术问题添加
router.post('/technology', async (req, res) => {
  res.append('Access-Control-Allow-Origin', '*')

  let { username, textvalue, getData,huida } = req.body;
  console.log(username, textvalue, getData,huida)
  try {
    insert('wenti', [{ username, textvalue, getData ,huida}]);//{username,password,age,gender}

    res.send(formatData())
  } catch (err) {

    res.send(formatData({ code: 0 }))
  }
})


//匿名投诉
router.post('/complaint', async (req, res) => {
  res.append('Access-Control-Allow-Origin', '*')

  let { username, textvalue, getData } = req.body;
  console.log(username, textvalue, getData)
  try {
    insert('tousu', [{ username, textvalue, getData }]);//{username,password,age,gender}

    res.send(formatData())
  } catch (err) {

    res.send(formatData({ code: 0 }))
  }
})

module.exports = router;