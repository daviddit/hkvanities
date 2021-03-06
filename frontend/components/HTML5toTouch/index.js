"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactDndHtml5Backend = require("react-dnd-html5-backend");

var _reactDndTouchBackend = require("react-dnd-touch-backend");

var _dndMultiBackend = require("dnd-multi-backend");

var _default = {
  backends: [{
    backend: _reactDndHtml5Backend.HTML5Backend,
    transition: _dndMultiBackend.MouseTransition
  }, {
    backend: _reactDndTouchBackend.TouchBackend,
    options: {
      enableMouseEvents: false,
      delayTouchStart: 100,
    },
    preview: true,
    transition: _dndMultiBackend.TouchTransition
  }]
};
exports.default = _default;

