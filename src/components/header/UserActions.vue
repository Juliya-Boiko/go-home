<template>
  <div class="user-actions" @mouseover="openActions" @mouseleave="closeActions">
    <button type="button" class="user-actions__btn" @click="toggleActions">
      <img src="../../assets/icons/user.svg" alt="" class="user-actions__icon">
      <span class="">Profile</span>
    </button>
    <ul v-show="isActionsOpen" class="user-actions__list">
      <li class="user-actions__item">
        <router-link class="user-actions__link" :to="{ name: 'orders' }">My Orders</router-link>
      </li>
      <li class="user-actions__item">
        <button @click="handleLogout" class="user-actions__logout">
          Logout
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UserActions',
  data() {
    return {
      isActionsOpen: false,
    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    openActions() {
      this.isActionsOpen = true;
    },
    closeActions() {
      this.isActionsOpen = false;
    },
    toggleActions() {
      this.isActionsOpen = !this.isActionsOpen;
    },
    handleLogout() {
      try {
        this.logout();
        this.$notify({
          type: 'success',
          title: 'Logout successful',
        });
      } catch (error) {
        console.log('error--->', error);
        this.$notify({
          type: 'error',
          title: 'Error',
          text: error.message,
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables.scss';
  .user-actions {
    position: relative;
    display: inline-flex;
    padding: 5px 0;
    color: #fff;

    &__btn {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      color: inherit;
      font-family: inherit;
      font-size: 16px;
      padding: 0;
      transition: color 0.4s;
      color: $secondary;
    }

    &__icon {
      width: 16px;
      height: 18px;
      margin: 0 5px 0 0;
    }

    &__list {
      position: absolute;
      right: 0;
      top: 100%;
      background: $secondary;
      padding: 15px;
      color: $primary;
      min-width: 150px;
    }

    &__item {
      text-align: center;
      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }

    &__link{
      text-decoration: none;
      color: inherit;
    }

    &__logout {
      padding: 0;
      background: none;
      border: none;
      font-size: inherit;
      font-family: inherit;
      cursor: pointer;
    }
  }
</style>