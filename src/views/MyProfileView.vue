<template>
  <div class="row">
    <h2>My Profile</h2>
    <hr />
    <div class="col">
      <ProfileInfo :user="store.loggedInUser"></ProfileInfo>
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
    </div>
    <div class="col-3">
      <h3>Following</h3>
      <ProfileInfo
        v-for="user in store.loggedInUser.following"
        :user="user"
      ></ProfileInfo>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userStore } from "@/stores/UserStore";
import ProfileInfo from "@/components/ProfileInfo.vue";

const store = userStore();
store.loadUserInfo();
</script>
