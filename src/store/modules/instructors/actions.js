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

    const response = await fetch(`${DB_URL}/instructors/${userID}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(instructorData)
    });

    if (response.ok) {
      context.commit('registerInstructor', {...instructorData, id: userID});
    }

  },

  async loadInstructors(context) {
    const response = await fetch(`${DB_URL}/instructors.json`);

    const resData = await response.json();

    if (!response.ok) {
      throw new Error(resData.message || 'Failed to fetch data!');
    }

    console.log(resData);
    
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
  }
};
