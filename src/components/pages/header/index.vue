<template>
  <header class="header">
    <div class="content-wrapper header_content-wrapper">
      <the-logo></the-logo>
      <div class="header_links" :class="{ open: isMenuOpen }">
        <nav-menu></nav-menu>
        <div class="cart-phone">
          <button-cart class="header_cart">В корзину</button-cart>
          <phone-block></phone-block>
        </div>

        <button-main class="header_button"
          ><template v-slot:button>Заказ столика</template></button-main
        >
      </div>
      <button-burger @sendBurgerState="openMenu"></button-burger>
    </div>
  </header>
</template>

<script setup>
import TheLogo from "@/components/TheLogo.vue";
import NavMenu from "@/components/NavMenu.vue";
import ButtonCart from "../../ButtonCart.vue";
import PhoneBlock from "@/components/PhoneBlock.vue";
import ButtonMain from "@/components/ButtonMain.vue";
import ButtonBurger from "../../ButtonBurger.vue";

import { ref } from "vue";

let isMenuOpen = ref(false);

const openMenu = (burgerState) => {
  isMenuOpen.value = burgerState;
};
</script>

<style lang="scss" scoped>
.header {
  background-color: lightgreen;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;

  &_content-wrapper {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 20px;
    min-height: 70px;

    @media (min-width: 797.98px) {
      justify-content: space-between;
    }
  }

  &_links {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    transition: all 0.3s;
    padding: 100px 15px 20px 15px;
    overflow: auto;

    &.open {
      left: 0;
      background-color: $color-primary-dark;
    }
    @media (min-width: 800px) {
      overflow: visible;
      position: relative;
      display: flex;
      left: 0;
      height: auto;
      padding: 0;
    }
  }

  &_cart {
    display: flex;
    &::after {
      content: "";
      height: 60px;
      display: block;
      position: absolute;
      border-right: 1px solid $color-primary-light;
      top: 0;
      right: 0;
    }
  }
  &_button {
    margin-left: 20px;
    font-size: 25px;
    padding: 28px 32px;
    @media (min-width: 800px) {
      font-size: 14px;
      margin-left: 0;
      padding: 10px;
    }
    @media (min-width: 1000px) {
      padding: 12px 16px;
    }
    @media (min-width: 1200px) {
      padding: 14px 25px;
      font-size: 16px;
    }
  }
}

.cart-phone {
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
  }
}
</style>
