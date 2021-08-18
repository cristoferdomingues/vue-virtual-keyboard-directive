import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import '@/style/jt-virtual-keyboard.css';
import { numericLayout, englishLayout } from '@/shared/layouts';

let keyboard;

let currentElement;

const onChange = (input) => {
  currentElement.value = input;
  console.log('Input changed', input);
};

const onKeyPress = (button) => {
  console.log('Button pressed', button);
  if (button === '{shift}' || button === '{lock}') handleShift();
};

const handleShift = () => {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === 'default' ? 'shift' : 'default';

  keyboard.setOptions({
    layoutName: shiftToggle,
  });
};

const toggleLayout = (type) => {
  switch (type) {
    case 'numeric':
      keyboard.setOptions({
        layout: numericLayout.layout,
      });
      break;

    default:
      keyboard.setOptions({
        layout: englishLayout.layout,
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

document.addEventListener('DOMContentLoaded', (event) => {
  let simpleKeyboardDiv = document
    .createRange()
    .createContextualFragment(
      `<div class="simple-keyboard" style="display: none"></div>`
    );
  document.body.appendChild(simpleKeyboardDiv);
  keyboard = new Keyboard({
    debug: true,
    onChange: (input) => onChange(input),
    onKeyPress: (button) => onKeyPress(button),
  });
});

const jtVkDirective = {
  created(el, binding) {
    el.addEventListener('focus', (event) => {
      toggleLayout(binding.arg);
      currentElement = el;
      showKeyboard();
      keyboard.setInput(event.target.value);
    });
    el.addEventListener('blur', (event) => {
      //hideKeyboard();
    });
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {}, // new
  updated() {},
  beforeUnmount() {}, // new
  unmounted() {},
};

export default jtVkDirective;
