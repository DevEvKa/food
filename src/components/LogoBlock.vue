<template>
  <a href="#" class="logo">
    <img src="../assets/images/logo.svg" class="logo__img" alt="Логотип" />
  </a>
</template>

<script></script>

<style lang="scss">
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 30px;
  background-color: transparent;
  z-index: 5;

  @media only screen and (min-width: var(--screen-phone-landscape)) {
    flex-basis: 45px;
  }

  @media only screen and (min-width: var(--screen-tablet)) {
    flex-basis: 70px;
  }

  @media only screen and (min-width: var(--screen-desktop)) {
    flex-basis: 100px;
  }

  &__img {
    display: block;
    max-width: 100%;
    height: auto;
  }
}
</style>
