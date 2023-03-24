<template>
  <footer class="footer">
    <div class="content-wrapper">
      <div class="footer_main">
        <button-cart
          ><template v-slot:buttonCartText>В корзину</template></button-cart
        >
        <button-main><template v-slot:button>Заказать</template></button-main>
      </div>
      <p class="footer_copyright">
        © 2023 Евгения Карабанова: All rights reserved :)
      </p>
    </div>
  </footer>
</template>

<script setup>
import ButtonCart from "@/components/ButtonCart.vue";
import ButtonMain from "@/components/ButtonMain.vue";
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  background: url(@/assets/images/bg_header_hero.jpg) 0px 0px no-repeat;
  background-size: cover;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    background-size: cover;
  }
  &_main {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    @media (min-width: $screen-tablet) {
      padding: 20px;
    }
  }
  &_copyright {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    color: $color-primary-light;
    text-align: center;
    padding: 5px 0 0;
    @media (min-width: $screen-tablet) {
      padding: 30px 0 10px;
    }
  }
}
</style>
