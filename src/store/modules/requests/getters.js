export default {
  requests(state, _, __, rootGetters) {
    const userId = rootGetters.userId;
    return state.requests.filter((res) => res.instructorId === userId);
  },

  hasRequests(_, getters) {
    return getters.requests?.length > 0;
  }
};