<script>
import { defineComponent } from "vue";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";
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
      console.log('onChange', input);
      this.$emit("onChange", input);
    },
    onKeyPress(button) {
       console.log('onKeyPress', button);
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

<style scoped>
/* .jt-virtual-keyboard-sample {
  display: block;
  width: 400px;
  margin: 25px auto;
  border: 1px solid #ccc;
  background: #eaeaea;
  text-align: center;
  padding: 25px;
}
.jt-virtual-keyboard-sample p {
  margin: 0 0 1em;
} */
</style>
