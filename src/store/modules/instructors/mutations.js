export default {
    registerInstructor(state, payload) {
        state.instructors.push(payload);
    },
    setInstructors(state, payload) {
        state.instructors = payload;
    }
};
