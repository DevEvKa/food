<template>
  <button class="button" @click="btnClicked">Заказать столик</button>
</template>

<script>
export default {
  data() {
    return {
      /* data properties here */
    };
  },
  methods: {
    btnClicked() {
      console.log("btnClicked");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: none;

  @media (min-width: 797.98px) {
    display: block;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 19px;
    color: var(--color-primary-light);
    background-color: var(--color-accent);
    border: none;
    padding: 12px 16px;
  }
  @media (min-width: var(--screen-desktop)) {
    padding: 14px 18px;
  }
}
</style>
