<template>
  <header>
    <nav>
      <h1><router-link to="/">Find a Yoga Instructor</router-link></h1>
      <ul>
        <li>
          <router-link to="/instructors">All Instructors</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/requests">Requests</router-link>
        </li>
        <li v-else>
          <router-link to="/auth">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuth;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/instructors');
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background-color: var(--color-primary-600);
  width: 100%;
  min-height: 5rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--white);
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid var(--white);

    &:active,
    &:hover,
    &.router-link-active {
      color: var(--color-secondary-300);
      border: 1px solid var(--color-secondary-300);
    }
  }
}

nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 0 0.5rem;
  }
}

h1 {
  margin: 0;

  a {
    color: var(--white);
    margin: 0;
    border-color: transparent;

    &:hover {
      border-color: transparent;
      color: var(--gray-100);
    }
  }
}
</style>
