<template>
  <div class="row">
    <h2>My Profile</h2>
    <hr />
    <div class="col">
      <ProfileInfo :user="store.loggedInUser"></ProfileInfo>
      <ul class="nav nav-tabs mt-5">
        <li class="nav-item">
          <a
            :class="[showLikedPosts ? 'nav-link' : 'nav-link active']"
            aria-current="page"
            @click="showMyPosts"
            >My Posts</a
          >
        </li>
        <li class="nav-item">
          <a
            :class="[showLikedPosts ? 'nav-link active' : 'nav-link']"
            @click="showMyLikedPosts"
            >Liked Posts</a
          >
        </li>
      </ul>
      <div v-if="!showLikedPosts" class="row">
        <div class="col-4 my-2" v-for="post in store.loggedInUser.posts">
          <Post :post="post" :user="store.loggedInUser"></Post>
        </div>
      </div>
      <div v-if="showLikedPosts" class="row">
        <div class="col-4 my-2" v-for="post in store.loggedInUser.likedPosts">
          <Post :post="post" :user="store.loggedInUser"></Post>
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
import { ref } from "vue";

const showLikedPosts = ref<boolean>(false);

const store = userStore();
store.loadUserInfo();

function showMyPosts() {
  showLikedPosts.value = false;
}

function showMyLikedPosts() {
  showLikedPosts.value = true;
}
</script>

<style>
.nav-item {
  cursor: pointer;
}
</style>
