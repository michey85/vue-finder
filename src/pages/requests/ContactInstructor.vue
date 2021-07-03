<template>
  <form @submit.prevent="submitForm">
    <label class="form-control">
      Your E-mail:
      <input type="email" v-model.trim="email"/>
    </label>
    <label class="form-control">
      Your Message:
      <textarea rows="5" v-model.trim="message" />
    </label>
    <p v-if="!isValidForm">Please enter valid email and non-empty message.</p>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      isValidForm: true,
    }
  },
  methods: {
    submitForm() {
      this.isValidForm = true;

      if (!this.email || !this.email.includes('@') || !this.message) {
        this.isValidForm = false;
        return;
      }

      this.$store.dispatch('requests/contactInstructor', {
        id: this.$route.params.id,
        email: this.email,
        message: this.message,
      });

      this.$router.replace('/instructors');
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  margin: 1rem;
  border: 1px solid var(--gray-100);
  border-radius: var(--radii-base);
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}


input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid var(--gray-100);
  padding: 0.15rem;
  font-weight: normal;
}

input:focus,
textarea:focus {
  border-color: var(--color-primary-600);
  background-color: var(--gray-100);
  outline: none;
}

.errors, p {
  font-weight: bold;
  color: var(--color-primary-600);
}

.actions {
  text-align: center;
}
</style>