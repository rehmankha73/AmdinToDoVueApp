<template>
  <div>
    <a
      class="text-blueGray-500 py-1 px-3"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <i class="fas fa-ellipsis-v"></i>
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <router-link
        :to="{ name: edit_route_name, params: { id: itemId } }"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        <i class="fas fa-edit mr-2 text-sm text-emerald-500">
          Edit
        </i>
      </router-link>
        <div
          @click="deleteItem(itemId)"
          class="cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          <i class="cursor-pointer fas fa-trash mr-2 text-sm text-red-500">
            Delete
          </i>
        </div>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";
import TableDropdown from "@/components/Dropdowns/TableDropdown.vue";

export default {
  components: {
    TableDropdown,
  },
  data() {
    return {
      dropdownPopoverShow: false
    };
  },
  props: {
    itemId: {
      type: [Number, String],
      default: ""
    },
    edit_route_name: {
      type: String,
      default: ""
    },
  },
  methods: {
    deleteItem(_itemId) {
      if(!window.confirm('Are you sure, you really want to delete it permanently!')){
        return
      }
      console.log(_itemId);
      this.$toast.success('Item Deleted successfully!');
      this.dropdownPopoverShow = false;
    },
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
