<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: var(--radii-base);
  box-shadow: var(--shadow-base);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
