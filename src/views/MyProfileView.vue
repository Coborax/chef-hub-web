<template>
  <div class="profile">
    <h2>My Profile</h2>
    <hr />

    <div class="row">
      <div class="col-2">
        <img
          :src="store.loggedInUser.photoUrl"
          class="rounded"
          style="max-width: 100%"
        />
      </div>
      <div class="col">
        <h5 class="card-title">{{ store.loggedInUser.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          @{{ store.loggedInUser.username }}
        </h6>
      </div>
    </div>
  </div>

  <h3 class="mt-5">My Posts</h3>
  <div class="row">
    <div class="col-4 my-2" v-for="post in store.loggedInUser.posts">
      <div class="card">
        <img
          :src="post.photoUrl"
          class="card-img-top"
          style="max-width: 100%"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Posted: 12/12/2012</h6>
          <p class="card-text">{{ post.desc }}</p>
          <button type="button" class="btn btn-outline-primary btn-sm me-2">
            Read More
          </button>
          <button type="button" class="btn btn-outline-primary btn-sm">
            Like
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userStore } from "@/stores/UserStore";

const store = userStore();
store.loadUserInfo();
</script>
