<script>
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { JtVirtualKeyboardSample } from '@/entry.esm';

export default defineComponent({
  name: "ServeDev",
  // components: {
  //  JtVirtualKeyboardSample,
  // }
  data: () => ({
    name: "",
    lastname: "",
    phone: "",
  }),
});
</script>

<template>
  <div id="app">
    <label for="name">Name</label>
    <input id="name" type="text" v-model="name" v-jt-vk />
    <label for="lastname">Last Name</label>
    <input id="lastname" type="text" v-model="lastname" v-jt-vk/>
    <label for="phonenumber">Phone Number</label>
    <input id="phonenumber" type="text" v-model="phone" v-jt-vk:numeric />
    <!--  <jt-virtual-keyboard /> -->
  </div>
  <div>{{ name }}, {{ lastname }}, {{ phone }}</div>
</template>
<style scoped>
#app {
  margin: 30px 15px 0 15px;
}
input {
  width: 100%;
  height: 30px;
  margin-bottom: 30px;
}
</style>