<script>
import { defineComponent } from "vue";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
//import '@/style/jt-virtual-keyboard.css';
export default /*#__PURE__*/ defineComponent({
  name: "JtVirtualKeyboard", // vue component name
  props: {
    keyboardClass: {
      default: "simple-keyboard",
      type: String,
    },
  },
  data: () => ({
    keyboard: null,
  }),
  mounted() {
    this.keyboard = new Keyboard(this.keyboardClass, {
      onChange: this.onChange,
      onKeyPress: this.onKeyPress,
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
        layoutName: shiftToggle,
      });
    },
  },
});
</script>

<template>
  <div :class="keyboardClass"></div>
</template>

<style>
.simple-keyboard {
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 100;
}
.simple-keyboard.show {
  display: block !important;
}

.simple-keyboard.hide {
  display: none !important;
}
.simple-keyboard .hg-button-close {
  flex: 0.11;
}
.simple-keyboard .hg-button-close:only-child {
  flex: 1;
}
</style>
