<template>
  <header class="header">
    <div class="header_container">
      <logo-block></logo-block>
      <nav-menu></nav-menu>
      <div class="cart-phone">
        <button-cart class="cart"></button-cart>
        <phone-block></phone-block>
      </div>

      <button-main></button-main>
    </div>
  </header>
</template>

<script setup>
import LogoBlock from "@/components/LogoBlock.vue";
import NavMenu from "@/components/NavMenu.vue";
import ButtonCart from "../../ButtonCart.vue";
import PhoneBlock from "@/components/PhoneBlock.vue";
import ButtonMain from "@/components/ButtonMain.vue";
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  border: 1px solid red;

  @media (min-width: 797.98px) {
  }

  &_container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    padding: 20px;
    min-height: 70px;
  }
}

.cart-phone {
  display: none;
  @media (min-width: 797.98px) {
    display: flex;
  }
}
</style>
