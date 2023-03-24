<template>
  <a href="#" @click="handleButtonClicked" class="button-cart">
    <p class="button-cart_text"><slot name="buttonCartText"></slot></p>
    <slot name="buttonCartImage">
      <img
        src="../assets/images/icons/icon_cart.svg"
        class="button-cart_img"
        alt="Корзина"
      />
    </slot>
  </a>
</template>

<script setup></script>

<style lang="scss" scoped>
.button-cart {
  display: flex;
  gap: 10px;
  align-items: center;

  @media (min-width: 800px) {
    display: flex;
    padding: 0 15px;
    align-items: center;
  }
  @media (min-width: 1000px) {
    padding: 0 30px;
  }
  &:hover {
    border: 0;
    & .button-cart_text {
      text-shadow: 1px 0px 1px $color-primary-light;
    }
    & .button-cart_img {
      transform: scale(1.07);
    }
  }

  &_img {
    width: 40px;
    height: 40px;
    @media (min-width: 1000px) {
      width: 50px;
      height: 50px;
    }
  }
  &_text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: $color-primary-light;
    @media (min-width: 1000px) {
      font-size: 18px;
    }
  }
}
</style>
