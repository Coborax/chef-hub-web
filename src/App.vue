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
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/profile" class="nav-link">My Profile</RouterLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchTerm"
          />
          <button class="btn btn-outline-success" @click="search">
            Search
          </button>
        </form>
        <RouterLink to="/upload" class="btn btn-outline-primary ms-3"
          >Upload</RouterLink
        >
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

const searchTerm = ref<string>("t");

function search() {
  router.push({
    path: "/search/" + searchTerm.value,
  });
}
</script>
