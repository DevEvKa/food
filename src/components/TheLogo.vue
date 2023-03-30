<template>
  <a href="#" class="logo">
    <img src="../assets/images/logo.svg" class="logo_img" alt="Логотип" />
  </a>
</template>

<style lang="scss">
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 45px;
  background-color: transparent;
  z-index: 5;

  .header &:hover {
    border: none;
  }

  @media (min-width: $screen-phone-landscape) {
    flex-basis: 60px;
  }

  @media (min-width: $screen-tablet) {
    flex-basis: 80px;
  }

  @media (min-width: $screen-desktop) {
    flex-basis: 100px;
  }

  &_img {
    display: block;
    max-width: 100%;
    height: auto;
    &:hover {
      transform: scale(1.04);
    }
  }
}
</style>
