<template>
  <span class="badge" :class="type">
    {{ title }}
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.badge {
  background-color: var(--gray-200);
  color: var(--black);
  border-radius: var(--radii-base);
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  text-transform: uppercase;
}

.frontend {
  background-color: #3d008d;
  color: var(--white);
}

.backend {
  background-color: #71008d;
  color: var(--white);
}

.career {
  background-color: #8d006e;
  color: var(--white);
}
</style>
