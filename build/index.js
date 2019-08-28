"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //use the middlewares

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use('/search', _routes["default"]);
app.get('/', function (req, res) {
  res.send('I love my country so much');
});
var PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
  console.log("App is learning on port ".concat(PORT));
});
var _default = app;
exports["default"] = _default;