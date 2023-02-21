<template>
  <PageContainer>
    <MainContainer>
      <radar-spinner class="loader-radar" v-if="loading" :animation-duration="2000" :size="60" color="#FF662D" />
      <template v-else>
        <OrdersList :items="orders"/>    
      </template>
    </MainContainer>
  </PageContainer>
</template>

<script>
import { RadarSpinner } from 'epic-spinners';
import PageContainer from '@/components/shared/PageContainer.vue';
import MainContainer from '@/components/shared/MainContainer.vue';
import OrdersList from '@/components/orders/OrdersList.vue';
import { getOrders } from '@/api/customAxios';

export default {
  name: 'OrdersPage',
  components: {
    PageContainer,
    MainContainer,
    RadarSpinner,
    OrdersList
  },
  data() {
    return {
      loading: false,
      orders: [],
    };
  },
  async created() {
    try {
      this.loading = true;
      const data = await getOrders();
      // console.log('data--->', data);
      this.orders = data;
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

</style>