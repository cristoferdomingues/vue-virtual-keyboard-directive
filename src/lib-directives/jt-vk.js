import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import '@/style/jt-virtual-keyboard.css';
import * as keyboardLayouts from '@/shared/layouts';

let keyboard;

let currentVnode;

const onChange = (input) => {
  if (currentVnode?.ref?.i?.emit) {
    currentVnode.ref.i.emit('update:modelValue', input);
    return;
  }

  if (
    currentVnode.type.toLowerCase() === 'input' &&
    currentVnode.props['onUpdate:modelValue']
  ) {
    currentVnode.props['onUpdate:modelValue'](input);
  }
};

const onKeyPress = (button) => {
  switch (button) {
    case '{shift}':
    case '{lock}':
      handleShift();
      break;
    case '{close}':
      hideKeyboard();
      break;
    case '{enter}':
     console.log(currentVnode)
      break;
    default:
      break;
  }
};

const handleShift = () => {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === 'default' ? 'shift' : 'default';

  keyboard.setOptions({
    layoutName: shiftToggle,
  });
  showKeyboard();
};

const toggleLayout = (type) => {
  let { numericLayout, pt_BR, en_US } = keyboardLayouts;
  switch (type) {
    case 'numeric':
      keyboard.setOptions({
        layout: numericLayout.layout,
      });
      break;
    case 'en':
      keyboard.setOptions({
        layout: en_US.layout,
      });
      break;
    case 'pt':
      keyboard.setOptions({
        layout: pt_BR.layout,
      });
    default:
      keyboard.setOptions({
        layout:
          keyboardLayouts[navigator.language.replace('-', '_')]?.layout ??
          en_US.layout,
      });
      break;
  }
};

const showKeyboard = () => {
  if (
    !document.querySelector('body .simple-keyboard').classList.contains('show')
  ) {
    document.querySelector('body .simple-keyboard').classList.remove('hide');
    document.querySelector('body .simple-keyboard').classList.add('show');
  }
};
const hideKeyboard = () => {
  if (
    !document.querySelector('body .simple-keyboard').classList.contains('hide')
  ) {
    document.querySelector('body .simple-keyboard').classList.remove('show');
    document.querySelector('body .simple-keyboard').classList.add('hide');
  }
};

const findInput = (el) =>
  el.tagName === 'INPUT' ? el : el.querySelector('input');

document.addEventListener('DOMContentLoaded', (event) => {
  let simpleKeyboardDiv = document
    .createRange()
    .createContextualFragment(
      `<div class="simple-keyboard jt-virtual-keyboard"></div>`
    );
  document.body.appendChild(simpleKeyboardDiv);

  keyboard = new Keyboard({
    debug: false,
    className: 'jt-virtual-keyboard',
    mergeDisplay: true,
    display: {
      '{close}': 'close ⬇',
      '{bksp}': '⌫ backspace',
      '{enter}': '⏎ enter',
      '{shift}': '⬆ shift',
    },
    onChange: (input) => onChange(input),
    onKeyPress: (button) => onKeyPress(button),
  });
});

const jtVkDirective = {
  created(el, binding, vnode) {
    let input = findInput(el);
    input.addEventListener('focus', (event) => {
      toggleLayout(binding.arg);
      currentVnode = vnode;
      showKeyboard();
      keyboard.setInput(event.target.value);
    });
  },
};

export default jtVkDirective;
