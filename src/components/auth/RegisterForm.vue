<template>
  <form ref="form" class="auth-form" @submit.prevent="handleSubmit">
    <p class="auth-form__title">Register</p>
    <div class="auth-form__input-wrapper">
      <input type="text" v-model="name" placeholder="Name" class="auth-form__input">
      <span class="auth-form__error" v-if="msg.name">{{ msg.name }}</span>
    </div>

    <div class="auth-form__input-wrapper">
      <input type="text" v-model="email" placeholder="Email" class="auth-form__input">
      <span class="auth-form__error" v-if="msg.email">{{ msg.email }}</span>
    </div>

    <div class="auth-form__input-wrapper">
      <input type="password" v-model="password" placeholder="Password" class="auth-form__input">
      <span class="auth-form__error" v-if="msg.password">{{ msg.password }}</span>
    </div>

    <div class="auth-form__input-wrapper">
      <input type="password" v-model="confirm" placeholder="Confirm password" class="auth-form__input">
      <span class="auth-form__error" v-if="msg.confirm">{{ msg.confirm }}</span>
    </div>

    <PrimaryBtn type="submit">Enter</PrimaryBtn>
  </form>
</template>

<script>
import PrimaryBtn from '../shared/PrimaryBtn.vue';
import { mapActions } from 'vuex';

export default {
  name: 'RegisterForm',
  components: {
    PrimaryBtn
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirm: '',
      msg: []
    }
  },
  methods: {
    ...mapActions('auth', ['register']),
    async handleSubmit() {
      const newUser = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      try {
        await this.register(newUser);
        this.$refs.form.reset();
      } catch (error) {
        console.log('error--->', error);
        this.$notify({
          type: 'error',
          title: 'Error',
          text: error.message,
        });
      }
      this.$router.push({ name: 'homepage' });
    },
    validateName(value) {
      if (value.length < 2) {
        this.msg['name'] = 'Min 2 symbols';
      }
      if (value.length >= 2) {
        this.msg['name'] = '';
      }
    },
    validateEmail(value) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg['email'] = '';
      } else {
        this.msg['email'] = 'Invalid Email Address';
      }
    },
    validatePassword(value) {
      if (value.length < 5) {
        this.msg['password'] = 'Min 5 symbols';
      }
      if (value.length >= 5) {
        this.msg['password'] = '';
      }
    },
    validateConfirm(value) {
      if (value !== this.password) {
        this.msg['confirm'] = 'Dont match with password';
      }
      if (value.length >= 5) {
        this.msg['confirm'] = '';
      }
    },
  },
  watch: {
    name(value) {
      this.validateName(value);
    },
    email(value) {
      this.validateEmail(value);
    },
    password(value) {
      this.validatePassword(value);
    },
    confirm(value) {
      this.validateConfirm(value);
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';

.auth-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: $secondary;

  &__title {
    margin: 0 0 20px 0;
    font-weight: $fw-bold;
    font-size: 20px;
    line-height: 1.2;
  }

  &__input-wrapper {
  margin: 0 0 20px 0;
  text-align: center;
  }

  &__error {
    text-align: center;
    font-size: 9px;
    line-height: 1.2;
    color: $accent;
  }

  &__input {
  width: 220px;
  padding: 11px 30px;
  box-sizing: border-box;
  display: block;
  font-size: 18px;
  line-height: 1.2;
  text-align: center;
  border: none;
  outline: 2px solid $accent;
    &::placeholder {
      font-size: 18px;
      line-height: 1.2;
      color: $primary;
    }
  }
}
</style>