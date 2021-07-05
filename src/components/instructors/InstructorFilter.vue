<template>
  <base-card>
    <h2>Find your instructor</h2>
    <label>
      <input type="checkbox" name="hatha" checked @change="setFilter" />
      Hatha
    </label>
    <label>
      <input type="checkbox" name="mantra" checked @change="setFilter" />
      Mantra
    </label>
    <label>
      <input type="checkbox" name="meditation" checked @change="setFilter" />
      Meditation
    </label>
    <label>
      <input type="checkbox" name="kundalini" checked @change="setFilter" />
      Kundalini
    </label>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        hatha: true,
        mantra: true,
        meditation: true,
        kundalini: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const name = event.target.name;
      const isActive = event.target.checked;

      this.filters[name] = isActive;
      this.$emit('change-filter', this.filters);
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
