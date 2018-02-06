"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wide = require("../wide.json");

var _wide2 = _interopRequireDefault(_wide);

var _icon = require("../icon.json");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var versions = { wide: _wide2.default, icon: _icon2.default };

var noop = function noop() {};

var checkAnimationName = function checkAnimationName(f) {
  return function (e) {
    return e.animationName.includes("roll") && f && f();
  };
};

var Line = function Line(_ref) {
  var index = _ref.index,
      dashes = _ref.dashes,
      total = _ref.total,
      onAnimationEnd = _ref.onAnimationEnd;
  return _react2.default.createElement(
    "g",
    { className: "l" + index },
    dashes.map(function (_ref2, j) {
      var color = _ref2.color;
      return _react2.default.createElement("path", {
        d: "m 5 " + (index * 20 + 5) + " l " + total + " 0",
        key: j,
        className: ["dash", "p" + j, "c" + color].join(" "),
        onAnimationEnd: j === 0 ? checkAnimationName(onAnimationEnd) : noop
      });
    })
  );
};

var AnimatedLogo = function AnimatedLogo(_ref3) {
  var version = _ref3.version,
      rolling = _ref3.rolling,
      onAnimationEnd = _ref3.onAnimationEnd,
      props = _objectWithoutProperties(_ref3, ["version", "rolling", "onAnimationEnd"]);

  var _versions$version = versions[version],
      lines = _versions$version.lines,
      total = _versions$version.total;

  var height = lines.length * 20 - 10;
  var width = total + 20;
  var classes = ["prettier-logo-" + version, rolling ? "rolling" : null];
  return _react2.default.createElement(
    "svg",
    _extends({
      height: height,
      width: width,
      className: classes.join(" "),
      viewBox: "0 0 " + width + " " + height,
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      version: "1.1"
    }, props),
    lines.map(function (_ref4, index) {
      var dashes = _ref4.dashes;
      return _react2.default.createElement(Line, {
        total: total,
        dashes: dashes,
        index: index,
        key: index,
        onAnimationEnd: index === lines.length - 1 ? onAnimationEnd : noop
      });
    })
  );
};

exports.default = AnimatedLogo;