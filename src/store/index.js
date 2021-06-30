import { createStore } from 'vuex';

import instructorsModule from './modules/instructors';

export default createStore({
  modules: {
    instructors: instructorsModule,
  },
  state: {},
  mutations: {},
  actions: {},
});
