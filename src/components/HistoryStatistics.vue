<template>
  <div class="history-statistics">
    <span class="history-statistics_number">{{ number }}</span>
    <span class="history-statistics_text">{{ declOfNum(number, dish) }}</span>
  </div>
</template>

<script setup>
import declOfNum from "@/moc/helpers";
const props = defineProps({
  number: {
    type: String,
    require: false,
  },
  dish: {
    type: Array,
    require: false,
  },
});
</script>

<style lang="scss" scoped>
.history-statistics {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;

  &:hover .history-statistics_number {
    color: $color-accent;
  }

  &_number {
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 54px;
    text-align: center;
    color: $color-details;
  }
  &_text {
    flex-grow: 1;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: $color-primary-dark;
  }
}
</style>
