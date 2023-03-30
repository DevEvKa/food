<template>
  <section class="the-hero" @mousemove="mousemove">
    <div class="content-wrapper">
      <div class="the-hero_text">
        <p class="the-hero_text-main">
          Добро пожаловать<span class="the-hero_text-accent"
            ><br />в наш ресторан</span
          >
        </p>
        <h1 class="the-hero_title">Дом лучшей еды</h1>
        <button-main><template v-slot:button>Меню</template></button-main>
      </div>

      <div class="the-hero_advantages">
        <advantage-item
          v-for="advantage in ADVANTAGESINFO"
          :key="advantage.id"
          :image="advantage.image"
          :alt="advantage.alt"
          :title="advantage.title"
          :titleAccent="advantage.titleAccent"
          :text="advantage.text"
        ></advantage-item>
      </div>
    </div>
  </section>
</template>

<script setup>
import AdvantageItem from "./AdvantageItem.vue";
import ButtonMain from "@/components/ButtonMain.vue";
import { ADVANTAGESINFO } from "@/moc/data";
</script>

<style lang="scss" scoped>
.the-hero {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  background-color: yellow;
  margin-bottom: 720px;

  @media (min-width: 524px) {
    margin-bottom: 690px;
  }
  @media (min-width: 600px) {
    margin-bottom: 590px;
  }
  @media (min-width: 653px) {
    margin-bottom: 540px;
  }
  @media (min-width: 779px) {
    margin-bottom: 480px;
  }
  @media (min-width: 900px) {
    margin-bottom: 230px;
  }
  @media (min-width: 1113px) {
    margin-bottom: 180px;
  }

  &_text {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 200px 0 250px;
    color: $color-secondary;
    font-style: normal;
    font-weight: 400;

    &-main {
      font-size: 30px;
      line-height: 34px;
      text-align: center;
      margin-bottom: 15px;

      @media (min-width: 600px) {
        font-size: 34px;
        line-height: 38px;
        margin-bottom: 25px;
      }

      &-accent {
        font-size: 40px;
        line-height: 46px;
      }
    }
  }

  &_title {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    text-transform: uppercase;
    line-height: 20px;
    color: $color-primary-light;
    margin-bottom: 35px;
    position: relative;

    @media (min-width: 600px) {
      font-size: 22px;
    }

    &:before {
      display: none;
      width: 100px;
      content: "";
      position: absolute;
      border-bottom: 1px solid $color-primary-light;
      top: 50%;
      right: 110%;
      @media (min-width: 600px) {
        display: block;
      }
    }

    &:after {
      display: none;
      width: 100px;
      content: "";
      position: absolute;
      border-bottom: 1px solid $color-primary-light;
      top: 50%;
      left: 110%;
      @media (min-width: 600px) {
        display: block;
      }
    }
  }

  &_advantages {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    gap: 15px;
    position: absolute;
    top: 580px;
    left: 0;

    @media (min-width: 500px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;
      gap: 25px;
    }
  }
}
</style>
