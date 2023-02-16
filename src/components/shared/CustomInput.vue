<template>
  <input 
    type="number" 
    :value="modelValue" 
    @input="$emit('update:modelValue', $event.target.value)" 
    placeholder="Price, from"
    class="custom-input"
  />
</template>

<script>
export default {
  name: 'CustomInput',
  props: ['modelValue'],
  emits: ['update:modelValue'],
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.custom-input {
  padding: 11px 30px;
  font-weight: $fw-medium;
  font-size: $fs-normal;
  line-height: 1.2;
  outline: none;
  border: 2px solid $accent;
  background-color: $secondary;
  &::placeholder {
    font-weight: $fw-medium;
    font-size: $fs-normal;
    line-height: 1.2;
    color: $primary;
  }
}
</style>