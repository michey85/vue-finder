<template>
  <TheHeader />

  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component" />
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    }
  },
  watch: {
    didAutoLogout(current, prev) {
      if (current && current !== prev) {
        this.$router.replace('/instructors');
      }
    }
  },
  created() {
    this.$store.dispatch('tryLogin');
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
  font-size: 1.2rem;
}

a {
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

.route {
  &-enter-from {
    opacity: 0;
    transform: translateY(-50px);
  }
  &-leave-to {
    opacity: 0;
    transform: translateY(50px);
  }

  &-enter-active {
    transition: all 0.3s ease-out;
  }
  &-leave-active {
    transition: all 0.3s ease-in;
  }

  &-enter-to, &-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
