import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import '@/style/jt-virtual-keyboard.css';

document.addEventListener('DOMContentLoaded', (event) => {
  let simpleKeyboardDiv = document
    .createRange()
    .createContextualFragment(
      `<div class="simple-keyboard" style="display: none"></div>`
    );
  document.body.appendChild(simpleKeyboardDiv);
});

class SimpleKeyboardService {
  constructor(inputEl) {
    this.input = inputEl;
    setTimeout(this.setup, 500);
    /*  if (!SimpleKeyboardService._instance) {
      SimpleKeyboardService._instance = this;
    }
    return SimpleKeyboardService._instance; */
  }

  setup() {
      debugger
    if (!this.keyboard)
      this.keyboard = new Keyboard({
        onChange: this.__onChange,
        onKeyPress: this.__onKeyPress,
      });
  }

  __onChange = (input) => {
    this.input.value = input;
    console.log('Input changed', input);
  };

  __onKeyPress = (button) => {
    console.log('Button pressed', button);
    if (button === '{shift}' || button === '{lock}') handleShift();
  };

  showKeyboard() {
    if (
      !document
        .querySelector('body .simple-keyboard')
        .classList.contains('show')
    ) {
      document.querySelector('body .simple-keyboard').classList.remove('hide');
      document.querySelector('body .simple-keyboard').classList.add('show');
    }
  }

  hideKeyboard() {
    if (
      !document
        .querySelector('body .simple-keyboard')
        .classList.contains('hide')
    ) {
      document.querySelector('body .simple-keyboard').classList.remove('show');
      document.querySelector('body .simple-keyboard').classList.add('hide');
    }
  }
}

export default SimpleKeyboardService;
