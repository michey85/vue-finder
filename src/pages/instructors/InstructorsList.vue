<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register ad an Instructor</router-link>
    </div>

    <h2>List of Coaches</h2>
    <ul v-if="hasInstructors">
      <InstructorItem
        v-for="instr of filteredInstructors"
        :key="instr.id"
        :id="instr.id"
        :first-name="instr.firstName"
        :last-name="instr.lastName"
        :rate="instr.hourlyRate"
        :areas="instr.areas"
      />
    </ul>
    <h3 v-else>No instructors found.</h3>
  </section>
</template>

<script>
import InstructorItem from '../../components/instructors/InstructorItem.vue';

export default {
  components: {
    InstructorItem,
  },
  computed: {
    filteredInstructors() {
      return this.$store.getters['instructors/instructors'];
    },
    hasInstructors() {
      return this.$store.getters['instructors/hasInstructors'];
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
