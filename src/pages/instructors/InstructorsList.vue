<template>
  <InstructorFilter @change-filter="setFilter" />
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register ad an Instructor</base-button>
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
    </base-card>
  </section>
</template>

<script>
import InstructorItem from '../../components/instructors/InstructorItem.vue';
import InstructorFilter from '../../components/instructors/InstructorFilter.vue';

export default {
  components: {
    InstructorItem,
    InstructorFilter,
  },
  data() {
    return {
      activeFilter: {
        frontend: true,
        backend: true,
        fullstack: true,
      },
    };
  },
  computed: {
    filteredInstructors() {
      console.log(this.activeFilter);
      return this.$store.getters['instructors/instructors'].filter((inst) => {
        if (this.activeFilter.frontend && inst.areas.includes('frontend'))
          return true;
        if (this.activeFilter.backend && inst.areas.includes('backend'))
          return true;
        if (this.activeFilter.fullstack && inst.areas.includes('fullstack'))
          return true;

        return false;
      });
    },
    hasInstructors() {
      return this.$store.getters['instructors/hasInstructors'];
    },
  },
  methods: {
    setFilter(updatedFilter) {
      console.log('list file', updatedFilter);

      this.activeFilter = updatedFilter;
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
