<template>
  <footer class="footer">
    <div class="content-wrapper">
      <div class="footer_main">
        <nav-menu class="footer_nav"></nav-menu>
        <div class="footer_contacts">
          <phone-block></phone-block>
          <button-main
            ><template v-slot:button>Заказ столика</template></button-main
          >
        </div>
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
import NavMenu from "@/components/NavMenu.vue";
import PhoneBlock from "@/components/PhoneBlock.vue";
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: end;
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
    justify-content: space-between;
    padding: 10px;
    @media (min-width: $screen-tablet) {
      padding: 20px;
    }
  }
  &_contacts {
    display: flex;
    flex-direction: column;
    @media (min-width: 600px) {
      flex-direction: row;
      gap: 50px;
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
