<template>
  <h2>Following Feed</h2>
  <hr />
  <div class="row">
    <div
      class="col-sm-12 col-md-6 col-lg-4 my-2"
      v-for="post in posts"
      v-bind:key="post.id"
    >
      <Post :post="post"></Post>
    </div>
  </div>
</template>

<script setup lang="ts">
import Post from "@/components/Post.vue";
import { PostsService } from "@/services/posts.service";
import { ref } from "vue";
import type { PostDto } from "@/dto/post.dto";

const postsService = new PostsService();
const posts = ref<PostDto[]>([]);

postsService.getFeed().then((res) => (posts.value = res));
</script>

<style></style>
