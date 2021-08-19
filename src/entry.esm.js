// Import vue components
import '@/style/jt-virtual-keyboard.css';
import * as components from '@/lib-components/index';
import * as directives from '@/lib-directives/index';
// install function executed by Vue.use()
const install = function installJtVirtualKeyboard(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
  Object.entries(directives).forEach(([directiveName, directive]) => {
    app.directive(directiveName, directive);
  });
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/lib-components/index';
export * from '@/lib-directives/index';
