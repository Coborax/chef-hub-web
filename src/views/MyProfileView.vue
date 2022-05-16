<template>
  <div class="row">
    <h2>My Profile</h2>
    <hr />
    <div class="col">
      <ProfileInfo :user="store.loggedInUser"></ProfileInfo>
      <h3 class="mt-5">My Posts</h3>
      <div class="row">
        <div class="col-4 my-2" v-for="post in store.loggedInUser.posts">
          <Post :post="post"></Post>
        </div>
      </div>
    </div>
    <div class="col-3">
      <h3>Following</h3>
      <ProfileInfo
        v-for="user in store.loggedInUser.following"
        :user="user"
        has-hyperlink
      ></ProfileInfo>
    </div>
  </div>
</template>

<script setup lang="ts">
import { userStore } from "@/stores/UserStore";
import ProfileInfo from "@/components/ProfileInfo.vue";
import Post from "@/components/Post.vue";

const store = userStore();
store.loadUserInfo();
</script>
