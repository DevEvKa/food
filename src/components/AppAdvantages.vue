<template>
    <section class="advantages">
        <advantage-item v-for="advantage in advantagesInfo" :key="advantage.id" :advantage_data="advantage"></advantage-item>
    </section>

</template>

<script>
import AdvantageItem from '../components/AdvantageItem.vue';

export default { 
  data () { 
    return {
        advantagesInfo: [
            {
                id: '1',
                image: 'advantage_atmosphere.png',
                alt: 'Магическая атмосфера',
                title: 'Магическая',
                titleAccent: 'Атмосфера',
                text: 'В нашем заведении царит магическая атмосфера наполненная вкусными ароматами'
            },
            {
                id: '2',
                image: 'advantage_quality.png',
                alt: 'Лучшее качество',
                title: 'Лучшее качество',
                titleAccent: 'Еды',
                text: 'Качество нашей Еды - отменное!'
            },
            {
                id: '3',
                image: 'advantage_cheep.png',
                alt: 'Недорогая еда',
                title: 'Недорогая',
                titleAccent: 'Eда',
                text: 'Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!'
            }
        ]
    }
  }, 
  components: {
    AdvantageItem
  }
}
</script>

<style  lang="scss" scoped>

.advantages {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}


</style>