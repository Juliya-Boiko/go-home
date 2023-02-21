<template>
  <select class="custom-select">
    <option 
      v-for="item in formattedItems"
      :key="item.value"
      :value="item.value"
      :selected="item.selected"
    >
    {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    items: {
      type: Array,
      default: () => {}
    }
  },
  computed: {
    formattedItems() {
      const formattedToLabels = this.items.map((item) => {
        return typeof item === 'object' ? item : { value: item, label: item };
      });
      const formattedCities = [{ value: '', label: 'City', selected: true }, ...formattedToLabels];
      return formattedCities;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.custom-select {
  display: inline-block;
  width: 220px;
  padding: 11px 20px;
  font-weight: $fw-medium;
  font-size: $fs-normal;
  line-height: 1.2;
  outline: none;
  border: 2px solid $accent;
  background-color: $secondary;
  cursor: pointer;
}
</style>