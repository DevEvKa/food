<template>
  <section class="the-promo">
    <div class="the-promo_content-wrapper content-wrapper">
      <div class="the-promo_text-wrapper">
        <h3 class="the-promo_title">
          Отпразднуйте в одном из самых лучших ресторанов
        </h3>
        <p class="the-promo_benefit">
          Только в этом месяце бизнес-ланч от 250 ₽
        </p>
      </div>
      <button-main class="the-promo_button"
        ><template v-slot:button>Заказ столика</template></button-main
      >
    </div>
  </section>
</template>
<script setup>
import ButtonMain from "../../ButtonMain.vue";
</script>

<styles lang="scss" scoped>
.the-promo {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(@/assets/images/promo/promo_bg.jpg) 0px 0px no-repeat;
  background-size: cover;

  html &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    background-size: cover;
  }

  &_content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: $screen-tablet) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &_text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: $screen-tablet) {
      max-width: 60%;
    }
  }

  &_title {
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 34px;
    text-align: center;
    color: $color-secondary;
    margin-bottom: 20px;
    @media (min-width: $screen-tablet) {
      font-size: 52px;
      line-height: 60px;
    }
  }

  &_benefit {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: $color-primary-light;
    margin-bottom: 30px;
  }
}
</styles>
