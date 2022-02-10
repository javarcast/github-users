<template>
  <main class="relative pb-24">
    <search-bar v-on:searchUser="findUser"></search-bar>
    <section class="flex  flex-wrap justify-around">
      <user-card v-for="(person, index) in users"
       :key="`${person.id}${index}`" :person="person"></user-card>
    </section>
  </main>
  <load-layout v-show="isLoading"></load-layout>
</template>
<script>
import getUser from '@/api/github';
import SearchBar from '@/components/main/SearchBar.vue';
import LoadLayout from '@/layouts/LoadLayout.vue';
import UserCard from '@/components/main/UserCard.vue';

export default {
  name: 'MainContent',
  data() {
    return {
      users: [],
      isLoading: false,
    };
  },
  components: {
    SearchBar,
    LoadLayout,
    UserCard,
  },
  methods: {
    findUser(username) {
      this.isLoading = true;
      getUser(username)
        .then((user) => {
          this.users.push(user);
        })
        .catch((error) => console.error(error))
        .finally(() => { this.isLoading = false; });
    },
  },
};
</script>
