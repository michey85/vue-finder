export default {
  instructors(state) {
    return state.instructors;
  },
  hasInstructors(state) {
    return state.instructors && state.instructors.length > 0;
  },
  isInstructor(_, getters, __, rootGetters) {
    const instructors = getters.instructors;
    const userId = rootGetters.userId;
    
    return instructors.some(inst => inst.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;

    if (!lastFetch) return true;
    
    const currentTimestamp = new Date().getTime();

    // 1 minute cache
    return (currentTimestamp - lastFetch) / 1000 > 60;
  }
};
