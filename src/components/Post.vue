<template>
  <div class="card" style="max-height: 100%; min-height: 100%">
    <img
      :src="post.photoUrl"
      class="card-img-top"
      style="height: 300px; max-width: 100%"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Posted: 12/12/2012</h6>
      <p class="card-text">{{ shorten(post.desc) }}</p>
      <router-link
        :to="'/post/' + post.id"
        type="button"
        class="btn btn-outline-primary btn-sm me-2"
      >
        Read More
      </router-link>
      <button
        v-if="!isPostLiked()"
        type="button"
        class="btn btn-outline-primary btn-sm"
        @click="like"
      >
        Like
      </button>
      <button
        v-if="isPostLiked()"
        type="button"
        class="btn btn-outline-danger btn-sm"
        @click="unlike"
      >
        Unlike
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PostDto } from "@/dto/post.dto";
import { computed, ref, watch } from "vue";
import { PostsService } from "@/services/posts.service";
import { userStore } from "@/stores/UserStore";
import type { UserDto } from "@/dto/user.dto";

const props = defineProps<{
  post: PostDto;
}>();

const postService = new PostsService();
const store = userStore();

isPostLiked();

function shorten(val: string) {
  return val.slice(0, 100) + "...";
}

function like() {
  store.likePost(props.post);
}

function unlike() {
  store.unlikePost(props.post);
}

function isPostLiked() {
  for (const likedPost of store.loggedInUser.likedPosts) {
    if (likedPost.id === props.post.id) {
      return true;
    }
  }
  return false;
}
</script>

<style scoped></style>
