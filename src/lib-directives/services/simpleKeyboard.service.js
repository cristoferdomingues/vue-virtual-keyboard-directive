import Keyboard from 'simple-keyboard';
import * as keyboardLayouts from '@/shared/layouts';
import 'simple-keyboard/build/css/index.css';
import '@/style/jt-virtual-keyboard.css';

const SimpleKeyboardService = {
  keyboard: null,

  currentVnode: null,

  setup() {
    if (!document.querySelector('body .simple-keyboard')) {
      let simpleKeyboardDiv = document
        .createRange()
        .createContextualFragment(
          `<div data-testid="simple-keyboard" class="simple-keyboard jt-virtual-keyboard"></div>`
        );
      document.body.appendChild(simpleKeyboardDiv);

      SimpleKeyboardService.keyboard = new Keyboard({
        debug: false,
        enableLayoutCandidates: true,
        useButtonTag: true,
        layoutCandidatesPageSize: 5,
        className: 'jt-virtual-keyboard',
        mergeDisplay: true,
        disableCaretPositioning:true,
        display: {
          '{close}': '⬇ close',
          '{bksp}': '⌫ apagar',
          '{enter}': '⏎ enter',
          '{shift}': '⬆ shift',
        },
        onChange: (input) => SimpleKeyboardService.onChange(input),
        onKeyPress: (button) => SimpleKeyboardService.onKeyPress(button),
      });
    }
  },

  setCurrentNode(vNode) {
    SimpleKeyboardService.currentVnode = vNode;
  },

  onChange(input) {
    if (SimpleKeyboardService.currentVnode?.ref?.i?.emit) {
      SimpleKeyboardService.currentVnode.ref.i.emit('update:modelValue', input);
      return;
    }

    if (
      SimpleKeyboardService.currentVnode.type.toLowerCase() === 'input' &&
      SimpleKeyboardService.currentVnode.props['onUpdate:modelValue']
    ) {
      SimpleKeyboardService.currentVnode.props['onUpdate:modelValue'](input);
    }
  },

  onKeyPress(button) {
    switch (button) {
      case '{shift}':
      case '{lock}':
        SimpleKeyboardService.handleShift();
        break;
      case '{close}':
        SimpleKeyboardService.hideKeyboard();
        break;
      case '{enter}':
        SimpleKeyboardService.hideKeyboard();
        break;
      default:
        break;
    }
  },

  handleShift() {
    let currentLayout = SimpleKeyboardService.keyboard.options.layoutName;
    let shiftToggle = currentLayout === 'default' ? 'shift' : 'default';

    SimpleKeyboardService.keyboard.setOptions({
      layoutName: shiftToggle,
    });
    SimpleKeyboardService.showKeyboard();
  },

  toggleLayout(type) {
    let { numericLayout, pt_BR, en_US } = keyboardLayouts;
    switch (type) {
      case 'numeric':
        SimpleKeyboardService.keyboard.setOptions({
          theme: 'hg-theme-default numeric-theme',
          layout: numericLayout.layout,
          layoutCandidates: numericLayout.layoutCandidates,
        });
        break;
      case 'en':
        SimpleKeyboardService.keyboard.setOptions({
          theme: 'hg-theme-default',
          layout: en_US.layout,
          layoutCandidates: en_US.layoutCandidates,
        });
        break;
      case 'pt':
        SimpleKeyboardService.keyboard.setOptions({
          theme: 'hg-theme-default',
          layout: pt_BR.layout,
          layoutCandidates: pt_BR.layoutCandidates,
        });
      default:
        SimpleKeyboardService.keyboard.setOptions({
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
  },

  showKeyboard() {
    if (
      !document
        .querySelector('body .simple-keyboard')
        .classList.contains('show')
    ) {
      document.querySelector('body .simple-keyboard').classList.remove('hide');
      document.querySelector('body .simple-keyboard').classList.add('show');
    }
  },

  hideKeyboard() {
    if (
      !document
        .querySelector('body .simple-keyboard')
        .classList.contains('hide')
    ) {
      document.querySelector('body .simple-keyboard').classList.remove('show');
      document.querySelector('body .simple-keyboard').classList.add('hide');
    }
  },

  findInput(el) {
    return el.tagName === 'INPUT' ? el : el.querySelector('input');
  },

  setCandidateBoxPosition({ clientX, clientY, target }) {
    let keyboardPosition = document
      .querySelector('.simple-keyboard')
      .getBoundingClientRect();
    let canditateBox = document.querySelector('.hg-candidate-box');
    if (canditateBox) {
      canditateBox.style.transform = `translate(calc(${clientX}px - 50%), calc(${keyboardPosition.bottom}px - ${clientY}px - 60px))`;
    }
    if (
      target.tagName.toLowerCase() !== 'input' &&
      !target.classList.contains('hg-button')
    ) {
      SimpleKeyboardService.hideKeyboard();
    }
  },
};
export default SimpleKeyboardService;
