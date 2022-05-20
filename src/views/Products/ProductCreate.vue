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

          <div v-for="(attri, index) in attributes" :id="index" :key="index" class="grid grid-cols-2 gap-4 my-4">
            <div class="form-group">
              <input
                v-model="attri.name"
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-emerald-700 bg-white bg-clip-padding border border-solid border-emerald-300 rounded transition ease-in-out m-0 focus:text-emerald-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                placeholder="Name">
            </div>

            <div class="form-group">
              <input
                v-model="attri.value"
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
              <span v-if="attri.name && attri.value" class="text-white text-left mr-2">
                  {{ attri.name }}: {{ attri.value }}
              </span>

              <button
                v-if="attri.name && attri.value"
                @click="removeAttribute(index)"
                type="button"
                class="p-2 px-3 bg-red-500 hover:bg-red-800 text-white font-bold rounded text-right">
                <i class="cursor-pointer fas fa-trash text-sm text-white">
                </i>
              </button>
            </span>
          </div>

          <div class="mx-auto block my-4 w-full flex flex-row justify-between">
            <button
              type="button"
              class="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              @click="checkVariants()">
              Available Variants
            </button>

            <button
              type="button"
              class="w-1/4 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
              @click="addAttribute()">
              Add Attribute
            </button>
          </div>

          <div class="mx-auto block my-2">
            <p class="text-yellow-400">Note: Please make sure that you have check variants & update price accordingly,
              before adding the product!</p>
          </div>

          <div class="mx-auto block my-2">
            <button
              type="button"
              @click="submitForm"
              class="bg-emerald-500 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded">
              Add New Product
            </button>
          </div>

          <table class="items-center w-full bg-transparent border-collapse" v-if="available_variants.length > 0">
            <thead>
            <tr>
              <th
                class="text-white px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
                v-for="(item, i) in Object.keys(available_variants[0]).reverse()" :key="i">{{ item }}
              </th>
              <th
                class="text-white px-6 align-middle border  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left border-blueGray-100 bg-emerald-800  border-emerald-700"
              >
              </th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="(variant, key) in available_variants" :key="key">
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-white"
                v-for="(item, i) in Object.keys(variant).reverse()" :key="i">
                <div v-if="item === 'price'">
                  <input v-model="variant[item]" type="text" :id="variant[item]" class="text-blueGray-700" />
                </div>
                <span v-else>
                  {{ variant[item] }}
                </span>
              </td>
              <td>
                <button
                  @click="removeVariant(key)"
                  type="button"
                  class="p-2 px-3 bg-red-500 hover:bg-red-800 text-white font-bold rounded text-right">
                  <i class="cursor-pointer fas fa-trash text-sm text-white">
                  </i>
                </button>
              </td>

            </tr>
            </tbody>
          </table>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { EventBus } from "@/main";

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
      attributes: [],
      available_variants: [],
    };
  },

  methods: {
    selectImage() {
      this.form.image = this.$refs.file.files.item(0);
    },

    // checking the available variants
    checkVariants() {
      let _v = [];
      let _old = [];
      _old = this.available_variants;

      if (_old.length === 0) {
        if (this.attributes.length > 0) {
          let attribute1 = this.attributes[0].value.split(",");
          attribute1.forEach((item) => {
            if (this.attributes.length > 1) {
              let attribute2 = this.attributes[1].value.split(",");
              attribute2.forEach((item2) => {
                if (this.attributes.length > 2) {
                  let attribute3 = this.attributes[2].value.split(",");
                  attribute3.forEach((item3) => {
                    const obj = {
                      price: 0
                    };
                    obj[this.attributes[0].name] = item;
                    obj[this.attributes[1].name] = item2;
                    obj[this.attributes[2].name] = item3;
                    _v.push(obj);
                  });
                } else {
                  const obj = {
                    price: 0
                  };
                  obj[this.attributes[0].name] = item;
                  obj[this.attributes[1].name] = item2;
                  _v.push(obj);
                }
              });
            } else {
              const obj = {
                price: 0
              };

              obj[this.attributes[0].name] = item;
              _v.push(obj);
            }
          });
        }

        this.available_variants = _v;

      } else {

        let _new = [];

        // getting new attribute
        if (this.attributes.length > 0) {
          let attribute1 = this.attributes[0].value.split(",");
          attribute1.forEach((item) => {
            if (this.attributes.length > 1) {
              let attribute2 = this.attributes[1].value.split(",");
              attribute2.forEach((item2) => {
                if (this.attributes.length > 2) {
                  let attribute3 = this.attributes[2].value.split(",");
                  attribute3.forEach((item3) => {
                    const obj = {
                      price: 0
                    };
                    obj[this.attributes[0].name] = item;
                    obj[this.attributes[1].name] = item2;
                    obj[this.attributes[2].name] = item3;
                    _new.push(obj);
                  });
                } else {
                  const obj = {
                    price: 0
                  };
                  obj[this.attributes[0].name] = item;
                  obj[this.attributes[1].name] = item2;
                  _new.push(obj);
                }
              });
            } else {
              const obj = {
                price: 0
              };
              console.log(item);
              obj[this.attributes[0].name] = item;
              _new.push(obj);
            }
          });
        }

        console.log("===== new");
        console.log(_new);

        console.log("===== old");
        console.log(_old);

        // compare old & new
        let common_elements = _old.filter(v => {
          const obj = this.compareOldToNew(v, _new);
          if (obj) {
            _new.splice(obj.index, 1);
            return obj.object;
          }
        });

        common_elements.forEach((item) => {
          const index = _old.indexOf(item);
          if (index !== -1)
            _old.splice(index, 1);
        });

        console.log(_new, "new after splice");
        console.log(_old, "old after splice");
        console.log(common_elements, "common");

        let new_elements = [..._new];
        console.log(new_elements, "new elements");

        const endResult = common_elements.concat(new_elements);

        console.log("========");
        console.log(endResult, "final result");
        console.log("========");

        this.available_variants = endResult;

      }

      this.addVariantIntoForm(this.available_variants)

    },

    // compare the two object old & new
    compareOldToNew(oldObj, newArray) {
      console.log("==== Compare");
      console.log(oldObj);
      const old = { ...oldObj };
      delete old.price;
      for (let i = 0; i < newArray.length; i++) {
        const newObj = { ...newArray[i] };
        delete newObj.price;
        if (JSON.stringify(old) === JSON.stringify(newObj)) {
          return {
            object: oldObj,
            index: i
          };
        }
      }
    },

    // get only the new elements
    getNewElement(oldObj, newArray) {
      console.log("==================");
      console.log(oldObj);
      const old = { ...oldObj };
      delete old.price;
      for (let i = 0; i < newArray.length; i++) {
        console.log(newArray[i]);
        const newObj = { ...newArray[i] };
        delete newObj.price;
        if (JSON.stringify(old) !== JSON.stringify(newObj)) {
          return newArray[i];
        }
      }
    },

    // add attribute
    addAttribute() {
      if (this.attributes.length >= 3)
        return this.$toast.error("You can't add more than 3 attributes!");

      this.attributes.push({ ...this.attribute });
    },

    // remove attribute
    removeAttribute(index) {
      this.attributes.splice(index, 1);
    },

    // adding available variants into final form
    addVariantIntoForm(_variant) {
      if (this.attributes.length === 0 && this.available_variants.length === 0) {
        return this.$toast.error("Please add at-least one attribute & at-least one of its variant");
      }

      this.form.variants = _variant ;
      console.log(this.form);
      console.log(this.form.variants);
    },

    // removing elements from array
    removeVariant(index) {
      this.available_variants.splice(index, 1);
    },

    // form submission
    submitForm() {
      if (this.form.category === "") {
        return this.$toast.error("Category is required!");
      } else if (this.form.name === "") {
        return this.$toast.error("Name is required!");
      } else if (!this.form.image) {
        return this.$toast.error("Image is required!");
      } else if (this.form.brand === "") {
        return this.$toast.error("Brand is required!");
      } else if (this.form.price === "") {
        return this.$toast.error("Price is required!");
      } else if (this.form.variants.length === 0) {
        return this.$toast.error("At least 1 attribute & 1 variant is required");
      }

      console.log(this.form);
      console.log("submit");
      this.$toast.success("Product Created successfully!");
      this.$router.push({ name: "product-index" });
    }
  },

  mounted() {
    if (this.attributes.length === 0) {
      this.attributes.push({ name: "", value: "" });
    }
  }
}
;
</script>

<style scoped>

</style>