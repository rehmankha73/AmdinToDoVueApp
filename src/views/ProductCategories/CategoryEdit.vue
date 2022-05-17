<template>
  <div class="flex flex-wrap">
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">
      <div class="relative flex flex-col min-w-0 p-4 break-words w-full mb-6 shadow-lg rounded bg-emerald-900">
        <h1 class="mx-auto text-white text-2xl mb-4"> Edit Category </h1>
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
                @click="updateForm"
                class="bg-emerald-500 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded">
                Add Update Category
              </button>
            </div>
          </form>
      </div>
    </div>
  </div>
</template>

<script>

import bootstrap from "@/assets/img/bootstrap.jpg";
import react from "@/assets/img/react.jpg";
import angular from "@/assets/img/angular.jpg";
import sketch from "@/assets/img/sketch.jpg";
import vue from "@/assets/img/react.jpg";

export default {
  name: "CategoryCreate",
  props: ['id'],
  data() {
    return {
      product_categories: [
        { id: '1', image: bootstrap, category: 'Shoes', status: 'Active' },
        { id: '2', image: react, category: 'Glasses', status: 'Active' },
        { id: '3', image: angular, category: 'Jacket', status: 'Active' },
        { id: '4', image: sketch, category: 'Shirt', status: 'Active' },
        { id: '5', image: vue, category: 'Bag', status: 'Active' },
      ],
      form: {
        name: '',
        status: '',
        slug: '',
        image: '',
      }
    }
  },
  mounted() {
    if(this.id) {
      this.prefillData(this.id);
    }
  },
  methods: {
    selectImage(){
      this.form.image = this.$refs.file.files.item(0);
    },
    prefillData(_id) {
      let index = parseInt(_id) - 1;
      let category = this.product_categories[index];
      console.log(category)
      this.form.name = category.category;
      this.form.slug = category.category;
      this.form.status = category.status;
    },
    updateForm() {
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
      this.$toast.success('Category Updates successfully!');
      this.$router.push({ name: 'category-index' });
    }
  }
};
</script>

<style scoped>

</style>