<template>
  <div class="flex flex-wrap">
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">
      <div class="relative flex flex-col min-w-0 p-4 break-words w-full mb-6 shadow-lg rounded bg-emerald-900">
        <h1 class="mx-auto text-white text-2xl mb-4"> Add New Category </h1>
          <form>
            <div class="grid grid-cols-2 gap-4">
              <div class="form-group mb-6">
                <input
                  v-model="form.name"
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none" id="exampleInput123"
                  placeholder="Category Name">
              </div>
              <div class="form-group mb-6">
                <input
                  v-model="form.slug"
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none" id="exampleInput123"
                  placeholder="Slug">
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="form-group mb-6">
                <input
                  ref="file"
                  @change="selectImage"
                  type="file"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none" id="exampleInput123"
                  placeholder="Image">
              </div>

              <div class="form-group mb-6">
                <input
                  v-model="form.status"
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none" id="exampleInput123"
                  placeholder="Status">
              </div>

            </div>

            <div class="mx-auto block">
              <button
                type="button"
                @click="submitForm"
                class="bg-emerald-500 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded">
                Add New Category
              </button>
            </div>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
import vue from "@/assets/img/react.jpg";

export default {
  name: "CategoryCreate",
  data() {
    return {
      form: {
        name: '',
        status: '',
        slug: '',
        image: '',
      }
    }
  },
  computed: {
    vue_image() {
      return vue;
    }
  },
  methods: {
    selectImage(){
      this.form.image = this.$refs.file.files.item(0);
    },
    submitForm() {
      if(this.form.name === '') {
        return this.$toast.error("Name is required!");
      }else if(!this.form.image){
        return this.$toast.error("Image is required!");
      }else if(this.form.status === ''){
        return this.$toast.error("Status is required!");
      }else if(this.form.slug === '') {
        return this.$toast.error("Slug is required!");
      }

      console.log(this.form);
      console.log('submit');
      this.$toast.success('Category Created successfully!');
      this.$router.push({ name: 'category-index' });
    }
  }
};
</script>

<style scoped>

</style>