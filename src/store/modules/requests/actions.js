import {DB_URL} from '../../../config';

export default {
    async contactInstructor(context, payload) {
        const newRequest = {
            userEmail: payload.email,
            message: payload.message,
        };

        const response = await fetch(`${DB_URL}/requests/${payload.id}.json`, {
          method: 'POST',
          body: JSON.stringify(newRequest),
        });

        if (!response.ok) {
            throw new Error(response.message || 'Failed to fetch');
        }

        const {name} = response.json();

        newRequest.id = name;
        newRequest.instructorId = payload.id;

        context.commit('addRequest', newRequest);
    },
    async loadRequests(context) {
        const instructorId = context.rootGetters.userId;

        const token = context.rootGetters.token;

        const response = await fetch(`${DB_URL}/requests/${instructorId}.json?auth=${token}`);
        
        if (!response.ok) {
            throw new Error(response.message || 'Failed to fetch data.');
        }

        const resData = await response.json();

        const requests = [];

        for (const key in resData) {
            requests.push({
              id: key,
              instructorId,
              userEmail: resData[key].userEmail,
              message: resData[key].message,
            });
        }

        context.commit('setRequests', requests);
    }
}