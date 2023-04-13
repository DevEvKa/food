<template>
  <section class="the-hero" @mousemove="mousemove">
    <div class="content-wrapper">
      <kinesis-container class="kinesis-parent">
        <kinesis-element class="kinesis-child kinesis-child_1" :strength="10">
          <img
            src="../../../assets/images/hero/parallax_image_1.png"
            alt="logrocket logo"
          />
        </kinesis-element>
        <kinesis-element class="kinesis-child kinesis-child_2" :strength="25">
          <img
            src="../../../assets/images/hero/parallax_image_2.png"
            alt="logrocket logo"
          />
        </kinesis-element>
        <kinesis-element class="kinesis-child kinesis-child_3" :strength="10">
          <img
            src="../../../assets/images/hero/parallax_image_3.png"
            alt="logrocket logo"
          />
        </kinesis-element>
        <kinesis-element class="kinesis-child kinesis-child_4" :strength="25">
          <img
            src="../../../assets/images/hero/parallax_image_4.png"
            alt="logrocket logo"
          />
        </kinesis-element>
        <kinesis-element class="kinesis-child kinesis-child_5" :strength="20">
          <img
            src="../../../assets/images/hero/parallax_image_5.png"
            alt="logrocket logo"
          />
        </kinesis-element>
        <kinesis-element class="kinesis-child kinesis-child_6" :strength="10">
          <img
            src="../../../assets/images/hero/parallax_image_6.png"
            alt="logrocket logo"
          />
        </kinesis-element>
      </kinesis-container>
      <div class="the-hero_text">
        <p class="the-hero_text-main">
          Добро пожаловать<span class="the-hero_text-accent"
            ><br />в наш ресторан</span
          >
        </p>
        <h1 class="the-hero_title">Дом лучшей еды</h1>
        <button-main class="the-hero_button"
          ><template v-slot:button>Меню</template></button-main
        >
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
import { KinesisContainer, KinesisElement } from "vue-kinesis";
</script>

<style lang="scss" scoped>
.the-hero {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  margin-bottom: 720px;
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
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;

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
    z-index: 3;

    @media (min-width: 500px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;
      gap: 25px;
    }
  }
}

.kinesis {
  &-parent {
    width: 100%;
    height: auto;
    z-index: 2;
  }

  &-child {
    max-height: 110px;

    &_1 {
      top: 0;
      left: 8%;
      opacity: 0.5;

      & img {
        width: 140px;
        visibility: hidden;
        @media (min-width: 720px) {
          visibility: visible;
        }
      }
    }

    &_2 {
      top: -65px;
      left: -8%;
      @media (min-width: 400px) {
        top: -55px;
        left: -6%;
      }
      @media (min-width: 520px) {
        left: -5%;
      }
      @media (min-width: 720px) {
        top: 33px;
        left: -4%;
      }
      & img {
        width: 70px;
        @media (min-width: 400px) {
          width: 80px;
        }
        @media (min-width: 720px) {
          width: 100px;
        }
      }
    }
    &_3 {
      top: 55px;
      left: -5%;
      & img {
        width: 300px;
        visibility: hidden;
        @media (min-width: 720px) {
          visibility: visible;
        }
      }
    }

    &_4 {
      top: 140px;
      left: -1%;
      @media (min-width: 720px) {
        top: 130px;
        left: 13%;
      }
      & img {
        width: 120px;
        @media (min-width: 720px) {
          width: 140px;
        }
      }
    }
    &_5 {
      bottom: 420px;
      left: 83%;
      @media (min-width: 1120px) {
        left: 86%;
      }

      & img {
        width: 230px;
        transform: rotate(30deg);
        visibility: hidden;
        @media (min-width: 720px) {
          visibility: visible;
        }
      }
    }

    &_6 {
      bottom: 240px;
      left: 68%;
      @media (min-width: 400px) {
        bottom: 200px;
      }
      @media (min-width: 1120px) {
        left: 75%;
      }
      & img {
        width: 320px;
        transform: rotate(-8deg);
      }
    }
  }
}
</style>
