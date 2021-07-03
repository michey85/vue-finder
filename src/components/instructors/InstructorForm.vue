<template>
  <form @submit.prevent="submitForm">
    <label class="form-control" :class="{invalid: !firstName.isValid}">
      First Name
      <input type="text" v-model.trim="firstName.val" @blur="clearValidity('firstName')" />
      <p v-if="!firstName.isValid">The field must not be empty.</p>
    </label>

    <label class="form-control" :class="{invalid: !lastName.isValid}">
      First Name
      <input type="text" v-model.trim="lastName.val" @blur="clearValidity('lastName')" />
      <p v-if="!lastName.isValid">The field must not be empty.</p>
    </label>

    <label class="form-control" :class="{invalid: !description.isValid}">
      Description
      <textarea rows="5" v-model.trim="description.val" @blur="clearValidity('description')"/>
      <p v-if="!description.isValid">The field must not be empty.</p>
    </label>

    <label class="form-control" :class="{invalid: !rate.isValid}">
      Hourly rate
      <input type="number" v-model.number="rate.val" @blur="clearValidity('rate')" />
      <p v-if="!rate.isValid">The field must not be empty or less than 0.</p>
    </label>

    <div class="form-control" :class="{invalid: !areas.isValid}">
      <h3>Areas of Expertise</h3>
      <label>
        <input type="checkbox" value="frontend" v-model="areas.val" @blur="clearValidity('areas')" />
        Frontend developer
      </label>
      <label>
        <input type="checkbox" value="backend" v-model="areas.val" @blur="clearValidity('areas')" />
        Backend developer
      </label>
      <label>
        <input type="checkbox" value="fullstack" v-model="areas.val" @blur="clearValidity('areas')" />
        Fullstack developer
      </label>
      <p v-if="!areas.isValid">Choose at least one expertise.</p>
    </div>
    <p v-if="!isValidForm">Please fix all the above errors and try to submit again.</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      isValidForm: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.isValidForm = true;

      if (!this.firstName.val) {
        this.firstName.isValid = false;
        this.isValidForm = false;
      }
      if (!this.lastName.val) {
        this.lastName.isValid = false;
        this.isValidForm = false;
      }
      if (!this.description.val) {
        this.description.isValid = false;
        this.isValidForm = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.isValidForm = false;
      }
      if (!this.areas.val.length) {
        this.areas.isValid = false;
        this.isValidForm = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.isValidForm) return;

      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        desc: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };

      this.$emit('save-data', formData)
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

p {
  color: var(--color-primary-600);
}

</style>
