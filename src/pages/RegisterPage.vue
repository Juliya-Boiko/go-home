<template>
  <AuthSection>
    <RegisterForm />
  </AuthSection>
</template>

<script>
import AuthSection from '@/components/auth/AuthSection.vue';
import RegisterForm from '@/components/auth/RegisterForm.vue';

export default {
  name: 'RegisterPage',
  components: {
    AuthSection,
    RegisterForm
  }
}
</script>

<style lang="scss" scoped>

</style>