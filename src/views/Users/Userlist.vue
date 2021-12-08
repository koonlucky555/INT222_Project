<template>
  <based-navbar />
  <div
    class="pt-24 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8"
  >
   
    <div
      class="
      overflow-x:auto;
        align-middle
        inline-block
        min-w-full
        shadow
        overflow-hidden
        bg-white
        shadow-dashboard
        px-8
        pt-3
        rounded-bl-lg rounded-br-lg
      "
    >
      <table class="min-w-full">
        <thead>
          <tr>
            <th
              class="
                px-6
                py-3
                border-b-2 border-gray-300
                leading-4
                text-blue-500
                tracking-wider
              "
            >
              ID
            </th>
            <th
              class="
                px-6
                py-3
                border-b-2 border-gray-300
                text-sm
                leading-4
                text-blue-500
                tracking-wider
              "
            >
              Fullname
            </th>
            <th
              class="
                px-6
                py-3
                border-b-2 border-gray-300
                text-sm
                leading-4
                text-blue-500
                tracking-wider
              "
            >
              Username
            </th>
            <th
              class="
                px-6
                py-3
                border-b-2 border-gray-300
                text-sm
                leading-4
                text-blue-500
                tracking-wider
              "
            >
              Email
            </th>
            <th
              class="
                px-6
                py-3
                border-b-2 border-gray-300
                text-sm
                leading-4
                text-blue-500
                tracking-wider
              "
            >
              Phone
            </th>
            <th
              class="
                px-6
                py-3
                border-b-2 border-gray-300
                text-sm
                leading-4
                text-blue-500
                tracking-wider
              "
            >
              Role
            </th>
            <th
              class="
                px-6
                py-3
                border-b-2 border-gray-300
                text-sm
                leading-4
                text-blue-500
                tracking-wider
              "
            >
              Action
            </th>

            <th class="px-6 py-3 border-b-2 border-gray-300"></th>
          </tr>
        </thead>

        <!-- Column -->
        <tbody
          class="bg-white "
          v-for="user in allUserData"
          :key="user.id"
          :product="user"
        >
          <tr>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              <div class="flex items-center">
                <div>
                  <div class="text-sm leading-5 text-gray-800">
                    {{ user.userId }}
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
              <div class="text-sm leading-5 text-blue-900">
                {{ user.userFirstName + " " + user.userLastName }}
              </div>
            </td>
            <td
              class="
                px-6
                py-4
                whitespace-no-wrap
                border-b
                text-blue-900
                border-gray-500
                text-sm
                leading-5
              "
            >
              {{ user.userName }}
            </td>
            <td
              class="
                px-6
                py-4
                whitespace-no-wrap
                border-b
                text-blue-900
                border-gray-500
                text-sm
                leading-5
              "
            >
              {{ user.userEmail }}
            </td>
            <td
              class="
                px-6
                py-4
                whitespace-no-wrap
                border-b
                text-blue-900
                border-gray-500
                text-sm
                leading-5
              "
            >
              {{ user.userTel }}
            </td>
            <td
              class="
                px-6
                py-4
                whitespace-no-wrap
                border-b
                text-blue-900
                border-gray-500
                text-sm
                leading-5
              "
            >
              {{ user.roleId.roleName }}
            </td>

            <td
              class="
                px-6
                py-4
                whitespace-no-wrap
                text-right
                border-b border-gray-500
                text-sm
                leading-5
              "
            >
              <div class="flex item-center justify-center">
                <div
                  class="
                    w-4
                    mr-2
                    transform
                    hover:text-purple-500 hover:scale-110
                  "
                >
                  <svg
                    @click.prevent="editUserRole(user.userId)"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
                <div
                  class="
                    w-4
                    mr-2
                    transform
                    hover:text-purple-500 hover:scale-110
                  "
                >
                  <svg
                    @click.prevent="deleteUser(user.userId)"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  </div>
</template>
<style>
.table {
  border-spacing: 0 15px;
}

i {
  font-size: 1rem !important;
}

.table tr {
  border-radius: 20px;
}

tr td:nth-child(n + 5),
tr th:nth-child(n + 5) {
  border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
  border-radius: 0.625rem 0 0 0.625rem;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      allUserData: [],
      showModal: false,
    };
  },
  async created() {
    await this.fetchUsers();
    console.log(this.allUserData);
  },
  methods: {
    async fetchUsers() {
      await axios
        .get("https://walkincloset.ddns.net/backend/Users/GetUsers", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        })
        .then((res) => {
          this.allUserData = res.data;
          console.log(this.allUserData);
          return res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    deleteUser(userid) {
      if (confirm("Do you want to delete this user?") === false) {
        return;
      }
      axios
        .delete(`https://walkincloset.ddns.net/backend/Users/Delete/${userid}` ,{
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        })
        .then((res) => {
          console.log(res);
          this.$router.push("/userlist");
        });
    },
    editUserRole(userid) {
      if (confirm("Do you want to change role this user to Admin ?") === false) {
        return;
      }
      axios
        .post(`https://walkincloset.ddns.net/backend/Users/EditRole/${userid}` ,{
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")} `,
          },
        })
        .then((res) => {
          console.log(res);
          this.$forceUpdate("/userlist");
        });
    },
  },
};
</script>