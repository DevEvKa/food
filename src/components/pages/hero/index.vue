<template>
  <section class="the-hero">
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
import AdvantageItem from "../../AdvantageItem.vue";
import ButtonMain from "../../ButtonMain.vue";
import { ADVANTAGESINFO } from "../../../moc/data";

// &::before {
//     content: "";
//     display: block;
//     position: absolute;
//     top: -70px;
//     left: 0;
//     width: 100%;
//     height: 80vh;
//     background: url(@/assets/images/bg_header_hero.jpg) 0px 0px no-repeat;
//     background-size: cover;
//   }
//   &::after {
//     content: "";
//     display: block;
//     position: absolute;
//     top: -70px;
//     left: 0;
//     width: 100%;
//     height: 80vh;
//     background: rgba(0, 0, 0, 0.7);
//     background-size: cover;
//   }

// background: url(@/assets/images/bg_header_hero.jpg) 0px 0px no-repeat;
//   background-size: cover;

//   &::after {
//     content: "";
//     display: block;
//     position: absolute;
//     top: -70px;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.8);
//     background-size: cover;
//   }
</script>

<style lang="scss" scoped>
.the-hero {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  background: url(@/assets/images/bg_header_hero.jpg) 0px 0px no-repeat;
  background-size: cover;
  height: 100vh;
  margin-bottom: 580px;

  @media (min-width: 600px) {
    margin-bottom: 460px;
  }
  @media (min-width: $screen-tablet) {
    margin-bottom: 390px;
  }

  @media (min-width: 900px) {
    margin-bottom: 250px;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: -70px;
    height: calc(100% + 70px);
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    background-size: cover;
  }

  &_text {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 200px 0;
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
