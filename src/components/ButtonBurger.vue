<template>
  <button
    type="button"
    @click="handleButtonClicked"
    :class="['burger-menu', { 'open-burger': isMenuClosed }]"
  >
    <span class="burger-menu_line"></span>
  </button>
</template>

<script setup>
import { ref } from "vue";

let isMenuClosed = ref(false);

const emit = defineEmits(["sendBurgerState"]);

function handleButtonClicked() {
  isMenuClosed.value = !isMenuClosed.value;
  emit("sendBurgerState", isMenuClosed.value);
}
</script>

<style lang="scss" scoped>
.burger-menu {
  display: block;
  position: relative;
  z-index: 5;
  width: 36px;
  height: 24px;

  @media (min-width: 500px) {
    width: 50px;
    height: 32px;
  }

  @media (min-width: 800px) {
    display: none;
  }
}

.burger-menu_line,
.burger-menu::after,
.burger-menu::before {
  content: "";
  position: absolute;
  background-color: $color-accent;
  height: 3px;
  width: 100%;
  left: 0;
  transition: all 0.3s;
}
.burger-menu_line {
  top: calc(50% - 1px);
}
.burger-menu::before {
  top: 0;
}
.burger-menu::after {
  bottom: 0;
}
.open-burger .burger-menu_line {
  left: 50%;
  width: 0;
}

.open-burger.burger-menu::before {
  top: calc(50% - 1px);
  transform: rotate(-45deg);
}

.open-burger.burger-menu::after {
  top: calc(50% - 1px);
  transform: rotate(45deg);
}
</style>
