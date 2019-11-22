"use strict";

exports.formatData = function formData() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$code = _ref.code,
      code = _ref$code === void 0 ? 1 : _ref$code,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$msg = _ref.msg,
      msg = _ref$msg === void 0 ? 'success' : _ref$msg;

  // let {code,data,msg} = {code:0}
  // let {code,data,msg} = undefined
  if (code === 0) {
    msg = 'fail';
  }

  return {
    code: code,
    data: data,
    msg: msg
  };
};

var _require = require('./token'),
    create = _require.create,
    verify = _require.verify;

exports.token = {
  create: create,
  verify: verify
}; // {
//     formatData,
//     token:{
//         create,
//         verify
//     }
// }