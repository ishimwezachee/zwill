"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createItem = exports.getItemById = exports.getAllItems = void 0;

var _model = _interopRequireDefault(require("../model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllItems = function getAllItems(req, res) {
  res.status(200).send(_model["default"]);
};

exports.getAllItems = getAllItems;

var getItemById = function getItemById(req, res) {
  var id = req.params.id;

  var result = _model["default"].find(function (item) {
    return item.id == id;
  });

  res.send(result);
};

exports.getItemById = getItemById;

var createItem = function createItem(req, res) {
  var body = req.body;

  _model["default"].push(body);

  return res.status(201).json({
    status: 201,
    message: 'Created!',
    data: body
  });
};

exports.createItem = createItem;