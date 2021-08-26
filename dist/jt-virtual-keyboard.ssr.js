'use strict';var vue=require('vue'),Keyboard=require('simple-keyboard');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var Keyboard__default=/*#__PURE__*/_interopDefaultLegacy(Keyboard);function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z$1 = "/*!\n * \n *   simple-keyboard v3.2.38\n *   https://github.com/hodgef/simple-keyboard\n *\n *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.\n *\n *   This source code is licensed under the MIT license found in the\n *   LICENSE file in the root directory of this source tree.\n *\n */.hg-theme-default{background-color:#ececec;border-radius:5px;box-sizing:border-box;font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;overflow:hidden;padding:5px;touch-action:manipulation;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.hg-theme-default .hg-button span{pointer-events:none}.hg-theme-default button.hg-button{border-width:0;font-size:inherit;outline:0}.hg-theme-default .hg-button{display:inline-block;flex-grow:1}.hg-theme-default .hg-row{display:flex}.hg-theme-default .hg-row:not(:last-child){margin-bottom:5px}.hg-theme-default .hg-row .hg-button:not(:last-child){margin-right:5px}.hg-theme-default .hg-row .hg-button-container{margin-right:5px}.hg-theme-default .hg-row>div:last-child{margin-right:0}.hg-theme-default .hg-row .hg-button-container{display:flex}.hg-theme-default .hg-button{-webkit-tap-highlight-color:rgba(0,0,0,0);align-items:center;background:#fff;border-bottom:1px solid #b5b5b5;border-radius:5px;box-shadow:0 0 3px -1px rgba(0,0,0,.3);box-sizing:border-box;cursor:pointer;display:flex;height:40px;justify-content:center;padding:5px}.hg-theme-default .hg-button.hg-standardBtn{width:20px}.hg-theme-default .hg-button.hg-activeButton{background:#efefef}.hg-theme-default.hg-layout-numeric .hg-button{align-items:center;display:flex;height:60px;justify-content:center;width:33.3%}.hg-theme-default .hg-button.hg-button-numpadadd,.hg-theme-default .hg-button.hg-button-numpadenter{height:85px}.hg-theme-default .hg-button.hg-button-numpad0{width:105px}.hg-theme-default .hg-button.hg-button-com{max-width:85px}.hg-theme-default .hg-button.hg-standardBtn.hg-button-at{max-width:45px}.hg-theme-default .hg-button.hg-selectedButton{background:rgba(5,25,70,.53);color:#fff}.hg-theme-default .hg-button.hg-standardBtn[data-skbtn=\".com\"]{max-width:82px}.hg-theme-default .hg-button.hg-standardBtn[data-skbtn=\"@\"]{max-width:60px}.hg-candidate-box{background:#ececec;border-bottom:2px solid #b5b5b5;border-radius:5px;display:inline-flex;margin-top:-10px;max-width:272px;position:absolute;transform:translateY(-100%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ul.hg-candidate-box-list{display:flex;flex:1;list-style:none;margin:0;padding:0}li.hg-candidate-box-list-item{align-items:center;display:flex;height:40px;justify-content:center;width:40px}li.hg-candidate-box-list-item:hover{background:rgba(0,0,0,.03);cursor:pointer}li.hg-candidate-box-list-item:active{background:rgba(0,0,0,.1)}.hg-candidate-box-prev:before{content:\"◄\"}.hg-candidate-box-next:before{content:\"►\"}.hg-candidate-box-next,.hg-candidate-box-prev{align-items:center;background:#d0d0d0;color:#969696;cursor:pointer;display:flex;padding:0 10px}.hg-candidate-box-next{border-bottom-right-radius:5px;border-top-right-radius:5px}.hg-candidate-box-prev{border-bottom-left-radius:5px;border-top-left-radius:5px}.hg-candidate-box-btn-active{color:#444}";
styleInject(css_248z$1);var script = /*#__PURE__*/vue.defineComponent({
  name: "JtVirtualKeyboard",
  // vue component name
  props: {
    keyboardClass: {
      default: "simple-keyboard",
      type: String
    }
  },
  data: function data() {
    return {
      keyboard: null
    };
  },
  mounted: function mounted() {
    this.keyboard = new Keyboard__default['default'](this.keyboardClass, {
      onChange: this.onChange,
      onKeyPress: this.onKeyPress
    });
  },
  methods: {
    onChange: function onChange(input) {
      console.log("onChange", input);
      this.$emit("onChange", input);
    },
    onKeyPress: function onKeyPress(button) {
      console.log("onKeyPress", button);
      this.$emit("onKeyPress", button);
      if (button === "{shift}" || button === "{lock}") this.handleShift();
    },
    handleShift: function handleShift() {
      var currentLayout = this.keyboard.options.layoutName;
      var shiftToggle = currentLayout === "default" ? "shift" : "default";
      this.keyboard.setOptions({
        layoutName: shiftToggle
      });
    }
  }
});function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(_ctx.keyboardClass)
  }, null, 2);
}var css_248z = "\n.simple-keyboard {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 100;\n}\n.simple-keyboard.show {\n  display: block !important;\n}\n.simple-keyboard.hide {\n  display: none !important;\n}\n.simple-keyboard .hg-button-close {\n  flex: 0.11;\n}\n.simple-keyboard .hg-button-close:only-child {\n  flex: 1;\n}\n.simple-keyboard.numeric-theme .hg-row:not(:last-child) {\n  display: grid;\n  grid-template-rows: auto;\n  grid-template-columns: repeat(3, calc(100% / 3));\n}\n.simple-keyboard.numeric-theme .hg-button.hg-standardBtn {\n  width: auto;\n}\n";
styleInject(css_248z);script.render = render;/* eslint-disable import/prefer-default-export */var components$1=/*#__PURE__*/Object.freeze({__proto__:null,JtVirtualKeyboard: script});var numericLayout = {
  layout: {
    // default: ['1 2 3', '4 5 6', '7 8 9', '0', '_ - .', '{bksp} {enter} {close}'],
    default: ['1 2 3', '4 5 6', '7 8 9', '{bksp} 0 {enter}', '{close}']
  }
};var en_USLayout = {
  layout: {
    default: ['` 1 2 3 4 5 6 7 8 9 0 - = {bksp}', '{tab} q w e r t y u i o p [ ] \\', "{lock} a s d f g h j k l ; ' {enter}", '{shift} z x c v b n m , . / {shift}', '.com @ {space} {close}'],
    shift: ['~ ! @ # $ % ^ & * ( ) _ + {bksp}', '{tab} Q W E R T Y U I O P { } |', '{lock} A S D F G H J K L : " {enter}', '{shift} Z X C V B N M < > ? {shift}', '.com @ {space} {close}']
  }
};var pt_BRLayout = {
  layout: {
    default: ["' 1 2 3 4 5 6 7 8 9 0 - = {bksp}", "{tab} q w e r t y u i o p ' [", '{lock} a s d f g h j k l ç ~ ] {enter}', '{shift} \\ z x c v b n m , . ; / {shift}', '.com @ {space} {close}'],
    shift: ['" ! @ # $ % ^ & * ( ) _ + {bksp}', '{tab} Q W E R T Y U I O P ` {', '{lock} A S D F G H J K L Ç ^ } {enter}', '{shift} | Z X C V B N M < > : ? {shift}', '.com @ {space} {close}']
  },
  layoutCandidates: {
    a: 'á à ã',
    A: 'Á À Ã',
    e: 'é è ê ë',
    E: 'É È Ê Ë',
    i: 'í ì',
    I: 'Í Ì',
    o: 'ô ö ò ó õ',
    O: 'Ô Ö Ò Ó Õ',
    u: 'û ü ù ú',
    U: 'Û Ü Ù Ú'
  }
}; //http://www.mhavila.com.br/link/unix/abnt2/
var keyboardLayouts=/*#__PURE__*/Object.freeze({__proto__:null,numericLayout: numericLayout,en_US: en_USLayout,pt_BR: pt_BRLayout});var keyboard;
var currentVnode;

var _onChange = function onChange(input) {
  var _currentVnode, _currentVnode$ref, _currentVnode$ref$i;

  if ((_currentVnode = currentVnode) !== null && _currentVnode !== void 0 && (_currentVnode$ref = _currentVnode.ref) !== null && _currentVnode$ref !== void 0 && (_currentVnode$ref$i = _currentVnode$ref.i) !== null && _currentVnode$ref$i !== void 0 && _currentVnode$ref$i.emit) {
    currentVnode.ref.i.emit('update:modelValue', input);
    return;
  }

  if (currentVnode.type.toLowerCase() === 'input' && currentVnode.props['onUpdate:modelValue']) {
    currentVnode.props['onUpdate:modelValue'](input);
  }
};

var _onKeyPress = function onKeyPress(button) {
  switch (button) {
    case '{shift}':
    case '{lock}':
      handleShift();
      break;

    case '{close}':
      hideKeyboard();
      break;

    case '{enter}':
      console.log(currentVnode);
      break;
  }
};

var handleShift = function handleShift() {
  var currentLayout = keyboard.options.layoutName;
  var shiftToggle = currentLayout === 'default' ? 'shift' : 'default';
  keyboard.setOptions({
    layoutName: shiftToggle
  });
  showKeyboard();
};

var toggleLayout = function toggleLayout(type) {
  var _keyboardLayouts$navi, _keyboardLayouts$navi2, _keyboardLayouts$navi3, _keyboardLayouts$navi4;

  var numericLayout$1 = numericLayout,
      pt_BR = pt_BRLayout,
      en_US = en_USLayout;

  switch (type) {
    case 'numeric':
      keyboard.setOptions({
        theme: 'hg-theme-default numeric-theme',
        layout: numericLayout$1.layout,
        layoutCandidates: numericLayout$1.layoutCandidates
      });
      break;

    case 'en':
      keyboard.setOptions({
        theme: 'hg-theme-default',
        layout: en_US.layout,
        layoutCandidates: en_US.layoutCandidates
      });
      break;

    case 'pt':
      keyboard.setOptions({
        theme: 'hg-theme-default',
        layout: pt_BR.layout,
        layoutCandidates: pt_BR.layoutCandidates
      });

    default:
      keyboard.setOptions({
        theme: 'hg-theme-default',
        layout: (_keyboardLayouts$navi = (_keyboardLayouts$navi2 = keyboardLayouts[navigator.language.replace('-', '_')]) === null || _keyboardLayouts$navi2 === void 0 ? void 0 : _keyboardLayouts$navi2.layout) !== null && _keyboardLayouts$navi !== void 0 ? _keyboardLayouts$navi : en_US.layout,
        layoutCandidates: (_keyboardLayouts$navi3 = (_keyboardLayouts$navi4 = keyboardLayouts[navigator.language.replace('-', '_')]) === null || _keyboardLayouts$navi4 === void 0 ? void 0 : _keyboardLayouts$navi4.layoutCandidates) !== null && _keyboardLayouts$navi3 !== void 0 ? _keyboardLayouts$navi3 : en_US.layoutCandidates
      });
      break;
  }
};

var showKeyboard = function showKeyboard() {
  if (!document.querySelector('body .simple-keyboard').classList.contains('show')) {
    document.querySelector('body .simple-keyboard').classList.remove('hide');
    document.querySelector('body .simple-keyboard').classList.add('show');
  }
};

var hideKeyboard = function hideKeyboard() {
  if (!document.querySelector('body .simple-keyboard').classList.contains('hide')) {
    document.querySelector('body .simple-keyboard').classList.remove('show');
    document.querySelector('body .simple-keyboard').classList.add('hide');
  }
};

var findInput = function findInput(el) {
  return el.tagName === 'INPUT' ? el : el.querySelector('input');
};

var setCandidateBoxPosition = function setCandidateBoxPosition(_ref) {
  var clientX = _ref.clientX,
      clientY = _ref.clientY;
  var keyboardPosition = document.querySelector('.simple-keyboard').getBoundingClientRect();
  var canditateBox = document.querySelector('.hg-candidate-box');

  if (canditateBox) {
    canditateBox.style.transform = "translate(calc(".concat(clientX, "px - 50%), calc(").concat(keyboardPosition.bottom, "px - ").concat(clientY, "px - 60px))");
  }
};

document.addEventListener('DOMContentLoaded', function (event) {
  var simpleKeyboardDiv = document.createRange().createContextualFragment("<div class=\"simple-keyboard jt-virtual-keyboard\"></div>");
  document.body.appendChild(simpleKeyboardDiv);
  keyboard = new Keyboard__default['default']({
    debug: false,
    enableLayoutCandidates: true,
    layoutCandidatesPageSize: 5,
    className: 'jt-virtual-keyboard',
    mergeDisplay: true,
    display: {
      '{close}': '⬇ close',
      '{bksp}': '⌫ backspace',
      '{enter}': '⏎ enter',
      '{shift}': '⬆ shift'
    },
    onChange: function onChange(input) {
      return _onChange(input);
    },
    onKeyPress: function onKeyPress(button) {
      return _onKeyPress(button);
    }
  });
});
document.addEventListener('click', setCandidateBoxPosition);
var jtVkDirective = {
  created: function created(el, binding, vnode) {
    var input = findInput(el);
    input.addEventListener('focus', function (event) {
      toggleLayout(binding.arg);
      currentVnode = vnode;
      showKeyboard();
      keyboard.setInput(event.target.value);
    });
  }
};
var jtVkDirective$1 = jtVkDirective;
/* 
keyboard

bottom: 770
height: 230
left: 0
right: 1440
top: 540
width: 1440
x: 0
y: 540


botão a 
client
x192 y656
page
x617 y148

translate: (calc(clientX - 50%),calc(keyboardBottom - clientY - 60px))
*/var directives=/*#__PURE__*/Object.freeze({__proto__:null,jtVk: jtVkDirective$1});var install = function installJtVirtualKeyboard(app) {
  Object.entries(components$1).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
  Object.entries(directives).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        directiveName = _ref4[0],
        directive = _ref4[1];

    app.directive(directiveName, directive);
  });
}; // Create module definition for Vue.use()
var components=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,JtVirtualKeyboard: script,jtVk: jtVkDirective$1});// only expose one global var, with component exports exposed as properties of
// that global var (eg. plugin.component)

Object.entries(components).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    install[componentName] = component;
  }
});module.exports=install;