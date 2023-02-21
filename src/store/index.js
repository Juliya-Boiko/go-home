import Vuex from 'vuex';
import authModule from './modules/auth';
// import ordersModule from './modules/orders';

const store = new Vuex.Store({
  modules: {
    auth: authModule,
  //   // orders: ordersModule
  },
});
 
export default store;  