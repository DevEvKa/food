<template>
    <button @click="manageBurger" class="burger">
        <img v-if="!isMenuOpened" src="../assets/images/icons/icon_burger-closed.png" class="burger__image" alt="Открыть меню">
        <img v-else src="../assets/images/icons/icon_burger-opened.png" class="burger__image burger__image_cross" alt="Закрыть меню">
    </button>
</template>

<script>
export default { 
data () { 
    return { 
        isMenuOpened: false
        }
    }, 
    methods: {
        manageBurger() {
            this.isMenuOpened ? this.isMenuOpened = false : this.isMenuOpened = true;
            this.$emit('sendBurgerState', this.isMenuOpened);
        }
    }
}

</script>

<style lang="scss">

.burger {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 20px;
    

    &__image {
        display: block;
        width: 25px;
        height: auto;

        
    @media only screen and (min-width: $screen-phone-landscape) {
        width: 35px; 
    }

    @media only screen and (min-width: $screen-tablet) {
        display: none; 
    }

        &_cross {
            width: 21px;
            height: 18px;

            @media only screen and (min-width: $screen-phone-landscape) {
                width: 28px;
                height: 25px;
            }
        }
    }
}
</style>