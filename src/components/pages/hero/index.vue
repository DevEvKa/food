<template>
  <section class="hero">
    <div class="hero-text">
      <p class="hero-text_main">Добро пожаловать</p>
      <p class="hero-text_accent">в наш ресторан</p>
    </div>

    <p class="hero_title">Дом лучшей еды</p>
    <button-main></button-main>
  </section>
</template>

<script>
import ButtonMain from "../../ButtonMain.vue";

export default {
  data() {
    return {
      /* data properties here */
    };
  },
  components: {
    ButtonMain,
  },
};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 65px;
  padding: 120px 0 200px;
  border: 1px solid yellow;
  @media (min-width: 797.98px) {
    margin-top: 100px;
  }

  &-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    color: var(--color-secondary);
    font-style: normal;
    font-weight: 400;

    &_main {
      font-size: 30px;
      line-height: 34px;

      &_accent {
        font-size: 40px;
        line-height: 46px;
      }
    }
  }

  &_title {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    text-transform: uppercase;
    line-height: 20px;
    color: var(--color-primary-light);
    margin-bottom: 35px;
    position: relative;

    &:before {
      display: none;
      width: 100px;
      content: "";
      position: absolute;
      border-bottom: 1px solid var(--color-primary-light);
      top: 50%;
      right: 110%;
    }

    &:after {
      display: none;
      width: 100px;
      content: "";
      position: absolute;
      border-bottom: 1px solid var(--color-primary-light);
      top: 50%;
      left: 110%;
    }
  }
}
</style>
