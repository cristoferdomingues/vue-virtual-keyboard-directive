import { defineComponent, openBlock, createElementBlock, normalizeClass } from 'vue';
import Keyboard from 'simple-keyboard';

function styleInject(css, ref) {
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
}

var css_248z$1 = "/*!\n * \n *   simple-keyboard v3.2.38\n *   https://github.com/hodgef/simple-keyboard\n *\n *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.\n *\n *   This source code is licensed under the MIT license found in the\n *   LICENSE file in the root directory of this source tree.\n *\n */.hg-theme-default{background-color:#ececec;border-radius:5px;box-sizing:border-box;font-family:HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;overflow:hidden;padding:5px;touch-action:manipulation;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.hg-theme-default .hg-button span{pointer-events:none}.hg-theme-default button.hg-button{border-width:0;font-size:inherit;outline:0}.hg-theme-default .hg-button{display:inline-block;flex-grow:1}.hg-theme-default .hg-row{display:flex}.hg-theme-default .hg-row:not(:last-child){margin-bottom:5px}.hg-theme-default .hg-row .hg-button:not(:last-child){margin-right:5px}.hg-theme-default .hg-row .hg-button-container{margin-right:5px}.hg-theme-default .hg-row>div:last-child{margin-right:0}.hg-theme-default .hg-row .hg-button-container{display:flex}.hg-theme-default .hg-button{-webkit-tap-highlight-color:rgba(0,0,0,0);align-items:center;background:#fff;border-bottom:1px solid #b5b5b5;border-radius:5px;box-shadow:0 0 3px -1px rgba(0,0,0,.3);box-sizing:border-box;cursor:pointer;display:flex;height:40px;justify-content:center;padding:5px}.hg-theme-default .hg-button.hg-standardBtn{width:20px}.hg-theme-default .hg-button.hg-activeButton{background:#efefef}.hg-theme-default.hg-layout-numeric .hg-button{align-items:center;display:flex;height:60px;justify-content:center;width:33.3%}.hg-theme-default .hg-button.hg-button-numpadadd,.hg-theme-default .hg-button.hg-button-numpadenter{height:85px}.hg-theme-default .hg-button.hg-button-numpad0{width:105px}.hg-theme-default .hg-button.hg-button-com{max-width:85px}.hg-theme-default .hg-button.hg-standardBtn.hg-button-at{max-width:45px}.hg-theme-default .hg-button.hg-selectedButton{background:rgba(5,25,70,.53);color:#fff}.hg-theme-default .hg-button.hg-standardBtn[data-skbtn=\".com\"]{max-width:82px}.hg-theme-default .hg-button.hg-standardBtn[data-skbtn=\"@\"]{max-width:60px}.hg-candidate-box{background:#ececec;border-bottom:2px solid #b5b5b5;border-radius:5px;display:inline-flex;margin-top:-10px;max-width:272px;position:absolute;transform:translateY(-100%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ul.hg-candidate-box-list{display:flex;flex:1;list-style:none;margin:0;padding:0}li.hg-candidate-box-list-item{align-items:center;display:flex;height:40px;justify-content:center;width:40px}li.hg-candidate-box-list-item:hover{background:rgba(0,0,0,.03);cursor:pointer}li.hg-candidate-box-list-item:active{background:rgba(0,0,0,.1)}.hg-candidate-box-prev:before{content:\"◄\"}.hg-candidate-box-next:before{content:\"►\"}.hg-candidate-box-next,.hg-candidate-box-prev{align-items:center;background:#d0d0d0;color:#969696;cursor:pointer;display:flex;padding:0 10px}.hg-candidate-box-next{border-bottom-right-radius:5px;border-top-right-radius:5px}.hg-candidate-box-prev{border-bottom-left-radius:5px;border-top-left-radius:5px}.hg-candidate-box-btn-active{color:#444}";
styleInject(css_248z$1);

var script = /*#__PURE__*/defineComponent({
  name: "JtVirtualKeyboard",
  // vue component name
  props: {
    keyboardClass: {
      default: "simple-keyboard",
      type: String
    }
  },
  data: () => ({
    keyboard: null
  }),

  mounted() {
    this.keyboard = new Keyboard(this.keyboardClass, {
      onChange: this.onChange,
      onKeyPress: this.onKeyPress
    });
  },

  methods: {
    onChange(input) {
      console.log("onChange", input);
      this.$emit("onChange", input);
    },

    onKeyPress(button) {
      console.log("onKeyPress", button);
      this.$emit("onKeyPress", button);
      if (button === "{shift}" || button === "{lock}") this.handleShift();
    },

    handleShift() {
      let currentLayout = this.keyboard.options.layoutName;
      let shiftToggle = currentLayout === "default" ? "shift" : "default";
      this.keyboard.setOptions({
        layoutName: shiftToggle
      });
    }

  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.keyboardClass)
  }, null, 2);
}

var css_248z = "\n.simple-keyboard {\n  top: 100%;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  z-index: 100;\n  transition: all 0.3s ease-out;\n}\n.simple-keyboard.hg-theme-default {\n  background-color: #dce8f2;\n}\n.simple-keyboard.hg-theme-default .hg-rows .hg-row .hg-button > span {\n  color: #092147;\n  font-size: 25px;\n  font-weight: bold;\n}\n.simple-keyboard.numeric-theme .hg-rows .hg-row .hg-button > span {\n  font-size: 30px;\n}\n.simple-keyboard.hg-theme-default .hg-candidate-box .hg-candidate-box-prev,\n.simple-keyboard.hg-theme-default .hg-candidate-box .hg-candidate-box-next {\n  background: #dce8f2;\n  color: #092147;\n}\n.simple-keyboard.hg-theme-default .hg-candidate-box .hg-candidate-box-list {\n  background-color: #fff;\n}\n.simple-keyboard.show {\n  top: calc(100% - 230px);\n}\n.simple-keyboard.hide {\n  top: 100%;\n}\n.simple-keyboard.hg-theme-default .hg-button.hg-button-close {\n  flex: 0.11;\n}\n.simple-keyboard.hg-theme-default .hg-button.hg-button-close:only-child {\n  flex: 1;\n}\n.simple-keyboard.numeric-theme .hg-row:not(:last-child) {\n  display: grid;\n  grid-template-rows: auto;\n  grid-template-columns: repeat(3, calc(100% / 3));\n}\n.simple-keyboard.numeric-theme .hg-button.hg-standardBtn {\n  width: auto;\n}\n\n/* Small Devices */\n@media (min-width: 43em) {\n.simple-keyboard.hg-theme-default .hg-rows .hg-row .hg-button > span {\n    font-size: 15px !important;\n}\n.simple-keyboard.numeric-theme .hg-rows .hg-row .hg-button > span {\n    font-size: 20px !important;\n}\n}\n\n/* Large Devices */\n@media (min-width: 62em) {\n.simple-keyboard.hg-theme-default .hg-rows .hg-row .hg-button > span {\n    font-size: 20px !important;\n}\n.simple-keyboard.numeric-theme .hg-rows .hg-row .hg-button > span {\n    font-size: 25px !important;\n}\n}\n\n/* Extra Large Devices */\n@media (min-width: 82em) {\n.simple-keyboard.hg-theme-default .hg-rows .hg-row .hg-button > span {\n    color: #092147;\n    font-size: 25px;\n    font-weight: bold;\n}\n.simple-keyboard.numeric-theme .hg-rows .hg-row .hg-button > span {\n    font-size: 30px;\n}\n}\n@media (max-width: 62em) {\n.simple-keyboard.hg-theme-default .hg-rows .hg-row .hg-button > span {\n    font-size: 10px !important;\n}\n.simple-keyboard.numeric-theme .hg-rows .hg-row .hg-button > span {\n    font-size: 15px !important;\n}\n}\n";
styleInject(css_248z);

script.render = render;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  JtVirtualKeyboard: script
});

var numericLayout = {
  layout: {
    // default: ['1 2 3', '4 5 6', '7 8 9', '0', '_ - .', '{bksp} {enter} {close}'],
    default: ['1 2 3', '4 5 6', '7 8 9', '{bksp} 0 {enter}', '{close}']
  }
};

var en_USLayout = {
  layout: {
    default: ['` 1 2 3 4 5 6 7 8 9 0 - = {bksp}', '{tab} q w e r t y u i o p [ ] \\', "{lock} a s d f g h j k l ; ' {enter}", '{shift} z x c v b n m , . / {shift}', '.com @ {space} {close}'],
    shift: ['~ ! @ # $ % ^ & * ( ) _ + {bksp}', '{tab} Q W E R T Y U I O P { } |', '{lock} A S D F G H J K L : " {enter}', '{shift} Z X C V B N M < > ? {shift}', '.com @ {space} {close}']
  }
};

var pt_BRLayout = {
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

var keyboardLayouts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  numericLayout: numericLayout,
  en_US: en_USLayout,
  pt_BR: pt_BRLayout
});

let keyboard;
let currentVnode;

const onChange = input => {
  var _currentVnode, _currentVnode$ref, _currentVnode$ref$i;

  if ((_currentVnode = currentVnode) !== null && _currentVnode !== void 0 && (_currentVnode$ref = _currentVnode.ref) !== null && _currentVnode$ref !== void 0 && (_currentVnode$ref$i = _currentVnode$ref.i) !== null && _currentVnode$ref$i !== void 0 && _currentVnode$ref$i.emit) {
    currentVnode.ref.i.emit('update:modelValue', input);
    return;
  }

  if (currentVnode.type.toLowerCase() === 'input' && currentVnode.props['onUpdate:modelValue']) {
    currentVnode.props['onUpdate:modelValue'](input);
  }
};

const onKeyPress = button => {
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

const handleShift = () => {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === 'default' ? 'shift' : 'default';
  keyboard.setOptions({
    layoutName: shiftToggle
  });
  showKeyboard();
};

const toggleLayout = type => {
  var _keyboardLayouts$navi, _keyboardLayouts$navi2;

  let {
    numericLayout,
    pt_BR,
    en_US
  } = keyboardLayouts;

  switch (type) {
    case 'numeric':
      keyboard.setOptions({
        theme: 'hg-theme-default numeric-theme',
        layout: numericLayout.layout,
        layoutCandidates: numericLayout.layoutCandidates
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
        layout: ((_keyboardLayouts$navi = keyboardLayouts[navigator.language.replace('-', '_')]) === null || _keyboardLayouts$navi === void 0 ? void 0 : _keyboardLayouts$navi.layout) ?? en_US.layout,
        layoutCandidates: ((_keyboardLayouts$navi2 = keyboardLayouts[navigator.language.replace('-', '_')]) === null || _keyboardLayouts$navi2 === void 0 ? void 0 : _keyboardLayouts$navi2.layoutCandidates) ?? en_US.layoutCandidates
      });
      break;
  }
};

const showKeyboard = () => {
  if (!document.querySelector('body .simple-keyboard').classList.contains('show')) {
    document.querySelector('body .simple-keyboard').classList.remove('hide');
    document.querySelector('body .simple-keyboard').classList.add('show');
  }
};

const hideKeyboard = () => {
  if (!document.querySelector('body .simple-keyboard').classList.contains('hide')) {
    document.querySelector('body .simple-keyboard').classList.remove('show');
    document.querySelector('body .simple-keyboard').classList.add('hide');
  }
};

const findInput = el => el.tagName === 'INPUT' ? el : el.querySelector('input');

const setCandidateBoxPosition = ({
  clientX,
  clientY
}) => {
  let keyboardPosition = document.querySelector('.simple-keyboard').getBoundingClientRect();
  let canditateBox = document.querySelector('.hg-candidate-box');

  if (canditateBox) {
    canditateBox.style.transform = `translate(calc(${clientX}px - 50%), calc(${keyboardPosition.bottom}px - ${clientY}px - 60px))`;
  }
};

document.addEventListener('DOMContentLoaded', event => {
  let simpleKeyboardDiv = document.createRange().createContextualFragment(`<div class="simple-keyboard jt-virtual-keyboard"></div>`);
  document.body.appendChild(simpleKeyboardDiv);
  keyboard = new Keyboard({
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
    onChange: input => onChange(input),
    onKeyPress: button => onKeyPress(button)
  });
});
document.addEventListener('click', setCandidateBoxPosition);
const jtVkDirective = {
  created(el, binding, vnode) {
    let input = findInput(el);
    input.addEventListener('focus', event => {
      toggleLayout(binding.arg);
      currentVnode = vnode;
      showKeyboard();
      keyboard.setInput(event.target.value);
    });
  }

};
var jtVkDirective$1 = jtVkDirective;

var directives = /*#__PURE__*/Object.freeze({
  __proto__: null,
  jtVk: jtVkDirective$1
});

// Import vue components

const install = function installJtVirtualKeyboard(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
  Object.entries(directives).forEach(([directiveName, directive]) => {
    app.directive(directiveName, directive);
  });
}; // Create module definition for Vue.use()

export { script as JtVirtualKeyboard, install as default, jtVkDirective$1 as jtVk };
