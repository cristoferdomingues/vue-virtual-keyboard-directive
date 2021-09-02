# JT-VIRTUAL-KEYBOARD

## _A Virtual Keyboard Vue 3 Directive_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

JT-VIRTUAL-KEYBOARD is a Vue 3 directive which renders a virtual keyboard when focus in a input element

## Features

- Render a instance of [SimpleKeyboard](https://simple-keyboard.com/), customized to Jtech's needs

## Installation

Add jt-virtual-keyboard to your package.json

```sh
yarn add jt-virtual-keyboard
```

or

```sh
npm install jt-virtual-keyboard --save
```

## Usage

Use it on Vue 3

```js
import { createApp } from 'vue';
import JtVirtualKeyboard from 'jt-virtual-keyboard';
const app = createApp({
  /* options */
});
app.use(JtVirtualKeyboard);
app.mount('#app');
```

Into your component

```html
<input id="name" type="text" v-model="name" v-jt-vk />
<input id="phonenumber" type="text" v-model="phone" v-jt-vk:numeric />
```

## Arguments

### numeric

When numeric argument the virtual keyboard will render in a numeric mode

```html
<input id="phonenumber" type="text" v-model="phone" v-jt-vk:numeric />
```

### pt (default)

When pt argument the virtual keyboard will render a keyboard as ABNT2 standard keys set

```html
<input id="name" type="text" v-model="phone" v-jt-vk:pt />
```

### en

When pt argument the virtual keyboard will render a keyboard as EN_US standard keys set

```html
<input id="name" type="text" v-model="phone" v-jt-vk:en />
```

## License

MIT

**Free Software, Hell Yeah!**
