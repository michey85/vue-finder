import { createStore } from 'vuex';

import instructorsModule from './modules/instructors';
import requestsModule from './modules/requests';

export default createStore({
  modules: {
    instructors: instructorsModule,
    requests: requestsModule,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  mutations: {},
  actions: {},
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});
