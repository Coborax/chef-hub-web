<template>
  <div class="row">
    <h2>My Profile</h2>
    <hr />
    <div class="col">
      <ProfileInfo :user="store.loggedInUser"></ProfileInfo>
      <h3 class="mt-5">My Posts</h3>
      <div class="row">
        <div class="col-4 my-2" v-for="post in store.loggedInUser.posts"></div>
      </div>
    </div>
    <div class="col-3">
      <h3>Author</h3>
      <ProfileInfo :user="user"></ProfileInfo>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostsService } from "@/services/posts.service";

const postService = new PostsService();
postService.getPost(route.params.postId);
</script>
