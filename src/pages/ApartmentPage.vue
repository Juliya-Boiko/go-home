<template>
  <PageContainer>
    <MainContainer>
      <div class="apartment-content">
        <radar-spinner class="loader-radar" v-if="loading" :animation-duration="2000" :size="60" color="#FF662D" />
        <div class="apartment-data" v-else>
          <ApartmentInfo :item="apartment" />
          <div class="apartment-data__addictional">
            <ApartmentOwner :item="apartment.owner" />
            <ApartmentReviews :items="apartment.reviews" />
          </div>
        </div>
      </div>
    </MainContainer> 
  </PageContainer>
</template>

<script>
import { RadarSpinner } from 'epic-spinners';
import PageContainer from '@/components/shared/PageContainer.vue';
import MainContainer from '@/components/shared/MainContainer.vue';
import { getApartmentById } from '../api/customAxios';
import ApartmentInfo from '@/components/apartments/ApartmentInfo.vue';
import ApartmentOwner from '@/components/apartments/ApartmentOwner.vue';
import ApartmentReviews from '@/components/apartments/ApartmentReviews.vue';

export default {
  name: 'ApartmentPage',
  components: {
    PageContainer,
    MainContainer,
    RadarSpinner,
    ApartmentInfo,
    ApartmentOwner,
    ApartmentReviews
  },
  data() {
    return {
      loading: true,
      apartment: null
    }
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const data = await getApartmentById(id);
      this.apartment = data;
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
}
</script>

<style lang="scss" scoped>
.apartment-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.apartment-data {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1110px) {
    flex-direction: row;
  }

  &__addictional {
    margin: 0 0 0 30px;
  }
}
</style>