<template>
  <button v-if="!link" :class="mode">
    <slot />
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot />
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: '',
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
};
</script>

<style lang="scss" scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: var(--color-primary-300);
  border: 1px solid var(--color-primary-300);
  color: var(--white);
  cursor: pointer;
  border-radius: var(--radii-base);
  display: inline-block;
  transition: all 250ms ease-in-out;

  &:hover,
  &:active {
    background-color: var(--color-primary-600);
    border-color: var(--color-primary-600);
    color: var(--white);
  }
}

.flat {
  background-color: transparent;
  color: var(--color-primary-300);
  border: none;
}

.outline {
  background-color: transparent;
  border-color: var(--color-primary-300);
  color: var(--color-primary-300);
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: var(--color-primary-300);
}
</style>
