<template>
  <div class="flex flex-wrap">
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">
      <div class="relative flex flex-col min-w-0 p-4 break-words w-full mb-6 shadow-lg rounded bg-emerald-900">
        <h1 class="mx-auto text-white text-2xl mb-4"> Add New Product </h1>
        <form>
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <input
                v-model="form.category"
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                id="exampleInput123"
                placeholder="Category Name">
            </div>

            <div class="form-group mb-6">
              <input
                v-model="form.name"
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                id="exampleInput123"
                placeholder="Product Name">
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4">
            <div class="form-group mb-6">
              <input
                ref="file"
                @change="selectImage"
                type="file"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                id="exampleInput123"
                placeholder="Product Image">
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <input
                v-model="form.brand"
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                id="exampleInput123"
                placeholder="Brand of Product">
            </div>

            <div class="form-group mb-6">
              <input
                v-model="form.price"
                min="1"
                type="number"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                id="exampleInput123"
                placeholder="Price of Product">
            </div>
          </div>

          <h1 class="mx-auto text-white text-2xl mb-4"> Variants </h1>

          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <input
                v-model="variant.color"
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                placeholder="Color">
            </div>

            <div class="form-group mb-6">
              <input
                v-model="variant.price"
                min="1"
                type="number"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                placeholder="Price">
            </div>

            <div class="form-group mb-6">
              <input
                v-model="variant.size"
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                placeholder="Sizes: like small, medium, large"
              >
            </div>
          </div>

          <div class="mx-auto block mt-4">
            <button
              type="button"
              class="w-1/4 bg-emerald-500 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded"
              @click="addVariant()">
              Add
            </button>
          </div>

          <div v-if="form.variants.length > 0 ">
            <div v-for="(v, index) in form.variants" :id="index" :key="index" class="flex flex-row justify-between my-4">
              <p  class="text-white text-left">
                Color: {{ v.color }}, Size: {{ v.size }}, Price: $ {{ v.price }}
              </p>

              <button v-if="v" type="button" @click="remove(index)" class="p-2 px-4 bg-red-500 hover:bg-red-800 text-white font-bold rounded text-right">
                <i class="cursor-pointer fas fa-trash text-sm text-white">
                </i>
              </button>
            </div>

          </div>

          <div class="mx-auto block mt-4">
            <button
              type="button"
              @click="submitForm"
              class="bg-emerald-500 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded">
              Add New Product
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProductCreate",
  data() {
    return {
      form: {
        category: "",
        name: "",
        image: "",
        brand: "",
        price: "",
        variants: []
      },
      variant: {
        size: "",
        color: "",
        price: "",
      }
    };
  },
  methods: {
    selectImage() {
      this.form.image = this.$refs.file.files.item(0);
    },
    addVariant() {
      if(this.variant.size  && this.variant.color && this.variant ) {
        this.form.variants.push({...this.variant});
        console.log(this.variant);
        console.log(this.form);
        console.log(this.form.variants);
        this.resetData();
      } else {
        this.$toast.error('Please add proper information about variant');
      }

    },
    remove(index) {
      this.form.variants.splice(index, 1);
    },
    submitForm() {
      if(this.form.category === '' ) {
        return this.$toast.error("Category is required!");
      }else if(this.form.name === '') {
        return this.$toast.error("Name is required!");
      }else if(!this.form.image){
        return this.$toast.error("Image is required!");
      }else if(this.form.brand === ''){
        return this.$toast.error("Brand is required!");
      }else if(this.form.price === '') {
        return this.$toast.error("Price is required!");
      }

      console.log(this.form);
      console.log("submit");
      this.$toast.success("Product Created successfully!");
      this.$router.push({ name: "product-index" });
    },
    resetData() {
      this.variant.size = '';
      this.variant.color = '';
      this.variant.price = '';
    }
  }
};
</script>

<style scoped>

</style>