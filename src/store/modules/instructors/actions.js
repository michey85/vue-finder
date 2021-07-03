export default {
  registerInstructor(context, formData) {
    const instructorData = {
      id: context.rootGetters.userId,
      firstName: formData.first,
      lastName: formData.last,
      description: formData.desc,
      hourlyRate: formData.rate,
      areas: formData.areas,
    };

    context.commit('registerInstructor', instructorData);
  },
};
