<template>
  <div class="home min-h-screen flex flex-col text-center">
    <based-navbar />
    <based-home />
    <based-brand />
    <based-preview />

    <based-footer />
  </div>
</template>


<script>
import axios from "axios";
import BasedHome from "../components/Decorate/BasedHome.vue";
import BasedBrand from "../components/Decorate/BasedBrand.vue";
import BasedFooter from "../components/Footer/Footer.vue";
import BasedPreview from "../components/Decorate/Preview.vue";
// import ColorBlock from "../components/ColorBlock.vue";
export default {
  data() {
    return {
      productData: [],
      urlProduct: "https://walkincloset.ddns.net/backend/Products/GetProducts",
      urlGetColor: "https://walkincloset.ddns.net/backend/Colors/GetColors",
      allColors: [],
    };
  },
  components: {
    BasedHome,
    BasedBrand,
    BasedFooter,
    BasedPreview,
    // ColorBlock,
  },
  async created() {
    await this.fetchProduct();
    await this.fetchColors();
  },
  methods: {
    async fetchProduct() {
      await axios
        .get(this.urlProduct, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        })
        .then((res) => {
          this.productData = res.data;
          console.log(this.productData);
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async fetchColor() {
      await axios
        .get(this.urlGetColor, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        })
        .then((res) => {
          this.allColors = res.data;
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    emitShow(product) {
      this.$router.push({ name: "Modal", params: { id: product } });
    },
  },
};
</script>
<style scoped>
@font-face {
  font-family: "Barlow";
  src: url("../fonts/Barlow-ExtraLight.ttf");
}
.Barlow {
  font-family: Barlow;
}
.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}

.hover\:grow:hover {
  transform: scale(1.02);
}
</style>