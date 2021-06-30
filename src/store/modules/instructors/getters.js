export default {
  instructors(state) {
    return state.instructors;
  },
  hasInstructors(state) {
    return state.instructors && state.instructors.length > 0;
  },
};
