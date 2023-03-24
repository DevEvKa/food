<template>
  <section class="photo-gallery">
    <section-title>
      <template v-slot:text>Галлерея </template>
      <template v-slot:accent>блюд</template>
    </section-title>
    <div class="photo-gallery_list">
      <div class="photo-gallery_container photo-gallery_container_1">
        <img
          src="@/assets/images/photo-gallery_1.jpg"
          alt="Фотография блюда"
          class="photo-gallery_img"
        />
      </div>
      <div class="photo-gallery_container photo-gallery_container_2">
        <img
          src="@/assets/images/photo-gallery_2.jpg"
          alt="Фотография блюда"
          class="photo-gallery_img"
        />
      </div>
      <div class="photo-gallery_container photo-gallery_container_3">
        <img
          src="@/assets/images/photo-gallery_3.jpg"
          alt="Фотография блюда"
          class="photo-gallery_img"
        />
      </div>
      <div class="photo-gallery_container photo-gallery_container_4">
        <img
          src="@/assets/images/photo-gallery_2.jpg"
          alt="Фотография блюда"
          class="photo-gallery_img"
        />
      </div>
      <div class="photo-gallery_container photo-gallery_container_5">
        <img
          src="@/assets/images/photo-gallery_3.jpg"
          alt="Фотография блюда"
          class="photo-gallery_img"
        />
      </div>
      <div class="photo-gallery_container photo-gallery_container_6">
        <img
          src="@/assets/images/photo-gallery_1.jpg"
          alt="Фотография блюда"
          class="photo-gallery_img"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "../../SectionTitle.vue";
</script>

<style lang="scss" scoped>
.photo-gallery {
  &_list {
    width: 100%;
    display: grid;
    gap: 20px;
    justify-content: center;
    grid-template-columns: repeat(1, 96%);
    grid-template-rows: repeat(6, 204px);
    grid-template-areas:
      "wide1"
      "narrow1"
      "narrow2"
      "narrow3"
      "narrow4"
      "wide2";

    @media (min-width: 450px) {
      grid-template-columns: repeat(2, 48%);
      grid-template-rows: repeat(4, 224px);
      grid-template-areas:
        "wide1 wide1"
        "narrow1 narrow2"
        "narrow3 narrow4"
        "wide2 wide2";
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(4, 23%);
      grid-template-rows: repeat(2, 274px);
      grid-auto-rows: 274px;
      grid-template-areas:
        "wide1 wide1 narrow1 narrow2"
        "narrow3 narrow4 wide2 wide2";
    }
  }

  &_container_1 {
    grid-area: wide1;
  }
  &_container_2 {
    grid-area: narrow1;
  }
  &_container_3 {
    grid-area: narrow2;
  }
  &_container_4 {
    grid-area: narrow3;
  }
  &_container_5 {
    grid-area: narrow4;
  }
  &_container_6 {
    grid-area: wide2;
  }
  &_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;

    &:hover {
      transform: scale(1.03);
      box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.4);
    }
  }
}
</style>
