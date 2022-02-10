<template>
  <section class="bg-white py-4 flex flex-wrap shadow-lg justify-center">
    <h2 class="text-4xl w-full text-center my-2
     text-quaternary ">Busca un Usuario de Github</h2>
    <form class="mb-2">
      <input class="rounded border-2 px-4 shadow-lg py-2"
        v-model="username" type="text" placeholder="Username...">
      <button class="mx-4 rounded-md border-2 shadow-md py-2 px-6 bg-primary text-white"
       @click.prevent="searchUser">Buscar</button>
    </form>
  </section>
</template>
<script>
export default {
  emit: ['searchUser'],
  name: 'SearchBar',
  data() {
    return {
      username: '',
    };
  },
  methods: {
    searchUser() {
      if (this.username !== '') {
        this.$emit('searchUser', this.username);
        this.username = '';
      }
    },
  },
};
</script>
