<template>
  <div class="content">
    <NotificationSet />
    <HeaderContainer />
    <router-view></router-view>
    <FooterContainer />
  </div>
</template>

<script>
import HeaderContainer from './components/header/HeaderContainer.vue';
import FooterContainer from './components/footer/FooterContainer.vue';
import NotificationSet from './components/notifications/NotificationSet.vue';
export default {
  name: 'App',
  components: {
    HeaderContainer,
    FooterContainer,
    NotificationSet
  },
}
</script>

<style lang="scss" scoped>
  .content {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
