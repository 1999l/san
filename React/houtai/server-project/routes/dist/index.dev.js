"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../db/db'),
    find = _require.find,
    insert = _require.insert,
    remove = _require.remove,
    update = _require.update;
/* GET home page. */


var _require2 = require('../utils'),
    formatData = _require2.formatData,
    token = _require2.token;

router.get('/juejin', function _callee(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context.next = 3;
          return regeneratorRuntime.awrap(find('juejin'));

        case 3:
          data = _context.sent;
          res.json(data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get('/boiling', function _callee2(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context2.next = 3;
          return regeneratorRuntime.awrap(find('feidian'));

        case 3:
          data = _context2.sent;
          res.json(data);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.get('/talk', function _callee3(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context3.next = 3;
          return regeneratorRuntime.awrap(find('huati'));

        case 3:
          data = _context3.sent;
          res.json(data);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.get('/brochure', function _callee4(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context4.next = 3;
          return regeneratorRuntime.awrap(find('xiaoce'));

        case 3:
          data = _context4.sent;
          res.json(data);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.get('/activity', function _callee5(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context5.next = 3;
          return regeneratorRuntime.awrap(find('huodong'));

        case 3:
          data = _context5.sent;
          res.send(data);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
});
router.post('/shopcar', function _callee6(req, res, next) {
  var id;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          id = req.body.id;
          _context6.prev = 2;
          _context6.next = 5;
          return regeneratorRuntime.awrap(find('xiaoce', {
            id: id
          }));

        case 5:
          data = _context6.sent;
          res.send(data); // console.log(data)

          _context6.next = 11;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](2);

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[2, 9]]);
});
router.post('/details', function _callee7(req, res, next) {
  var id;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          id = req.body.id;
          _context7.prev = 2;
          _context7.next = 5;
          return regeneratorRuntime.awrap(find('juejin', {
            id: id
          }));

        case 5:
          data = _context7.sent;
          res.send(data);
          _context7.next = 11;
          break;

        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](2);

        case 11:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[2, 9]]);
}); //登录

router.post('/user', function _callee8(req, res, next) {
  var _req$body, num, psw, data, authorization;

  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _req$body = req.body, num = _req$body.num, psw = _req$body.psw;
          console.log(num, psw);
          _context8.prev = 3;
          _context8.next = 6;
          return regeneratorRuntime.awrap(find('user', {
            num: num,
            psw: psw
          }));

        case 6:
          data = _context8.sent;
          data = data[0];
          console.log(data);
          authorization = token.create(num);

          if (data) {
            res.send(formatData({
              data: data
            }));
          } else {
            res.send(formatData({
              code: 0
            }));
          }

          _context8.next = 16;
          break;

        case 13:
          _context8.prev = 13;
          _context8.t0 = _context8["catch"](3);
          res.send(formatData({
            code: 0
          }));

        case 16:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[3, 13]]);
}); //验用户的手机号是否已经注册

router.post('/yan', function _callee9(req, res, next) {
  var username;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          username = req.body.username;
          console.log(username);
          _context9.prev = 3;
          _context9.next = 6;
          return regeneratorRuntime.awrap(find('user', {
            username: username
          }));

        case 6:
          data = _context9.sent;
          console.log(data);
          res.send(data);
          _context9.next = 13;
          break;

        case 11:
          _context9.prev = 11;
          _context9.t0 = _context9["catch"](3);

        case 13:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[3, 11]]);
}); //注册

router.post('/reg', function _callee10(req, res) {
  var _req$body2, username, psw, nicheng;

  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _req$body2 = req.body, username = _req$body2.username, psw = _req$body2.psw, nicheng = _req$body2.nicheng;
          console.log(username, psw, nicheng);

          try {
            insert('user', [{
              username: username,
              psw: psw,
              nicheng: nicheng
            }]); //{username,password,age,gender}

            res.send(formatData());
          } catch (err) {
            res.send(formatData({
              code: 0
            }));
          }

        case 4:
        case "end":
          return _context10.stop();
      }
    }
  });
});
module.exports = router;