<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full xl:w-full mb-4 xl:mb-0 px-4">
      <div class="relative flex flex-row justify-end min-w-0 break-words w-full bg-emerald-600">
        <router-link
          :to="{ name: 'product-create'}"
          class="bg-emerald-500 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded">
          Add New Product
        </router-link>
      </div>
    </div>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-emerald-900 text-white mt-4"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              class="font-semibold text-lg  text-white"
            >
              Products
            </h3>
          </div>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">

        <!-- Projects table -->
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
          <tr>
            <th
              class="px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
            >
              ID
            </th>
            <th
              class="px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
            >
              Image
            </th>
            <th
              class="px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
            >
              Category
            </th>
            <th
              class="px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
            >
              Name
            </th>
            <th
              class="px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
            >
              Brand
            </th>
            <th
              class="px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
            >
              Price
            </th>
            <th
              class="px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
            ></th>
          </tr>
          </thead>
          <tbody>


          <tr v-for="(product, key) in products" :key="key">
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
            >
              <span
                class="ml-3 font-bold text-white"
              >
                {{ product.id }}
              </span>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >
              <img
                :src="product.image"
                class="h-12 w-12 bg-white rounded-full border"
                :alt="product.name"
              />
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
            >
              <span
                class="ml-3 font-bold text-white"
              >
                {{ product.category }}
              </span>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
            >
              <span
                class="ml-3 font-bold text-white"
              >
                {{ product.name }}
              </span>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
            >
            <span
              class="ml-3 font-bold text-white"
            >
                {{ product.brand }}
              </span>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
            >
              <span class="mr-2">$ {{ product.price }}</span>
            </td>

            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
              <table-dropdown :key="product.id" :itemId="product.id" edit_route_name="product-edit" />
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>
<script>
import TableDropdown from "@/components/Dropdowns/TableDropdown.vue";
import bootstrap from "@/assets/img/bootstrap.jpg";
import react from "@/assets/img/react.jpg";
import angular from "@/assets/img/angular.jpg";
import sketch from "@/assets/img/sketch.jpg";
import vue from "@/assets/img/vue.jpg";
// import { EventBus } from "@/main";
export default {
  name: "Product Categories",
  components: {
    TableDropdown,
  },
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
    }
  },
  mounted() {
    // EventBus.$on('ProductCreate', (_data)  => {
    //   alert(_data);
    // });
  }

};
</script>
