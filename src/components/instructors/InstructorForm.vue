<template>
  <form @submit.prevent="submitForm">
    <label class="form-control">
      First Name
      <input type="text" v-model.trim="firstName" />
    </label>

    <label class="form-control">
      First Name
      <input type="text" v-model.trim="lastName" />
    </label>

    <label class="form-control">
      Description
      <textarea rows="5" v-model.trim="description" />
    </label>

    <label class="form-control">
      Hourly rate
      <input type="number" v-model.number="rate" />
    </label>

    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <label>
        <input type="checkbox" value="frontend" v-model="areas" />
        Frontend developer
      </label>
      <label>
        <input type="checkbox" value="backend" v-model="areas" />
        Backend developer
      </label>
      <label>
        <input type="checkbox" value="fullstack" v-model="areas" />
        Fullstack developer
      </label>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: [],
    };
  },
  methods: {
    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        areas: this.areas,
      };
      console.log(formData);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid var(--gray-400);
  font: inherit;
  padding: 0.4rem 0.6rem;
  font-weight: normal;

  &:focus {
    background-color: var(--gray-50);
    outline: none;
    border-color: var(--color-secondary-600);
  }
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;

  &:focus {
    outline: var(--color-secondary-600) solid 1px;
  }
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid {
  label {
    color: var(--color-primary-600);
  }

  input,
  textarea {
    border: 1px solid var(--color-primary-600);
  }
}
</style>
