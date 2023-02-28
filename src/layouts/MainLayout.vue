<template>
  <div class="header-hero">
    <app-header></app-header>
    <app-hero></app-hero>
  </div>
    

    <main>
      <!-- отсюда берется -->
        <slot name="main">
          <h6>Сюда собираем основную страницу</h6>
            <app-advantages></app-advantages>
          <h6>Досюда собираем основную страницу</h6>
        </slot>
    </main>

    <app-footer></app-footer>
  
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppHero from '../components/AppHero.vue';
import AppAdvantages from '../components/AppAdvantages.vue';
import AppFooter from '../components/AppFooter.vue';


export default { 
  data () { 
    return { /* data properties here */ }
  }, 
  components: {
    AppHeader, AppHero, AppAdvantages, AppFooter
  }
}
</script>

<style  lang="scss" scoped>

.header-hero {
    position: relative;
    width: 100%;
    height: auto;
    background: url(../assets/images/bg_header_hero.jpg) 0px 0px no-repeat;
    background-size: cover;

    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color:rgba(0, 0, 0, .7);
    }
}

</style>