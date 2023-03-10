<template>
  <div class="section-title title">
    <h3 class="title_text">
      {{ text }}<span class="title_accent">{{ accent }}</span>
    </h3>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "choto",
  },
  accent: {
    type: String,
    default: "chtotoaccent",
  },
});
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  color: var(--color-primary-dark);

  @media (min-width: 797.98px) {
    font-size: 54px;
    line-height: 62px;
  }

  &_accent {
    color: var(--color-secondary);
  }
}
</style>
