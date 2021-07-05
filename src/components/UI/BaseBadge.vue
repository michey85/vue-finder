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

.hatha {
  background-color: #954cf3;
  color: var(--white);
}

.mantra {
  background-color: #31793a;
  color: var(--white);
}

.kundalini {
  background-color: #ddb941;
  color: var(--white);
}

.meditation {
  background-color: #8d006e;
  color: var(--white);
}
</style>
