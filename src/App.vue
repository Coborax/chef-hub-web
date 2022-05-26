<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Chef Hub</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        v-if="loggedIn"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/profile" class="nav-link">My Profile</RouterLink>
          </li>
        </ul>
        <form class="d-flex" role="search" v-if="loggedIn">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchTerm"
          />
          <button
            class="btn btn-outline-success"
            @click="search"
            v-if="loggedIn"
          >
            Search
          </button>
        </form>
        <RouterLink
          to="/upload"
          class="btn btn-outline-primary ms-3"
          v-if="loggedIn"
          >Upload</RouterLink
        >
        <button
          class="btn btn-danger"
          @click="logout"
          style="margin-left: 15px"
          v-if="loggedIn"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>

  <div class="container mt-5">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
import { userStore } from "@/stores/UserStore";

const searchTerm = ref<string>();
const store = userStore();
let loggedIn = ref(store.isLoggedIn());

router.beforeEach(async (to) => {
  if (
    !store.isLoggedIn() &&
    // ❗️ Avoid an infinite redirect
    to.name !== "login" &&
    to.name !== "register"
  ) {
    // redirect the user to the login page
    return { name: "login" };
  }
  loggedIn.value = store.isLoggedIn();
});

function search() {
  router.push({
    path: "/search/" + searchTerm.value,
  });
}

function logout() {
  store.logout();

  router.push({
    name: "login",
  });
}
</script>
