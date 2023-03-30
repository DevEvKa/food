<template>
  <section class="our-history">
    <div class="content-wrapper our-history_content-wrapper">
      <div class="our-history_content">
        <section-title>
          <template v-slot:text>Наша </template>
          <template v-slot:accent>история</template>
        </section-title>
        <p class="our-history_description">
          Как и у любого другого самобытного места, у нас есть своя, особая
          история. Идея ресторана пришла основателям неожиданно. Во время
          прогулки по лесу создатель нашего ресторана застрял в сотнях
          километров от ближайшего населенного пункта. Вдали от цивилизации и
          связи им пришлось навремя обустровать себе нехитрый быт, добывать и
          готовить себе еду.
        </p>
        <div class="our-history_statistics">
          <history-statistics
            v-for="menuItem in HISTORYSTATISTICSITEMS"
            :key="menuItem.id"
            :number="menuItem.number"
            :dish="menuItem.dish"
          ></history-statistics>
        </div>
      </div>

      <div class="our-history_photos">
        <img
          src="@/assets/images/history/photo-collection-1.jpg"
          class="our-history_photo our-history_photo_1"
          alt="Фото ресторана"
        />
        <img
          src="@/assets/images/history/photo-collection-2.jpg"
          class="our-history_photo our-history_photo_2"
          alt="Фото ресторана"
        />
        <img
          src="@/assets/images/history/photo-collection-3.jpg"
          class="our-history_photo our-history_photo_3"
          alt="Фото ресторана"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "@/components/SectionTitle.vue";
import HistoryStatistics from "./HistoryStatistics.vue";

import { HISTORYSTATISTICSITEMS } from "@/moc/data";
</script>

<style lang="scss" scoped>
.our-history {
  &_content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 50px;

    @media (min-width: 900px) {
      //реагирует на 600px. почему?
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 25px;
    }
  }

  &_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    @media (min-width: $screen-tablet) {
      padding: 20px 40px;
    }
  }
  &_description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: $color-dark-secondary;
  }
  &_statistics {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (min-width: 500px) {
      flex-direction: row;
      align-items: stretch;
      justify-content: space-between;
    }
  }

  &_photos {
    display: flex;
    flex-grow: 1;
    height: 200px;
    background-color: transparent;

    @media (min-width: 600px) {
      min-width: 50%;
      height: 250px;
    }

    @media (min-width: $screen-tablet) {
      height: 380px;
    }
    @media (min-width: $screen-desktop) {
      height: 498px;
    }
  }
  &_photo {
    &:hover {
      transform: scale(1.03);
      box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.4);
    }

    &_1 {
      position: absolute;
      top: 35px;
      left: 0;
      object-fit: cover;
      width: 30%;
      height: 75%;
      z-index: 50;
      box-shadow: 20px 0px 30px 3px rgba(0, 0, 0, 0.5);

      @media (min-width: 600px) {
        width: 40%;
        top: 40px;
      }
      @media (min-width: $screen-tablet) {
        top: 90px;
      }
    }

    &_2 {
      position: absolute;
      top: 0;
      left: 25%;
      object-fit: cover;
      width: 50%;
      height: 85%;
      z-index: 0;

      @media (min-width: $screen-phone-landscape) {
        left: 30%;
      }
    }

    &_3 {
      position: absolute;
      bottom: 0;
      right: 0;
      object-fit: cover;
      width: 40%;
      height: 60%;
      box-shadow: 2px 0px 5px 1px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
