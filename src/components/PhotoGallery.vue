<template>
  <div class="photo-gallery">
    <div class="photo_container photo_container_1">
      <img
        src="../assets/images/photo-gallery_1.jpg"
        alt="Фотография блюда"
        class="photo_img"
      />
    </div>
    <div class="photo_container photo_container_2">
      <img
        src="../assets/images/photo-gallery_2.jpg"
        alt="Фотография блюда"
        class="photo_img"
      />
    </div>
    <div class="photo_container photo_container_3">
      <img
        src="../assets/images/photo-gallery_3.jpg"
        alt="Фотография блюда"
        class="photo_img"
      />
    </div>
    <div class="photo_container photo_container_4">
      <img
        src="../assets/images/photo-gallery_2.jpg"
        alt="Фотография блюда"
        class="photo_img"
      />
    </div>
    <div class="photo_container photo_container_5">
      <img
        src="../assets/images/photo-gallery_3.jpg"
        alt="Фотография блюда"
        class="photo_img"
      />
    </div>
    <div class="photo_container photo_container_6">
      <img
        src="../assets/images/photo-gallery_1.jpg"
        alt="Фотография блюда"
        class="photo_img"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.photo-gallery {
  display: grid;
  grid-template-columns: repeat(1fr, minmax(290px, 314px));
  justify-items: center;
  gap: 20px;
  @media (min-width: 797.98px) {
    grid-template-columns: repeat(4, minmax(274px, 274px));
    grid-template-rows: repeat(2, minmax(274px, 274px));
    justify-items: stretch;
  }
}
.photo {
  &_container {
    display: grid;
    width: 290px;
    height: 314px;
    @media (min-width: 797.98px) {
      width: 247px;
      height: 274px;
    }

    &_1 {
      @media (min-width: 797.98px) {
        width: 540px;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 1;
      }
    }
    &_2 {
      @media (min-width: 797.98px) {
        grid-column-start: 3;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 1;
      }
    }
    &_3 {
      @media (min-width: 797.98px) {
        grid-column-start: 4;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 1;
      }
    }
    &_4 {
      @media (min-width: 797.98px) {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 2;
        grid-row-end: 2;
      }
    }
    &_5 {
      @media (min-width: 797.98px) {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 2;
      }
    }
    &_6 {
      @media (min-width: 797.98px) {
        width: 540px;
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 2;
      }
    }
  }
  &_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;

    @media (min-width: 797.98px) {
    }
  }
}
</style>
