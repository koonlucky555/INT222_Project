<template>
  <based-navbar />
  <div class="py-28 px-10 min-h-screen">
    <!--   tip; mx-auto -- jagab ilusti keskele  -->
    <div class="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
      <h2
        class="text-2xl md:text-3xl Barlow font-bold text-center Barlow-Medium"
      >
        Edit User
      </h2>
      <form @submit.prevent="editUser()">
        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label
            for="number"
            class="
              inline-block
              w-20
              mr-6
              text-right
              font-bold
              text-gray-600
              Barlow-Medium
            "
            >Firstname</label
          >
          <input
            v-model="user.userFirstName"
            type="text"
            id="Firstname"
            name="Firstname"
            placeholder="Firstname"
            class="
              flex-1
              py-2
              border-b-2 border-gray-400
              focus:border-green-400
              text-gray-600
              placeholder-gray-400
              outline-none
            "
          />
        </div>

        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label
            for="number"
            class="
              inline-block
              w-20
              mr-6
              text-right
              font-bold
              text-gray-600
              Barlow-Medium
            "
            >Lastname</label
          >
          <input
            v-model="user.userLastName"
            type="text"
            id="Lastname"
            name="Lastname"
            placeholder="Lastname"
            class="
              flex-1
              py-2
              border-b-2 border-gray-400
              focus:border-green-400
              text-gray-600
              placeholder-gray-400
              outline-none
            "
          />
        </div>
        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label
            for="number"
            class="
              inline-block
              w-20
              mr-6
              text-right
              font-bold
              text-gray-600
              Barlow-Medium
            "
            >Username</label
          >
          <input
            v-model="user.userName"
            type="text"
            id="Username"
            name="Username"
            placeholder="Username"
            class="
              flex-1
              py-2
              border-b-2 border-gray-400
              focus:border-green-400
              text-gray-600
              placeholder-gray-400
              outline-none
            "
          />
        </div>

        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label
            for="number"
            class="
              inline-block
              w-20
              mr-6
              text-right
              font-bold
              text-gray-600
              Barlow-Medium
            "
            >Password</label
          >
          <input
            v-model="user.userPassword"
            type="password"
            id="password"
            name="password"
            placeholder="password"
            class="
              flex-1
              py-2
              border-b-2 border-gray-400
              focus:border-green-400
              text-gray-600
              placeholder-gray-400
              outline-none
            "
          />
        </div>

        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label
            for="number"
            class="
              inline-block
              w-20
              mr-6
              text-right
              font-bold
              text-gray-600
              Barlow-Medium
            "
            >Email</label
          >
          <input
            v-model="user.userEmail"
            type="Email"
            id="Email"
            name="Email"
            placeholder="Email"
            class="
              flex-1
              py-2
              border-b-2 border-gray-400
              focus:border-green-400
              text-gray-600
              placeholder-gray-400
              outline-none
            "
          />
        </div>

        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label
            for="number"
            class="
              inline-block
              w-20
              mr-6
              text-right
              font-bold
              text-gray-600
              Barlow-Medium
            "
            >Phone</label
          >
          <input
            v-model="user.userTel"
            type="text"
            id="Phone"
            name="Phone"
            placeholder="Phone"
            class="
              flex-1
              py-2
              border-b-2 border-gray-400
              focus:border-green-400
              text-gray-600
              placeholder-gray-400
              outline-none
            "
          />
        </div>

        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label
            for="number"
            class="
              inline-block
              w-20
              mr-6
              text-right
              font-bold
              text-gray-600
              Barlow-Medium
            "
            >Address</label
          >
          <input
            v-model="user.userAddress"
            type="text"
            id="Address"
            name="Address"
            placeholder="Address"
            class="
              flex-1
              py-2
              border-b-2 border-gray-400
              focus:border-green-400
              text-gray-600
              placeholder-gray-400
              outline-none
            "
          />
        </div>

        <div class="text-right">
          <button class="py-3 px-8 bg-green-400 text-white Barlow-Medium">
            Submit
          </button>
        </div>
      </form>
    </div>
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
  data() {
    return {
      user: {
        userId: "",
        userFirstname: "",
        userLastname: "",
        userEmail: "",
        userName: "",
        userTel: "",
        userAddress: "",
        roleId: {
          roleId: "",
          roleName: "",
        },
      },
      urlEditUser: `https://walkincloset.ddns.net/backend/Users/Edit/${localStorage.getItem(
        "userid"
      )}`,
      urlGetUserById: `https://walkincloset.ddns.net/backend/Users/GetUsers/${localStorage.getItem(
        "userid"
      )}`,
      getUserId: "",
    };
  },
  created() {
    this.fetchUserById()
    this.getUserByid();
    localStorage.setItem("userid", this.getUserId.userId);
  },
  methods: {
    getUserByid() {
      this.getUserId = JSON.parse(localStorage.getItem("user"));
    },
    fetchUserById() {
      axios.get(this.urlGetUserById, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
      }).then((res) => {
          this.user = res.data;
          console.log(this.user);
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    editUser() {
      axios
        .put(this.urlEditUser, this.user, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        })
        .then((response) => {
          return response.data;
        })
        .then(() => {
          window.location.href = "/home";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

