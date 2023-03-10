<template>
  <button
    type="button"
    @click="handleButtonClicked"
    :class="['menu_icon', 'icon-menu', { 'open-menu': isMenuClosed }]"
  >
    <span class="icon-menu_line"></span>
  </button>
</template>

<script setup>
import { ref } from "vue";

let isMenuClosed = ref(false);

const emit = defineEmits(["sendBurgerState"]);

function handleButtonClicked() {
  console.log(isMenuClosed.value);
  isMenuClosed.value
    ? (isMenuClosed.value = false)
    : (isMenuClosed.value = true);
  emit("sendBurgerState", isMenuClosed.value);
}
</script>

<style lang="scss" scoped>
.icon-menu {
  display: block;
  position: relative;
  z-index: 5;
  width: 30px;
  height: 20px;

  @media (min-width: 797.98px) {
    display: none;
  }
}

.icon-menu_line,
.icon-menu::after,
.icon-menu::before {
  content: "";
  position: absolute;
  background-color: var(--color-accent);
  height: 3px;
  width: 100%;
  left: 0;
  transition: all 0.3s;
}
.icon-menu_line {
  top: calc(50% - 1px);
}
.icon-menu::before {
  top: 0;
}
.icon-menu::after {
  bottom: 0;
}
.open-menu .icon-menu_line {
  left: 50%;
  width: 0;
}

.open-menu.icon-menu::before {
  top: calc(50% - 1px);
  transform: rotate(-45deg);
}

.open-menu.icon-menu::after {
  top: calc(50% - 1px);
  transform: rotate(45deg);
}
</style>
