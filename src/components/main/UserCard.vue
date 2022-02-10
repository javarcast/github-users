<template>
  <div class="wrapper antialiased w-full sm:w-1/2 lg:w-1/3 px-14 mt-10">

    <a :href="person.html_url">
      <vue-load-image>
        <template v-slot:image>
          <img :src="person.avatar_url" :alt="person.login"
            class="w-full object-cover object-center rounded-lg shadow-md">
        </template>
        <template v-slot:preloader>
          <img src="@/assets/images/preloader.png" :alt="person.login"
            class="w-full object-cover object-center rounded-lg shadow-md">
        </template>
        <template v-slot:error>
          <img src="@/assets/images/error.png" :alt="person.login"
            class="w-full object-cover object-center rounded-lg shadow-md">
        </template>
      </vue-load-image>
      <div class="relative px-4 -mt-16 ">
        <div class="bg-primary p-6 rounded-lg shadow-lg flex flex-wrap justify-center">
          <img class="h-6" src="@/assets/images/logo2.png" alt="">
          <h4 class="mt-1 mx-4 text-center text-xl font-semibold uppercase
           text-white leading-tight truncate">
            {{ person.login }}
          </h4>
          <div class="mt-4 flex items-center justify-around">
            <p class="text-sm text-gray-300 mx-2">Seguidores:
              <span class="mx-1 text-gray-100">{{person.followers}}</span>
            </p>
            <p class="text-sm text-gray-300 mx-2">Siguiendo:
              <span class="mx-1 text-gray-100">{{person.following}}</span>
            </p>
          </div>
          <div class="mt-4 flex items-center justify-around">
            <p class="text-sm text-gray-300 mx-2">Public Repository:
              <span class="mx-1 text-gray-100">{{person.public_repos}}</span>
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
import VueLoadImage from 'vue-load-image';

export default {
  name: 'UserCard',
  components: {
    VueLoadImage,
  },
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
};
</script>
