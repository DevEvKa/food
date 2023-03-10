<template>
  <a href="#" @click="handleButtonClicked" class="button-cart">
    <img
      src="../assets/images/icons/icon_cart.svg"
      class="button-cart_img"
      alt="Корзина"
    />
  </a>
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
.button-cart {
  display: none;

  @media (min-width: 797.98px) {
    display: flex;
    padding: 0 15px;
    align-items: center;

    &::after {
      content: "";
      height: 60px;
      display: block;
      position: absolute;
      border-right: 1px solid var(--color-primary-light);
      top: 0;
      right: 0;
    }
  }

  &_img {
    width: 50px;
    height: 50px;
  }
}
</style>
