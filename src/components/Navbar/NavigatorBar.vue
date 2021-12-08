<template>
  <nav class="bg-gray-100 fixed inset-x-0 z-10">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!-- logo -->
          <div>
            <a
              href="/home"
              class="
                flex
                items-center
                py-5
                px-2
                text-gray-700
                hover:text-gray-900
              "
            >
              <i class="bx bxl-medium-old mr-1 text-xl mb-1 text-blue-400"></i>
              <span class="font-bold">Walk in Closet</span>
            </a>
          </div>
          <!-- primary nav -->
          <div class="hidden md:flex items-center space-x-1">
            <a
              href="/product"
              class="
                py-5
                px-3
                text-gray-700
                hover:text-gray-900 hover:underline
              "
              >Store</a
            >
            <a
              href="/product/Women"
              class="
                py-5
                px-3
                text-gray-700
                hover:text-gray-900 hover:underline
              "
              >Women</a
            >
            <a
              href="/product/Men"
              class="
                py-5
                px-3
                text-gray-700
                hover:text-gray-900 hover:underline
              "
              >Men</a
            >
            <a
              href="/about"
              class="
                py-5
                px-3
                text-gray-700
                hover:text-gray-900 hover:underline
              "
              >About Us</a
            >
          </div>
        </div>
        <!-- secondary nav -->
        <div v-if="!user" class="hidden md:flex items-center space-x-1">
          <a href="/login" class="py-5 px-3">Login</a>
          <a
            href="/register"
            class="
              py-2
              px-3
              bg-indigo-500
              text-white
              hover:bg-yellow-300
              text-sm
              hover:text-yellow-800
              rounded
              transition
              duration-300
            "
            >Sign up</a
          >
        </div>
        <div v-else class="md:flex items-center space-x-1 sm:hidden mobileUser">
          {{ user.userName }}
          <div class="w3-dropdown-hover">
            <button
              @click="toggleDropdown()"
              class="relative z-10 block rounded-md p-2 focus:outline-none"
            >
              <svg
                class="h-5 w-5 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div class="w3-dropdown-content absolute right-0">
              <a
                href="/edituser"
                class="
                  block
                  px-4
                  py-2
                  text-sm
                  capitalize
                  text-gray-700
                  hover:bg-blue-500 hover:text-white
                "
              >
                edit profile
              </a>
               <a
                href="/userlist"
                class="
                  block
                  px-4
                  py-2
                  text-sm
                  capitalize
                  text-gray-700
                  hover:bg-blue-500 hover:text-white
                "
              >
                edit user
              </a>
              <a
                href="/addproduct"
                class="
                  block
                  px-4
                  py-2
                  text-sm
                  capitalize
                  text-gray-700
                  hover:bg-blue-500 hover:text-white
                "
              >
                Add product
              </a>
              <a
                @click="logout()"
                class="
                  block
                  px-4
                  py-2
                  text-sm
                  capitalize
                  text-gray-700
                  hover:bg-blue-500 hover:text-white
                "
              >
                Logout
              </a>
            </div>
          </div>
        </div>

        <!-- mobile button goes here -->
        <div  class="md:hidden xl:hidden flex items-center">
          <button @click="toggleDropdown()" class="mobile-menu-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div v-if="dropdown" class="mobile-menu mobile md:hidden text-bold text-md">
      {{ user.userName }}
      <a href="/product" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Store</a
      >
      <a href="/product/Women" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Women</a
      >
      <a href="/product/Men" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Men</a
      >
      <a href="/about" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >About Us</a
      >
      <a href="/about" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Edit User</a
      >
      <a href="/about" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Edit Profile</a
      >
      <a href="/about" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Add Product</a
      ><br>
       <a @click="logout()" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Logout</a
      >
    </div>
  </nav>
</template>

 <style>
#menu-toggle:checked + #menu {
  display: block;
}
@media screen and (max-width: 640px) {
  .mobile {
    align-self: center;
  }
}
@media screen and (max-width: 640px) {
  .mobileUser {
    visibility: hidden;
  }
}
</style>

  <script>
export default {
  data() {
    return {
      enableNavBar: {
        enableVisitor: true,
      },
      user: {},
      dropdown:false,
    };
  },
  methods: {
    click() {
      document.addEventListener("DOMContentLoaded", function () {
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        btn.addEventListener("click", () => {
          menu.classList.toggle("hidden");
        });
      });
    },
    toggleDropdown(){
      this.dropdown = !this.dropdown;
    }
    ,
    async logout() {
      await localStorage.removeItem("user");
            localStorage.removeItem("token");
            localStorage.removeItem("userid");
       window.location.href = "/";
    },
  },
  
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
  },

  watch: {
    enableRoleNavBar() {
      if (localStorage.getItem.user == null) {
        this.user = null;
      } else {
        this.user = JSON.parse(localStorage.getItem("user"));
      }
    },
  },
};
</script>
