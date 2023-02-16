<template>
  <div class="content">
    <HeaderContainer />
    <router-view></router-view>
    <FooterContainer />
  </div>
</template>

<script>
import HeaderContainer from './components/header/HeaderContainer.vue';
import FooterContainer from './components/footer/FooterContainer.vue';

export default {
  name: 'App',
  components: {
    HeaderContainer,
    FooterContainer
  }
}
</script>

<style lang="scss" scoped>
  .content {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
