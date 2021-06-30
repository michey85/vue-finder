<template>
  <TheHeader />

  <router-view />
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  // colors
  --color-primary-300: #f687b3;
  --color-primary-600: #b83280;
  --color-secondary-300: #b794f4;
  --color-secondary-600: #6b46c1;

  --gray-50: #f7fafc;
  --gray-100: #edf2f7;
  --gray-200: #e2e8f0;
  --gray-300: #cbd5e0;
  --gray-400: #a0aec0;
  --gray-500: #718096;
  --gray-600: #4a5568;
  --gray-700: #2d3748;
  --gray-800: #1a202c;
  --gray-900: #171923;

  --black: #222;
  --white: #fff;

  // other
  --radii-base: 1rem;
  --shadow-base: 0 2px 8px rgba(0, 0, 0, 0.26);
}

body {
  margin: 0;
}

a {
  // font-weight: bold;
  color: var(--color-secondary-300);
  text-decoration: none;

  &:hover {
    color: var(--color-secondary-600);
  }

  &.router-link-exact-active {
    color: var(--color-secondary-600);
    font-weight: bold;
  }
}
</style>
