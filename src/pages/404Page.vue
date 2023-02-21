<template>
  <PageContainer>
    <section class="error">
      <h1 class="error__title">Page not found 404</h1>
    </section>
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/shared/PageContainer.vue';

export default {
  name: '404Page',
  components: {
    PageContainer
  }
}
</script>

<style lang="scss" scoped>
.error {
  &__title {
    font-size: 60px;
    text-align: center;
  }
}
</style>