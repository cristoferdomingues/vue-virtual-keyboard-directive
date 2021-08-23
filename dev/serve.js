import { createApp } from 'vue';
import Dev from './serve.vue';
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "app.use" call
import JtVirtualKeyboard from '@/entry.esm';
//import JtVirtualKeyboard from '../dist/jt-virtual-keyboard.esm';

const app = createApp(Dev);
app.use(JtVirtualKeyboard);

app.mount('#app');
