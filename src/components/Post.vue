<template>
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
      <router-link
        :to="'/post/' + post.id"
        type="button"
        class="btn btn-outline-primary btn-sm me-2"
      >
        Read More
      </router-link>
      <button type="button" class="btn btn-outline-primary btn-sm">Like</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PostDto } from "@/dto/post.dto";

defineProps<{
  post: PostDto;
}>();
</script>

<style scoped></style>
