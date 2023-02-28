<template>
    <section class="hero">
        <div class="hero__welcoming">
            <p class="hero__welcoming-text">Добро пожаловать</p>
            <p class="hero__welcoming-text hero__welcoming-text_accent">в наш ресторан</p>
        </div>
        
        <p class="hero__title">Дом лучшей еды</p>
        <button-main></button-main>
    </section>
</template>

<script>
import ButtonMain from '../components/ButtonMain.vue';

export default { 
  data () { 
    return { /* data properties here */ }
  }, 
  components: {
    ButtonMain
  }
}
</script>

<style  lang="scss" scoped>
.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 0 200px;

    &__welcoming {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;

        &-text {
            color: $color-secondary;
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 34px;

            &_accent {
                font-size: 40px;
                line-height: 46px; 
            }
        }
    }

    &__title {
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        text-transform: uppercase;
        line-height: 20px;
        color: $color-primary-light;
        margin-bottom: 35px;
        position: relative;

        &:before {
            display: none;
            width: 100px;
            content: '';
            position: absolute;
            border-bottom: 1px solid $color-primary-light;
            top: 50%;
            right: 110%;
        }
         
        &:after {
            display: none;
            width: 100px;
            content: '';
            position: absolute;
            border-bottom: 1px solid $color-primary-light;
            top: 50%;
            left: 110%; 
        }
    }

}


</style>