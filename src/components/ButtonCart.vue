<template>
  <a href="#" @click="handleButtonClicked" class="button-cart">
    <p class="button-cart_text">В корзину</p>
    <img
      src="../assets/images/icon_cart.svg"
      class="button-cart_img"
      alt="Корзина"
    />
  </a>
</template>

<script setup></script>

<style lang="scss" scoped>
.button-cart {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 50px;

  @media (min-width: 800px) {
    margin-bottom: 0;
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
    display: none;
    @media (min-width: 800px) {
      display: block;
      width: 45px;
      height: 45px;
    }
  }

  &_text {
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 19px;
    padding: 20px;
    color: $color-primary-light;
    @media (min-width: 800px) {
      display: none;
    }
    @media (min-width: 1000px) {
      font-size: 18px;
    }
  }
}
</style>
