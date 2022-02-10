<template>
  <default-layout></default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'App',
  components: {
    DefaultLayout,
  },
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  background: #333;
  position: relative;

}
</style>
