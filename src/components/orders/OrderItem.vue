<template>
  <div>
    <radar-spinner class="loader-radar" v-if="loading" :animation-duration="2000" :size="60" color="#FF662D" />
    <div v-else class="order-item">
      <img src="../../assets/images/default-apartment-img.jpg" alt="{{order.title}}" class="order-item__img">
      <div class="order-item__info">
        <div>
          <p class="order-item__title">{{ order.title }}</p>
          <p class="order-item__location">{{ order.location.city }}</p>
        </div>
        <p class="order-item__price">{{ order.price }} per night</p>
      </div>
    </div>
  </div>
</template>

<script>
import { RadarSpinner } from 'epic-spinners';
import { getApartmentById } from '@/api/customAxios';

export default {
  name: 'OrderItem',
  components: {
    RadarSpinner,
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      order: null
    }
  },
  async created() {
    try {
      const data = await getApartmentById(this.id);
      console.log(data);
      this.order = data;
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
@import '../../assets/scss/variables.scss';

.order-item {
  display: flex;
  margin: 0 0 20px 0;

  &__img {
    width: 30%;
    @media screen and (min-width: 768px) {
      width: 50%;
    }
  }

  &__info {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid $card-bg;
    @media screen and (min-width: 768px) {
      padding: 30px;
    }
  }

  &__title {
    margin: 0 0 5px 0;
    font-weight: $fw-bold;
    font-size: 14px;
    line-height: 1.2;
    @media screen and (min-width: 768px) {
      margin: 0 0 10px 0;
      font-size: $fs-normal;
    }
  }

  &__location {
    font-size: 10px;
    line-height: 1.2;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  &__price {
    font-weight: $fw-bold;
    font-size: 14px;
    @media screen and (min-width: 768px) {
      font-size: $fs-normal;
    }
  }
}
</style>