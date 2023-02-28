<template>
    <div class="advantage">
        <img :src="getImageUrl(advantage_data.image)" class="advantage__img" alt='advantage_data.alt'>
        <h4 class="advantage__title">{{advantage_data.title}} <span class="advantage__title_accent">{{advantage_data.titleAccent}}</span></h4>
        <p class="advantage__text">{{advantage_data.text}}</p>
    </div>
</template>

<script>

export default {
    props: {
        advantage_data: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    methods: {
        getImageUrl(image) {
            return new URL(`../assets/images/${image}`, import.meta.url).href
        }
    }
}

</script>

<style lang="scss">


.advantage {
    width: 290px;
    height: 276px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 13px;
    background-color: $color-primary-light;
    box-shadow: 10px 10px 40px 20px rgba(0, 0, 0, 0.1);
    top: -100px;

    &__img {
        width: 100%;
        max-width: 87px;
        height: auto;
        display: block;
        margin-bottom: 5px;
    }

    &__title {
        font-family: 'Tinos';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: $color-primary-dark;
        margin-bottom: 20px;

        &_accent {
            color: $color-details;
        }
    }

    &__text {
        font-family: 'Tinos';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 25px;
        text-align: center;
        color: $color-dark-secondary;
    } 
}
</style>
