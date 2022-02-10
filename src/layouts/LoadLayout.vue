<template>
  <div class="container mx-auto">
    <div class="flex justify-center">

      <div
        class="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-white bg-opacity-50
          z-10
        "
      >
      <div class="text-center text-white">
        <img class="h-20" src="@/assets/images/loader.gif" alt="github loader">
        <p class="text-xs">Cargando...</p>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoadLayout',
};
</script>
<style scoped>
 .container{
   min-height: 100%;
   box-sizing: border-box;
 }
</style>
