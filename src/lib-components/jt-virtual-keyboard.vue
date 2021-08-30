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
  top: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease-out;
}
.simple-keyboard.hg-theme-default {
  background-color: #dce8f2;
}

.simple-keyboard.hg-theme-default .hg-rows .hg-row .hg-button > span {
  color: #092147;
  font-size: 25px;
  font-weight: bold;
}

.simple-keyboard.numeric-theme .hg-rows .hg-row .hg-button > span {
  font-size: 30px;
}

.simple-keyboard.hg-theme-default .hg-candidate-box .hg-candidate-box-prev,
.simple-keyboard.hg-theme-default .hg-candidate-box .hg-candidate-box-next {
  background: #dce8f2;
  color: #092147;
}

.simple-keyboard.hg-theme-default .hg-candidate-box .hg-candidate-box-list {
  background-color: #fff;
}

.simple-keyboard.show {
  top: calc(100% - 230px);
}

.simple-keyboard.hide {
  top: 100%;
}
.simple-keyboard.hg-theme-default .hg-button.hg-button-close {
  flex: 0.11;
}

.simple-keyboard.hg-theme-default .hg-button.hg-button-close:only-child {
  flex: 1;
}

.simple-keyboard.numeric-theme .hg-row:not(:last-child) {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, calc(100% / 3));
}

.simple-keyboard.numeric-theme .hg-button.hg-standardBtn {
  width: auto;
}

/* Small Devices */
@media (min-width: 43em) {
  .simple-keyboard.hg-theme-default .hg-rows .hg-row .hg-button > span {
    font-size: 15px !important;
  }

  .simple-keyboard.numeric-theme .hg-rows .hg-row .hg-button > span {
    font-size: 20px !important;
  }
}

/* Large Devices */
@media (min-width: 62em) {
  .simple-keyboard.hg-theme-default .hg-rows .hg-row .hg-button > span {
    font-size: 20px !important;
  }

  .simple-keyboard.numeric-theme .hg-rows .hg-row .hg-button > span {
    font-size: 25px !important;
  }
}

/* Extra Large Devices */
@media (min-width: 82em) {
  .simple-keyboard.hg-theme-default .hg-rows .hg-row .hg-button > span {
    color: #092147;
    font-size: 25px;
    font-weight: bold;
  }

  .simple-keyboard.numeric-theme .hg-rows .hg-row .hg-button > span {
    font-size: 30px;
  }
}

@media (max-width: 62em) {
  .simple-keyboard.hg-theme-default .hg-rows .hg-row .hg-button > span {
    font-size: 10px !important;
  }

  .simple-keyboard.numeric-theme .hg-rows .hg-row .hg-button > span {
    font-size: 15px !important;
  }
}
</style>
