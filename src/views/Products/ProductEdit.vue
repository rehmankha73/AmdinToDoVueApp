<template>
  <div class="flex flex-wrap">
    <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto">
      <div class="relative flex flex-col min-w-0 p-4 break-words w-full mb-6 shadow-lg rounded bg-emerald-900">
        <h1 class="mx-auto text-white text-2xl mb-4"> Edit Product </h1>
        <form>
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <input
                v-model="form.category"
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none" id="exampleInput123"
                placeholder="Category Name">
            </div>

            <div class="form-group mb-6">
              <input
                v-model="form.name"
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none" id="exampleInput123"
                placeholder="Product Name">
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4">
            <div class="form-group mb-6">
              <input
                ref="file"
                @change="selectImage"
                type="file"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none" id="exampleInput123"
                placeholder="Product Image">
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <input
                v-model="form.brand"
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none" id="exampleInput123"
                placeholder="Brand of Product">
            </div>

            <div class="form-group mb-6">
              <input
                v-model="form.price"
                min="1"
                type="number"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none" id="exampleInput123"
                placeholder="Price of Product">
            </div>
          </div>


          <h1 class="mx-auto text-white text-2xl mb-4"> Variants </h1>

          <div class="grid grid-cols-2 gap-4">
            <div class="form-group">
              <input
                v-model="attribute.name"
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                placeholder="Name">
            </div>

            <div class="form-group">
              <input
                v-model="attribute.value"
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                placeholder="Value"
              >
            </div>
          </div>

          <div v-if="attributes.length > 0" class="my-2">
            <span v-for="(attri, index) in attributes" :id="index" :key="index"
                  class="my-4 mr-2"
            >
              <span class="text-white text-left">
                  {{ attri.name }}: {{ attri.value }},
              </span>name

              <button
                @click="removeAttribute(index)"
                type="button"
                class="p-2 px-3 bg-red-500 hover:bg-red-800 text-white font-bold rounded text-right">
                <i class="cursor-pointer fas fa-trash text-sm text-white">
                </i>
              </button>
            </span>
          </div>

          <div class="mx-auto block my-4 w-full">
            <button
              type="button"
              class="w-1/4 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              @click="addAttribute()">
              Add Attribute
            </button>
          </div>

          <div class="form-group mb-6">
            <input
              v-model="variant_price"
              min="1"
              type="number"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
              placeholder="Price">
          </div>


          <div class="mx-auto block my-4 flex flex-row justify-between">
            <button
              type="button"
              class="w-1/4 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              @click="addVariant()">
              Add Variant
            </button>

            <button
              type="button"
              @click="updateForm"
              class="bg-emerald-500 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded">
              Update Product
            </button>
          </div>

          <div v-if="form.variants.length > 0 ">
            <div v-for="(v, index) in form.variants" :id="index" :key="index"
                 class="flex flex-row justify-between my-4">
                <span class="text-white text-left" v-for="a in v.attributes">
                  {{ a.name }}: {{ a.value }}
                </span>
              <span class="text-white text-left">
                  Price: $ {{ v.price }}
                </span>


              <button v-if="v" type="button" @click="removeVariant(index)"
                      class="p-2 px-4 bg-red-500 hover:bg-red-800 text-white font-bold rounded text-right">
                <i class="cursor-pointer fas fa-trash text-sm text-white">
                </i>
              </button>
            </div>

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
      products: [
        { id: '1', image: bootstrap, category: 'Shoes', name: 'Red Strip Jogger' , brand: 'Adidas', price: '100' },
        { id: '2', image: react, category: 'Shoes', name: 'Track Shoes' , brand: 'Nike', price: '65' },
        { id: '3', image: angular, category: 'Jacket', name: 'Leather Jacket' , brand: 'Puma', price: '150' },
        { id: '4', image: sketch, category: 'Shirt', name: 'T-Shirt' , brand: 'Engine', price: '32' },
        { id: '5', image: vue, category: 'Paint', name: 'Faint Jeans' , brand: 'Armani', price: '100' },
        { id: '6', image: vue, category: 'Clothes', name: 'Cloths' , brand: 'Khadim', price: '123' },
        { id: '7', image: vue, category: 'Shoes', name: 'Leather Shoes' , brand: 'Outfitter', price: '98' },
        { id: '8', image: vue, category: 'Accessories', name: 'Ht90 Leaser Camera' , brand: 'Cannon', price: '430' },
        { id: '9', image: vue, category: 'Accessories', name: 'Elite Book pro' , brand: 'Hp', price: '520' },
        { id: '10', image: vue, category: 'Accessories', name: 'D230 -45' , brand: 'Dell', price: '360' },
      ],

      form: {
        category: "",
        name: "",
        image: "",
        brand: "",
        price: "",
        variants: []
      },
      attributes: [],
      attribute: {
        name: "",
        value: ""
      },
      variant_price: ""
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
      console.log(index)
      let product = this.products[index];
      console.log(product)
      this.form.category = product.category;
      this.form.name = product.name;
      this.form.brand = product.brand;
      this.form.price = product.price;
      this.attributes = [{ name: "color", value: "red"},{ name: "size", value: "xl"}];
      this.form.variants = [{attributes: this.attributes, price: '100'}];
    },
    addAttribute() {
      this.attributes.push({ ...this.attribute });
      this.attribute.name = "";
      this.attribute.value = "";
      console.log(this.attributes);
    },
    removeAttribute(index) {
      this.attributes.splice(index, 1);
    },
    addVariant() {
      let _variant = {
        attributes: this.attributes,
        price: this.variant_price
      };

      this.form.variants.push({ ..._variant });
      console.log(this.form);
      console.log(this.form.variants);
      this.variant_price = '';
      this.attribute = [];
    },
    removeVariant(index) {
      this.form.variants.splice(index, 1);
    },
    updateForm() {
      if(this.form.category === '' ) {
        return this.$toast.error("Category is required!");
      }else if(this.form.name === '') {
        return this.$toast.error("Name is required!");
      // }else if(!this.form.image){
      //   return this.$toast.error("Image is required!");
      }else if(this.form.brand === ''){
        return this.$toast.error("Brand is required!");
      }else if(this.form.price === '') {
        return this.$toast.error("Price is required!");
      }
      console.log(this.form);
      console.log('submit');
      this.$toast.success('Product Updates successfully!');
      this.$router.push({ name: 'product-index' });
    }
  }
};
</script>

<style scoped>

</style>