import {DB_URL} from '../../../config';

export default {
  async registerInstructor(context, formData) {
    const userID = context.rootGetters.userId;

    const instructorData = {
      firstName: formData.first,
      lastName: formData.last,
      description: formData.desc,
      hourlyRate: formData.rate,
      areas: formData.areas,
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `${DB_URL}/instructors/${userID}.json?auth=${token}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(instructorData),
      }
    );

    if (response.ok) {
      context.commit('registerInstructor', {...instructorData, id: userID});
    }

  },

  async loadInstructors(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) return;

    const response = await fetch(`${DB_URL}/instructors.json`);

    
    if (!response.ok) {
      throw new Error(resData.message || 'Failed to fetch data!');
    }
    const resData = await response.json();

    const instructors = [];

    for (const key in resData) {
      const instr = {
        firstName: resData[key].firstName,
        lastName: resData[key].lastName,
        description: resData[key].description,
        hourlyRate: resData[key].hourlyRate,
        areas: resData[key].areas,
        id: key,
      }

      instructors.push(instr)
    }

    context.commit('setInstructors', instructors);
    context.commit('setFetchTimestamp');
  }
};
