<template>
  <div class="flex flex-wrap mt-4">
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-emerald-900 text-white mt-4"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              class="font-semibold text-lg  text-white"
            >
              Orders
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
              Ref ID
            </th>
            <th
              class="px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
            >
              Customer Name
            </th>
            <th
              class="px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
            >
              Customer Email
            </th>
            <th
              class="px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
            >
              Customer Phone
            </th>
            <th
              class="px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
            >
              Status
            </th>
            <th
              class="px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
            >
              Date
            </th>

            <th
              class="px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
            ></th>
          </tr>
          </thead>
          <tbody>


          <tr v-for="(order, key) in orders" :key="key">
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >
               <span
                 class="ml-3 font-bold text-white"
               >
                ORD#-000{{ order.id }}
              </span>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
            >
              <span
                class="ml-3 font-bold text-white"
              >
                {{ order.customer_name }}
              </span>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
            >
              <span
                class="ml-3 font-bold text-white"
              >
                {{ order.customer_email }}
              </span>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
            >
            <span
              class="ml-3 font-bold text-white"
            >
                {{ order.customer_phone }}
              </span>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
            >
              <span
                class="ml-3 font-bold text-white"
              >
                <i v-if="order.status === 'Completed'" class="fas fa-circle text-green-500 mr-2"></i>
                <i v-else-if="order.status === 'Pending'" class="fas fa-circle text-orange-500 mr-2"></i>
                <i v-else-if="order.status === 'Created'" class="fas fa-circle text-blue-500 mr-2"></i>
                {{ order.status }}
              </span>
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
            >
              <span
                class="ml-3 font-bold text-white"
              >
                {{ order.date }}
              </span>
            </td>

            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
            >
              <order-table-dropdown :key="order.id" />
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>
<script>
import OrderTableDropdown from "@/components/Dropdowns/TableDropdownForOrder.vue";
import bootstrap from "@/assets/img/bootstrap.jpg";
import react from "@/assets/img/react.jpg";
import angular from "@/assets/img/angular.jpg";
import sketch from "@/assets/img/sketch.jpg";
import vue from "@/assets/img/react.jpg";
import { createPopper } from "@popperjs/core";

export default {
  name: "Product Categories",
  components: {
    OrderTableDropdown,
  },
  data() {
    return {
      dropdownPopoverShow: false,
      orders: [
        { id: '1', customer_name: 'Rehman Ahmed Khan', customer_email: 'rehman@test.com', customer_phone: '+923065478451' , status: 'Completed', date: '17 May 2022' },
        { id: '2', customer_name: 'Rashid Khabeer', customer_email: 'rashid@test.com', customer_phone: '+923065478451' , status: 'Pending', date: '13 May 2022' },
        { id: '3', customer_name: 'M. Haroon', customer_email: 'haroon@test.com', customer_phone: '+923065478451' , status: 'Created', date: '16 May 2022' },
        { id: '4', customer_name: 'Usama', customer_email: 'usama@test.com', customer_phone: '+923065478451' , status: 'Completed', date: '11 May 2022' },
        { id: '5', customer_name: 'Zain', customer_email: 'zain@test.com', customer_phone: '+923065478451' , status: 'Completed', date: '09 May 2022' },
        { id: '6', customer_name: 'Nabeel', customer_email: 'nabeel@test.com', customer_phone: '+923065478451' , status: 'Pending', date: '17 May 2022' },
        { id: '7', customer_name: 'Umair', customer_email: 'umair@test.com', customer_phone: '+923065478451' , status: 'Completed', date: '01 May 2022' },
      ],
    }
  },
  methods:{
    toggleDropdown: function(event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start"
        });
      }
    }
  }

};
</script>
