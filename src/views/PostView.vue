<template>
  <div class="row">
    <h2>{{ post.title }}</h2>
    <hr />
    <div class="col">
      <img
        :src="post.photoUrl"
        class="card-img-top"
        style="max-width: 100%"
        alt="..."
      />
      <p>{{ post.desc }}</p>
    </div>
    <div class="col-3">
      <h3>Author</h3>
      <ProfileInfo :user="post.user" has-hyperlink></ProfileInfo>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileInfo from "@/components/ProfileInfo.vue";
import { PostsService } from "@/services/posts.service";
import { useRoute } from "vue-router";
import type { PostDto } from "@/dto/post.dto";
import { ref } from "vue";

const route = useRoute();

const postService = new PostsService();
const post = ref<PostDto>();

postService.getPost(route.params.id).then((res) => (post.value = res));
</script>
