<template>
  <div class="page-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PageContainer',
}
</script>

<style lang="scss" scoped>
.page-container {
  // height: 100%;
  padding: 30px 0;
}
</style>