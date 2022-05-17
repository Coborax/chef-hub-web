<template>
  <h4>Comments</h4>
  <hr />
  <div class="card">
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">John: Cool!</li>
        <li class="list-group-item">Bob: Nice!!</li>
        <li class="list-group-item">Jens: Ok ok!!</li>
      </ul>
    </div>
    <div class="card-footer text-muted d-flex">
      <input class="form-control me-2" placeholder="Type a message..." />
      <button class="btn btn-outline-primary" type="submit">Send</button>
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
