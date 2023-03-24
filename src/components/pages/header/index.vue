<template>
  <header class="header">
    <div class="header_container">
      <the-logo></the-logo>
      <nav-menu></nav-menu>
      <div class="cart-phone">
        <button-cart class="header_cart"></button-cart>
        <phone-block></phone-block>
      </div>

      <button-main class="header_button"
        ><template v-slot:button>Заказ столика</template></button-main
      >
    </div>
  </header>
</template>

<script setup>
import TheLogo from "@/components/TheLogo.vue";
import NavMenu from "@/components/NavMenu.vue";
import ButtonCart from "../../ButtonCart.vue";
import PhoneBlock from "@/components/PhoneBlock.vue";
import ButtonMain from "@/components/ButtonMain.vue";
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;

  &_container {
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

  &_cart {
    display: none;
    @media (min-width: 800px) {
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
  }

  &_button {
    display: none;

    @media (min-width: 800px) {
      display: block;
    }
  }
}

.cart-phone {
  display: none;
  @media (min-width: 800px) {
    display: flex;
    flex-shrink: 1;
  }
}
</style>
