<template>
  <div class="flex flex-wrap">
    <div class="w-full xl:w-full mb-12 xl:mb-0 px-4">
      <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <h1 class="bg-white p-14">Welcome to TODO App</h1>
      </div>
    </div>
  </div>
</template>

<script>
import AdminLayout from '../../layouts/Admin';

export default {
  name: "Dashboard",
  components: {
    AdminLayout,
  },
};
</script>

<style scoped>

</style>