<template>
  <section>
    <base-card>
      <h2>Register as an instructor!</h2>
      <InstructorForm @save-data="saveData"/>
    </base-card>
  </section>
</template>

<script>
import InstructorForm from '../../components/instructors/InstructorForm.vue';

export default {
  components: {
    InstructorForm,
  },
  methods: {
    saveData(formData) {
      this.$store.dispatch('instructors/registerInstructor', formData);
      this.$router.replace('/instructors');
    }
  }
};
</script>
