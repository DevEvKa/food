<template>
  <div class="photo-collection photo">
    <img
      src="@/assets/images/photo-collection-1.jpg"
      class="photo_1"
      alt="Фото ресторана"
    />
    <img
      src="@/assets/images/photo-collection-2.jpg"
      class="photo_2"
      alt="Фото ресторана"
    />
    <img
      src="@/assets/images/photo-collection-3.jpg"
      class="photo_3"
      alt="Фото ресторана"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.photo {
  width: 290px;
  height: 257px;
  background-color: transparent;
  border: 1px solid green;
  @media (min-width: 797.98px) {
    width: 539px;
    height: 498px;
  }

  &_1 {
    position: absolute;
    top: 35px;
    left: 0;
    object-fit: cover;
    width: 115px;
    height: 154px;
    z-index: 50;
    box-shadow: 20px 0px 30px 3px rgba(0, 0, 0, 0.5);
    @media (min-width: 797.98px) {
      width: 233px;
      height: 300px;
      top: 90px;
    }
  }

  &_2 {
    position: absolute;
    top: 0;
    left: 80px;
    object-fit: cover;
    width: 137px;
    height: 221px;
    z-index: 0;
    @media (min-width: 797.98px) {
      width: 255px;
      height: 430px;
      left: 140px;
    }
  }

  &_3 {
    position: absolute;
    bottom: 0;
    right: 0;
    object-fit: cover;
    width: 126px;
    height: 154px;
    box-shadow: 2px 0px 5px 1px rgba(0, 0, 0, 0.5);
    @media (min-width: 797.98px) {
      width: 254px;
      height: 300px;
    }
  }
}
</style>
