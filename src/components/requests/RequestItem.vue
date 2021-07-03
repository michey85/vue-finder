<template>
    <li>
        <div>
            <a :href="emailLink">{{email}}</a>
        </div>
        <p>{{message}}</p>
    </li>
</template>

<script>
export default {
    props: ['email', 'message'],
    computed: {
        emailLink() {
            return 'mailto:' + this.email;
        }
    }
}
</script>

<style lang="scss" scoped>
li {
  margin: 1rem 0;
  border: 1px solid var(--gray-100);
  padding: 1rem;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>