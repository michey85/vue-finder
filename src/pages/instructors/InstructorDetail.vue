<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        />
        <p>{{ description }}</p>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view />
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedInstructor: null,
    };
  },
  computed: {
    fullName() {
      return (
        this.selectedInstructor.firstName +
        ' ' +
        this.selectedInstructor.lastName
      );
    },
    areas() {
      return this.selectedInstructor.areas;
    },
    rate() {
      return this.selectedInstructor.hourlyRate;
    },
    description() {
      return this.selectedInstructor.description;
    },
    contactLink() {
      return this.$route.path + '/contact';
    },
  },
  created() {
    this.selectedInstructor = this.$store.getters[
      'instructors/instructors'
    ].find((inst) => inst.id === this.id);
  },
};
</script>
