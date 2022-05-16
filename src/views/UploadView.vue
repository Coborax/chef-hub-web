<template>
  <h2>Upload Post</h2>
  <hr />
  <form>
    <div class="mb-3">
      <label class="form-label">Image</label>
      <input class="form-control" type="file" @change="handleFileChange" />
    </div>
    <div class="mb-3">
      <label class="form-label">Title</label>
      <input class="form-control" v-model="title" />
    </div>
    <div class="mb-3">
      <label class="form-label">Description</label>
      <textarea class="form-control" rows="3" v-model="desc"></textarea>
    </div>
  </form>
  <button type="button" class="btn btn-primary" @click="upload">Upload</button>
</template>

<script setup lang="ts">
import { PostsService } from "@/services/posts.service";
import { ref } from "vue";

let selectedFile: Blob;
// eslint-disable-next-line no-undef
const title = ref("");
const desc = ref("");

const postService = new PostsService();

function upload() {
  console.log(selectedFile);
  postService.upload(title.value, desc.value, selectedFile);
}

function handleFileChange(e) {
  const file = e.target.files[0];
  if (file != null) {
    selectedFile = new Blob([file], { type: file.type });
  }
}
</script>
