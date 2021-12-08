<template>
  <based-navbar/>
  <header>
    <div class="container mx-auto px-6 py-3 pt-24">
      <div class="flex items-center justify-between">
        <div class="hidden w-full text-gray-600 md:flex md:items-center"></div>
        <div class="w-full text-gray-700 md:text-center text-2xl font-semibold">
          STORE | Shirt
        </div>
        <div class="flex items-center justify-end w-full">
          <!-- <button @click="cartOpen = !cartOpen" class="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </button> -->

          <div class="flex">
            <!-- <button @click="isOpen = !isOpen" type="button" class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                            </svg>
                        </button> -->
          </div>
        </div>
      </div>
      <nav
        :class="isOpen ? '' : 'hidden'"
        class="sm:flex sm:justify-center sm:items-center mt-4"
      >
        <div class="flex flex-col sm:flex-row">
          <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/product/HM"
            >H&M</a
          >
          <a
            class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
            href="/product/Uniqlo"
            >Uniqlo</a
          >
          <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/product/Zara"
            >Zara</a
          >
        </div>
      </nav>
      <div class="relative mt-6 max-w-lg mx-auto">
        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

        <input
          v-model="searchShirt"
          class="
            w-full
            border
            rounded-md
            pl-10
            pr-4
            py-2
            focus:border-blue-500 focus:outline-none focus:shadow-outline
          "
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  </header>
  <body
    class="
      bg-white
      text-gray-600
      work-sans
      leading-normal
      text-base
      tracking-normal
    "
  >
    <!-- Product -->
    <section class="bg-white py-8">
      <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="store" class="w-full top-0 px-6">
          <div
            class="
              w-full
              container
              mx-auto
              flex flex-wrap
              items-center
              justify-between
              mt-0
              px-2
              py-3
            "
          ></div>
          <based-second />
        </nav>

        <!-- <div
          class="w-full md:w-2/4 xl:w-1/4 p-16 flex flex-col"
          v-for="product in allProductData"
          :key="product.id"
          :product="product"
        > -->
        <div
          class="w-full md:w-2/4 xl:w-1/4 p-16 flex flex-col"
          v-for="shirt in filteredShirtProduct"
          :key="shirt.id"
          :sweater="shirt"
        >
          <img
            class="hover:grow hover:shadow-lg w-72 h-72 object-cover lg:self-center sm:self-center mobile"
            :src="`https://walkincloset.ddns.net/backend/Images/Get/${shirt.productId}.jpg`"
            @click="emitShow(shirt.productId)"
          />
          <div class="space-y-2">
            <p class="text-gray-900 font-bold text-xl Barlow pt-4 h-16">
              {{ shirt.productName }}
            </p>
            <p class="text-md Barlow font-bold">
              {{ shirt.brandId.brandName }}
            </p>
            <div class="space-x-2">
              <color-block
                width="w-6"
                height="h-6"
                v-for="shirtcolor in shirt.productColors"
                :key="shirtcolor.colorId"
                :codeColor="shirtcolor.codeColor"
                class="border border-black"
              />
            </div>
            <p class="text-gray-900 text-2xl Barlow-Medium">
              {{ shirt.productPrice }} THB
            </p>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>
<style>
.work-sans {
  font-family: "Work Sans", sans-serif;
}
.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}

.hover\:grow:hover {
  transform: scale(1.02);
}

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
@media screen and (max-width: 640px) {
   .mobile {
    align-self: center;
  }
}
</style>


<script>
import axios from "axios";
import ColorBlock from "../../Decorate/ColorBlock.vue";
// import BasedSecond from "../Navbar/SecondNavbar.vue";
export default {
  components: {
    ColorBlock,
    // BasedSecond,
  },
  data() {
    return {
      searchShirt: "",
      urlShirt:"https://walkincloset.ddns.net/backend/Products/GetProducts/Type/Shirt",
      allShirtProduct: [],
    };
  },
  props: ["product"],

  created() {
    this.fetchShirtProduct();
  },
  methods: {
    emitShow(product) {
      this.$router.push({ name: "Modal", params: { id: product } });
    },
    fetchShirtProduct() {
      axios
        .get(this.urlShirt , {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        })
        .then((res) => {
          this.allShirtProduct = res.data;
          console.log(this.allShirtProduct);
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    
  },

  computed: {
    filteredShirtProduct() {
      return this.allShirtProduct.filter((shirt) =>
        shirt.productName.toLowerCase().includes(this.searchShirt.toLowerCase()) ||
        shirt.brandId.brandName.toLowerCase().includes(this.searchShirt.toLowerCase()) ||
         (shirt.productPrice + '').includes(this.searchShirt)
      );
    },
  },
};
</script>
