<template>
  <base-card>
    <h2>Find your instructor</h2>
    <label>
      <input type="checkbox" name="frontend" checked @change="setFilter" />
      Frontend
    </label>
    <label>
      <input type="checkbox" name="backend" checked @change="setFilter" />
      Backend
    </label>
    <label>
      <input type="checkbox" name="fullstack" checked @change="setFilter" />
      Fullstack
    </label>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        fullstack: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const name = event.target.name;
      const isActive = event.target.checked;

      this.filters[name] = isActive;
      this.$emit('change-filter', this.filters);
      console.log('filter file', this.filters);
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
