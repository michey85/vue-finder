<template>
  <section>
    <base-card>
      <h2>Register as an instructor!</h2>
      <InstructorForm />
    </base-card>
  </section>
</template>

<script>
import InstructorForm from '../../components/instructors/InstructorForm.vue';

export default {
  components: {
    InstructorForm,
  },
};
</script>
