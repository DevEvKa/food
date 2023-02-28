<template>
    <header class="header">
        <div class="header__main">
            <logo-block></logo-block>
            <button-burger  class="button-burger"
            @sendBurgerState="manageHeaderMenuVisibility"
            ></button-burger>
        </div>
        
        <div v-if="isMenuOpened" class="header__content">
            <nav-menu></nav-menu>
            <div class="header__phone-block phone-block">
                <phone-block></phone-block>
                <p v-if="!isMenuOpened" class="phone-block__text">Свяжитесь с нами для 
                    бронирования</p>
            </div>
            
            <button-main>{{buttonText}}</button-main>
        </div>

    </header>
</template>
  
<script>
import LogoBlock from '@/components/LogoBlock.vue';
import NavMenu from '@/components/NavMenu.vue';
import PhoneBlock from '@/components/PhoneBlock.vue';
import ButtonMain from '@/components/ButtonMain.vue';
import ButtonBurger from '@/components/ButtonBurger.vue';

export default { 
data () { 
    return { 
        isMenuOpened: false,
        buttonText: "Заказ столика",
     }
    }, 
    components: {
        LogoBlock, NavMenu, PhoneBlock, ButtonMain, ButtonBurger
    },
    methods: {
        manageHeaderMenuVisibility(burgerState) {
            this.isMenuOpened=burgerState;
    }
},
}
</script>


<style  lang="scss" scoped>

.header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 14px;

    @media only screen and (min-width: $screen-tablet) {
        display: flex;
        flex-direction: row;
        gap: 20px;
        padding: 0;
    }

    @media only screen and (min-width: $screen-desktop) {
        flex-direction: row;
        gap: 30px;
    }

    &__main {
        width: 100%;
        display: flex;
        justify-content: space-between;

        @media only screen and (min-width: $screen-tablet) {
            width: auto;
        }
    }

    &__content {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px 10px;

    
        @media only screen and (min-width: $screen-tablet) {
            height: auto;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            padding: 0;
        }
    
    }
}







</style>