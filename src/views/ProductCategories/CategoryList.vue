<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full xl:w-full mb-4 xl:mb-0 px-4">
      <div class="relative flex flex-row justify-end min-w-0 break-words w-full bg-emerald-600">
       <router-link
         :to="{ name: 'category-create'}"
         class="bg-emerald-500 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded">
         Add New Category
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
              Product Categories
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
              Project Category
            </th>
            <th
              class="px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
            >
              Slug
            </th>
            <th
              class="px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
            >
              Status
            </th>
            <th
              class="px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
            ></th>
          </tr>
          </thead>
          <tbody>


          <tr v-for="(category, key) in product_categories" :key="key">
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
            >
              <span
                class="ml-3 font-bold text-white"
              >
                {{ category.id }}
              </span>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >
              <img
                :src="category.image"
                class="h-12 w-12 bg-white rounded-full border"
                :alt="category.category"
              />
            </td>

            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
            >
              <span
                class="ml-3 font-bold text-white"
              >
                {{ category.category }}
              </span>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
            >
            <span
              class="ml-3 font-bold text-white"
            >
                {{ category.category }}
              </span>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
            >
              <span class="mr-2">{{ category.status }}</span>
            </td>

            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
              <table-dropdown :key="category.id" :itemId="category.id" edit_route_name="category-edit" />
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
import vue from "@/assets/img/react.jpg";

export default {
  name: "Product Categories",
  components: {
    TableDropdown,
  },
  data() {
    return {
      product_categories: [
        { id: '1', image: bootstrap, category: 'Shoes', status: 'Active' },
        { id: '2', image: react, category: 'Glasses', status: 'Active' },
        { id: '3', image: angular, category: 'Jacket', status: 'Active' },
        { id: '4', image: sketch, category: 'Shirt', status: 'Active' },
        { id: '5', image: vue, category: 'Bag', status: 'Active' },
      ],
    }
  }

};
</script>
