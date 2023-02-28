<template>
    <button class="button" @click="btnClicked">Заказать столик</button>
</template>
  
  <script>
  export default { 
    data () { 
      return { /* data properties here */ }
    }, 
    methods: {
        btnClicked () {
            console.log('btnClicked')
        }
    }
  }
  </script>

<style  lang="scss" scoped>
.button {
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 19px;
    color: $color-primary-light;
    background-color: $color-accent;
    border: none;
    padding: 14px 18px;

    @media only screen and (min-width: $screen-phone-landscape) {
      padding: 10px 14px; 
  }

  @media only screen and (min-width: $screen-tablet) {
    padding: 12px 16px; 
  }
}

</style>