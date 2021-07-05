<template>
<div>
  <base-dialog :show="!!error" title="An error occured!" @close="handleError">
    <p>{{error}}</p>
  </base-dialog>
  <InstructorFilter @change-filter="setFilter" />
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadInstructors(true)">Refresh</base-button>
        <base-button link to="/register" v-if="!isInstructor && !isLoading">Register ad an Instructor</base-button>
      </div>

      <h2>List of Coaches</h2>
      <div v-if="isLoading">
        <base-spinner />
      </div>
      <ul v-else-if="hasInstructors">
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
</div>
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
      isLoading: false,
      error: null,
      activeFilter: {
        hatha: true,
        mantra: true,
        meditation: true,
        kundalini: true,
      },
    };
  },
  computed: {
    filteredInstructors() {
      return this.$store.getters['instructors/instructors'].filter((inst) => {
        if (this.activeFilter.hatha && inst.areas.includes('hatha'))
          return true;
        if (this.activeFilter.mantra && inst.areas.includes('mantra'))
          return true;
        if (this.activeFilter.meditation && inst.areas.includes('meditation'))
          return true;
        if (this.activeFilter.kundalini && inst.areas.includes('kundalini'))
          return true;

        return false;
      });
    },
    hasInstructors() {
      return !this.isLoading && this.$store.getters['instructors/hasInstructors'];
    },
    isInstructor() {
      return this.$store.getters['instructors/isInstructor'];
    }
  },
  methods: {
    setFilter(updatedFilter) {
      this.activeFilter = updatedFilter;
    },
    async loadInstructors(refresh = false) {
      this.isLoading = true;

      try {
        await this.$store.dispatch('instructors/loadInstructors', {forceRefresh: refresh});
      } catch (error) {
        this.error = error.message || 'Something went wrong...'
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },
  created() {
    this.loadInstructors();
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
