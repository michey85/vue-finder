import { createStore } from 'vuex';

import instructorsModule from './modules/instructors';
import requestsModule from './modules/requests';
import authModule from './modules/auth';

export default createStore({
  modules: {
    instructors: instructorsModule,
    requests: requestsModule,
    auth: authModule,
  },
});
