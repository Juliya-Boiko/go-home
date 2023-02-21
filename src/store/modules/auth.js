import { loginUser, registerUser, logoutUser } from "@/api/customAxios";
import { saveStorage, getStorage, clearStorage } from "@/helpers/localStorage";

const initialState = {
  userName: getStorage('user').name || '',
  token: getStorage('user').token || '',
  userId: getStorage('user').userId || '',
}

export default {
  namespaced: true,
  state: { ...initialState },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.token);
    }
  },
  mutations: {
    setUserName(state, name) {
      state.userName = name;
    },
    setToken(state, token) {
      state.token = token;
    },
    setUserId(state, id) {
      state.userId = id;
    },
    clearUser(state) {
      state.userName = '';
      state.token = '';
      state.userId = '';
    }
  },
  actions: {
    async login({ commit }, payload) {
      const { name, token, userId } = await loginUser(payload);
      commit('setUserName', name);
      commit('setToken', token);
      commit('setUserId', userId);
      saveStorage('user', { name, token, userId });
    },
    async register({ commit }, payload) {
      const { name, token, userId } = await registerUser(payload);
      commit('setUserName', name);
      commit('setToken', token);
      commit('setUserId', userId);
      saveStorage('user', { name, token, userId });
    },
    async logout({ commit }) {
      await logoutUser();
      clearStorage('user');
      commit('clearUser');
    }
  }
};