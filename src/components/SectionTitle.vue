<template>
  <div class="section-title">
    <h3 class="section-title_text">
      <slot name="text"></slot>
      <span class="section-title_accent">
        <slot name="accent"></slot>
      </span>
    </h3>
  </div>
</template>

<style lang="scss" scoped>
.section-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  padding: 20px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  color: $color-primary-dark;

  @media (min-width: 797.98px) {
    font-size: 54px;
    line-height: 62px;
  }

  &_accent {
    color: $color-secondary;
  }
}
</style>
