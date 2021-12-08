<template>
  <based-navbar />
  <div class="p-8">
    <div
      class="
        pt-10
        md:mt-4
        xl:mt-4
        mb-8
        md:mb-10
        xl:mb-14
        md:px-4
        flex
        justify-between
        uppercase
      "
    >
      <h2 class="text-2xl md:text-3xl Barlow font-bold text-center">
        Edit New Product
      </h2>
    </div>
    <form @submit.prevent="submitCheckValidate">
      <div class="flex flex-col md:flex-row">
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="
              font-bold
              h-6
              mt-3
              text-gray-600 text-xs
              Barlow-Medium
              tracking-wider
              leading-8
              uppercase
            "
          >
            Product Name
          </div>
          <div
            class="
              bg-white
              my-2
              p-1
              flex
              border border-gray-200
              rounded
              svelte-1l8159u
            "
          >
            <input
              @blur="validatingName"
              required
              v-model="getProduct.productName"
              placeholder="Product Name"
              class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
          <p v-if="invalidName" class="text-red-500 text-sm">
            Product Name can't be blank
          </p>
        </div>
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="
              font-bold
              h-6
              mt-3
              text-gray-600 text-xs
              Barlow-Medium
              tracking-wider
              leading-8
              uppercase
            "
          >
            Brand
          </div>
          <select
            @blur="validatingBrandName"
            required
            v-model="getProduct.brandId"
            class="
              bg-white
              my-2
              p-1
              flex
              border
              w-full
              border-gray-200
              rounded
              svelte-1l8159u
            "
          >
            <option disabled value="">Select Your Product Brand</option>
            <option
              v-for="brand in getBrandArray"
              :value="brand"
              :key="brand"
              :selected="brand === brandId"
            >
              {{ brand.brandName }}
            </option>
          </select>
          <p v-if="invalidBrandName" class="text-red-500 text-sm">
            Description can't be blank
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="
              font-bold
              h-6
              mt-3
              text-gray-600 text-xs
              Barlow-Medium
              tracking-wider
              leading-8
              uppercase
            "
          >
            Price
          </div>
          <div
            class="
              bg-white
              my-2
              p-1
              flex
              border border-gray-200
              rounded
              svelte-1l8159u
            "
          >
            <input
              type="number"
              min="0"
              @blur="validatingPrice"
              required
              v-model="getProduct.productPrice"
              placeholder="Price"
              class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
          <p v-if="invalidPrice" class="text-red-500 text-sm">
            Product Price can't be blank
          </p>
        </div>
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="
              font-bold
              h-6
              mt-3
              text-gray-600 text-xs
              Barlow-Medium
              tracking-wider
              leading-8
              uppercase
            "
          >
            Product Type
          </div>
          <select
            @blur="validatingType"
            required
            v-model="getProduct.productType"
            class="
              bg-white
              my-2
              p-1
              w-full
              flex
              border border-gray-200
              rounded
              svelte-1l8159u
            "
          >
            <option disabled value="">Select Your Product Type</option>
            <option>T-Shirt</option>
            <option>Shirt</option>
            <option>Sweatshirt</option>
          </select>
          <p v-if="invalidType" class="text-red-500 text-sm">
            Product Type can't be blank
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="
              font-bold
              h-6
              mt-3
              text-gray-600 text-xs
              Barlow-Medium
              tracking-wider
              leading-8
              uppercase
            "
          >
            Gender
          </div>
          <select
            @blur="validatingGender"
            required
            v-model="getProduct.productGender"
            class="
              bg-white
              my-2
              p-1
              w-full
              flex
              border border-gray-200
              rounded
              svelte-1l8159u
            "
          >
            <option disabled value="">Select Your Product Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <p v-if="invalidGender" class="text-red-500 text-sm">
            Product Gender can't be blank
          </p>
        </div>
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="
              font-bold
              h-6
              mt-3
              text-gray-600 text-xs
              Barlow-Medium
              tracking-wider
              leading-8
              uppercase
            "
          >
            Release Date
          </div>
          <div
            class="
              bg-white
              my-2
              p-1
              flex
              border border-gray-200
              rounded
              svelte-1l8159u
            "
          >
            <input
              @blur="validatingDate"
              required
              v-model="getProduct.date"
              type="date"
              class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
          <p v-if="invalidDate" class="text-red-500 text-sm">
            Release Date can't be blank
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="
              font-bold
              h-6
              mt-3
              text-gray-600 text-xs
              Barlow-Medium
              tracking-wider
              leading-8
              uppercase
            "
          >
            Color
          </div>
          <div v-for="color in getColorArray" :key="color.colorId">
            <input
              type="checkbox"
              id="color"
              :value="color"
              v-model="getProduct.productColors"
            />
            <label for="color">{{ color.colorId }}</label>
          </div>
        </div>
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="
              font-bold
              h-6
              mt-3
              text-gray-600 text-xs
              Barlow-Medium
              tracking-wider
              leading-8
              uppercase
            "
          >
            Description
          </div>
          <div
            class="
              bg-white
              my-2
              p-1
              flex
              border border-gray-200
              rounded
              svelte-1l8159u
            "
          >
            <textarea
              @blur="validatingDescription"
              v-model="getProduct.productDescription"
              required
              placeholder="Product Description"
              class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
          <p v-if="invalidDescription" class="text-red-500 text-sm">
            Product Description can't be blank
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="
              font-bold
              h-6
              mt-3
              text-gray-600 text-xs
              Barlow-Medium
              tracking-wider
              leading-8
              uppercase
            "
          >
            Image
          </div>
          <input
            type="file"
            ref="file"
            v-on:change="handlePic"
            class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
          <div class="pt-8">
            <button
              class="
                appearance-none
                bg-gray-200
                text-gray-900
                px-2
                py-1
                shadow-sm
                border border-gray-400
                rounded-md
                mr-3
              "
              type="submit"
            >
              save
            </button>
          </div>
        </div>
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="
              font-bold
              h-6
              mt-3
              text-gray-600 text-xs
              Barlow-Medium
              tracking-wider
              leading-8
              uppercase
            "
          >
            Preview Image
          </div>
          <div class="bg-white my-2 p-1 flex svelte-1l8159u pl-60">
            <img :src="getImage" class="h-60 w-60" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
@font-face {
  font-family: "Barlow";
  src: url("/fonts/Barlow-ExtraLight.ttf");
}
.Barlow {
  font-family: Barlow;
}
@font-face {
  font-family: "Barlow-Medium";
  src: url("/fonts/Barlow-Medium.ttf");
}
.Barlow-Medium {
  font-family: Barlow-Medium;
}
</style>
<script>
import axios from "axios";

export default {
  name: "Edit",
  props: ["id"],
  data() {
    return {
      file: "",
      preImages: null,
      readyToConfirm: false,
      isLoadingProducts: true,
      getProduct: {
        productName: "",
        productType: "",
        productDescription: "",
        productPrice: null,
        productGender: "",
        date: [],
        brandId: {
          brandId: null,
          brandName: "",
        },
        productColors: [],
      },
      getBrandArray: [],
      getColorArray: [],
      errors: null,
      urlEditProduct: `https://walkincloset.ddns.net/backend/Products/Edit/${this.id}`,
      urlDelete: `https://walkincloset.ddns.net/backend/Products/Delete/${this.id}`,
      getImage: `https://walkincloset.ddns.net/backend/Images/Get/${this.id}.jpg`,
      urlEditImage: `https://walkincloset.ddns.net/backend/Images/edit/${this.id}`,
      urlGetProduct: `https://walkincloset.ddns.net/backend/Products/GetProducts/${this.id}`,
      urlGetColor: "https://walkincloset.ddns.net/backend/Colors/GetColors",
      urlGetBrand: "https://walkincloset.ddns.net/backend/Brands/GetBrands",
      invalidName: false,
      invalidType: false,
      invalidDescription: false,
      invalidPrice: false,
      invalidGender: false,
      invalidDate: false,
      invalidBrandName: false,
    };
  },
  async created() {
    await this.fetchColors();
    await this.fetchBrands();
    await this.fetchProducts();
  },
  methods: {
    handlePic() {
      this.file = this.$refs.file.files[0];
      if (this.file) {
        this.getImage = URL.createObjectURL(this.file);
        return;
      } else {
        this.getImage = "";
        return;
      }
    },
    editPic() {
      var formdata = new FormData();
      formdata.append("File", this.file);
      axios
        .put(
          this.urlEditImage,
          formdata,
          {
            "Content-Type": "multipart/form-data",
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")} `,
            },
          }
        )
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editProduct() {
      axios
        .put(this.urlEditProduct, this.getProduct, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        })
        .then((response) => {
          return response.data;
        })
        .then(() => {
          this.editPic();
        })
        .then(() => {
          window.location.href = "/product";
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(this.getProduct);
    },
    
    async fetchColors() {
      await axios
        .get(this.urlGetColor, { 
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        })
        .then((res) => {
          this.getColorArray = res.data;
          console.log(this.user);
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async fetchBrands() {
      await axios
        .get(this.urlGetBrand, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        })
        .then((res) => {
          this.getBrandArray = res.data;
          console.log(this.user);
          return res.data;
        })
        .catch((err) => {
          console.error(err); 
        });
    },

    async fetchProducts() {
      await axios
        .get(this.urlGetProduct, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        })
        .then((res) => {
          this.getProduct = res.data;
          console.log(this.user);
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    validatingName() {
      this.invalidName = this.getProduct.productName === "" ? true : false;
    },
    validatingType() {
      this.invalidType = this.getProduct.productType === "" ? true : false;
    },
    validatingDescription() {
      this.invalidDescription =
        this.getProduct.productDescription === "" ? true : false;
    },
    validatingPrice() {
      this.invalidPrice = this.getProduct.productPrice === null ? true : false;
    },
    validatingGender() {
      this.invalidGender = this.getProduct.productGender === "" ? true : false;
    },
    validatingDate() {
      this.invalidDate = this.getProduct.date === "" ? true : false;
    },
    validatingBrandName() {
      this.invalidBrandName =
        this.getProduct.brandId.brandName === "" ? true : false;
    },
    validatingColor() {
      this.invalidColor = this.getProduct.productColors === "" ? true : false;
    },
    submitCheckValidate() {
      this.invalidName = this.getProduct.productName === "" ? true : false;
      this.invalidType = this.getProduct.productType === "" ? true : false;
      this.invalidDescription =
        this.getProduct.productDescription === "" ? true : false;
      this.invalidPrice = this.getProduct.productPrice === null ? true : false;
      this.invalidGender = this.getProduct.productGender === "" ? true : false;
      this.invalidDate = this.getProduct.date === "" ? true : false;
      this.invalidBrandName =
        this.getProduct.brandId.brandName === "" ? true : false;
      this.invalidColor = this.getProduct.productColors === "" ? true : false;
      if (
        this.invalidName ||
        this.invalidType ||
        this.invalidDescription ||
        this.invalidPrice ||
        this.invalidGender ||
        this.invalidDate ||
        this.invalidBrandName ||
        this.invalidColor
      ) {
        console.log("Error");
        window.alert("cannot edit product");
      } else {
        this.editProduct();
      }
    },
  },
};
</script>
