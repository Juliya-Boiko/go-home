<template>
  <div class="auth-section">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AuthSection'
}
</script>

<style lang="scss" scoped>
.auth-section {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: cadetblue;
  background-image: url('../../assets/images/bgi-auth.png');
  background-size: cover;
  background-position: center;
}
</style>