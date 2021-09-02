import SimpleKeyboardService from './services/simpleKeyboard.service';

document.addEventListener('DOMContentLoaded', SimpleKeyboardService.setup);

document.addEventListener(
  'click',
  SimpleKeyboardService.setCandidateBoxPosition
);

const jtVkDirective = {
  created(el, binding, vnode) {
    let input = SimpleKeyboardService.findInput(el);
    input.addEventListener('focus', (event) => {
      SimpleKeyboardService.toggleLayout(binding.arg);
      SimpleKeyboardService.setCurrentNode(vnode);
      SimpleKeyboardService.showKeyboard();
      SimpleKeyboardService.keyboard.setInput(event.target.value);
    });
    binding.instance.$watch('$route.path', () => {
      SimpleKeyboardService.hideKeyboard();
    });
  },
};
export default jtVkDirective;
