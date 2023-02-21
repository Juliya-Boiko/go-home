<template>
  <PageContainer>
    <MainContainer>
      <radar-spinner class="loader-radar" v-if="loading" :animation-duration="2000" :size="60" color="#FF662D" />
      <template v-if="!loading">
        <FiltersForm @submit="filter"/>
        <p v-if="!filteredApartments.length">Нічого не знайдено</p>
        <ApartmentsList v-else :items="filteredApartments" />
      </template>
    </MainContainer>
  </PageContainer>
</template>

<script>
import { RadarSpinner } from 'epic-spinners';
import PageContainer from '@/components/shared/PageContainer.vue';
import MainContainer from '@/components/shared/MainContainer.vue';
import FiltersForm from '@/components/filters/FiltersForm.vue';
import ApartmentsList from '@/components/apartments/ApartmentsList.vue';
import { getApartments } from '../api/customAxios';

export default {
  name: 'HomePage',
  components: {
    PageContainer,
    MainContainer,
    FiltersForm,
    ApartmentsList,
    RadarSpinner,
  },
  data() {
    return {
      loading: false,
      apartments: [],
      filters: {
        city: '',
        price: 0
      },
    };
  },
  async created() {
    try {
      this.loading = true;
      const data = await getApartments();
      this.apartments = data;
      this.loading = false;
    } catch (error) {
      console.log(error);
      this.$notify({
        type: 'error',
        title: 'Error',
        text: error.message,
      });
    }
  },
  computed: {
    filteredApartments() {
      return this.filterByName(this.filterByPrice(this.apartments));
    },
  },
  methods: {
    filter({ city, price }) {
      if (city && price >= 0) {
        this.filters.city = city;
        this.filters.price = price;
        // console.log('city--->', city);
        // console.log('price--->', price);
      }
    },
    filterByName(aparts) {
      if (!this.filters.city) {
        return aparts;
      }
      return aparts.filter(apart => apart.location.city === this.filters.city)
    },
    filterByPrice(aparts) {
      if (!this.filters.price) {
        return aparts;
      }
      return aparts.filter(apart => apart.price >= this.filters.price);
    }
  }
}
</script>

<style lang="scss" scoped>
.loader-radar {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
}
</style>