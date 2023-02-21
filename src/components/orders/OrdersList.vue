<template>
  <div>
    <p v-if="!items.length" class="orders__text">You dont have booked apartments</p>
    <ul>
      <OrderItem v-for="item in items" :key="item" :id="item"/>
    </ul>
  </div>
</template>

<script>
import OrderItem from './OrderItem.vue';

export default {
  name: 'OrdersList',
  components: {
    OrderItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
  .orders__text {
    text-align: center;
  }
</style>