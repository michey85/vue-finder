export default {
    contactInstructor(context, payload) {
        const newRequest = {
            id: new Date().toISOString(),
            instructorId: payload.id,
            userEmail: payload.email,
            message: payload.message,
        };

        context.commit('addRequest', newRequest);
    }
}