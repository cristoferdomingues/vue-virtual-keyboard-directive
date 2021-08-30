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
      console.log(currentVnode);
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
        theme: 'hg-theme-default numeric-theme',
        layout: numericLayout.layout,
        layoutCandidates: numericLayout.layoutCandidates,
      });
      break;
    case 'en':
      keyboard.setOptions({
        theme: 'hg-theme-default',
        layout: en_US.layout,
        layoutCandidates: en_US.layoutCandidates,
      });
      break;
    case 'pt':
      keyboard.setOptions({
        theme: 'hg-theme-default',
        layout: pt_BR.layout,
        layoutCandidates: pt_BR.layoutCandidates,
      });
    default:
      keyboard.setOptions({
        theme: 'hg-theme-default',
        layout:
          keyboardLayouts[navigator.language.replace('-', '_')]?.layout ??
          en_US.layout,
        layoutCandidates:
          keyboardLayouts[navigator.language.replace('-', '_')]
            ?.layoutCandidates ?? en_US.layoutCandidates,
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

const setCandidateBoxPosition = ({ clientX, clientY, target }) => {
  console.log(target.type)
  let keyboardPosition = document
    .querySelector('.simple-keyboard')
    .getBoundingClientRect();
  let canditateBox = document.querySelector('.hg-candidate-box');
  if (canditateBox) {
    canditateBox.style.transform = `translate(calc(${clientX}px - 50%), calc(${keyboardPosition.bottom}px - ${clientY}px - 60px))`;
  }
  if(target.tagName.toLowerCase() !== 'input' && !target.classList.contains('hg-button')){
    hideKeyboard()
  }
};

document.addEventListener('DOMContentLoaded', (event) => {
  let simpleKeyboardDiv = document
    .createRange()
    .createContextualFragment(
      `<div class="simple-keyboard jt-virtual-keyboard"></div>`
    );
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
      '{shift}': '⬆ shift',
    },
    onChange: (input) => onChange(input),
    onKeyPress: (button) => onKeyPress(button),
  });
});

document.addEventListener('click', setCandidateBoxPosition);



const jtVkDirective = {
  created(el, binding, vnode) {
    let input = findInput(el);
    input.addEventListener('focus', (event) => {
      toggleLayout(binding.arg);
      currentVnode = vnode;
      showKeyboard();
      keyboard.setInput(event.target.value);
    });
    binding.instance.$watch('$route.path',()=>{
      hideKeyboard()
    })
  },
};

export default jtVkDirective;
