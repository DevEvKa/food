<template>
  <section class="the-dishes">
    <div class="content-wrapper the-dishes_content-wrapper">
      <section-title>
        <template v-slot:text>Фирменные </template>
        <template v-slot:accent>блюда</template>
      </section-title>
      <div class="the-dishes_content">
        <img
          class="the-dishes_cover"
          :src="getImageUrl(activeItem)"
          alt="Блюдо"
        />

        <div class="the-dishes_list">
          <dishes-item
            v-for="dish in DISHESITEMS"
            :id="dish.id"
            :image="dish.image"
            :alt="dish.alt"
            :title="dish.title"
            :price="dish.price"
            :currency="dish.currency"
            :active="activeItem === dish.id"
            @sendActiveItem="activeItem = dish.id"
          ></dishes-item>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import SectionTitle from "../../SectionTitle.vue";
import DishesItem from "./DishesItem.vue";
import { DISHESITEMS } from "@/moc/data.js";

let activeItem = ref("1");

function getImageUrl(id) {
  return new URL(
    `../../../assets/images/dishes/dishes_${id}.jpg`,
    import.meta.url
  ).href;
}
</script>

<style lang="scss" scoped>
.the-dishes {
  &_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    @media (min-width: $screen-tablet) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &_cover {
    display: block;
    object-fit: cover;
    align-self: center;
    width: 100%;
    max-width: 445px;
    height: 478px;
    @media (min-width: $screen-tablet) {
      width: 40%;
    }
    &:hover {
      box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.4);
    }
  }

  &_list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    @media (min-width: $screen-tablet) {
      flex-grow: 1;
      align-items: stretch;
      justify-content: space-between;
    }
  }
}
</style>
