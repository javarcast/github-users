<template>
  <header-bar></header-bar>
  <main-content></main-content>
  <footer-bar></footer-bar>
</template>
<script>
import HeaderBar from '@/components/header/HeaderBar.vue';
import MainContent from '@/components/main/MainContent.vue';
import FooterBar from '@/components/footer/FooterBar.vue';

export default {
  name: 'DefaultLayout',
  components: {
    HeaderBar,
    MainContent,
    FooterBar,
  },
};
</script>
