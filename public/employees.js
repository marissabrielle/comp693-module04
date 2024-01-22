"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _EmployeeList = _interopRequireDefault(require("./EmployeeList.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import ReactDOM from 'react-dom'

var root = (0, _client.createRoot)(document.getElementById('content'));
root.render( /*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(_EmployeeList["default"], null)));