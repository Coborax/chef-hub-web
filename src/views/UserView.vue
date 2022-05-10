<template>
  <div class="row">
    <div class="col">
      <ProfileInfo :user="user"></ProfileInfo>
      <button
        type="button"
        class="btn btn-outline-primary mt-2"
        @click="followUser"
      >
        Follow
      </button>
      <h3 class="mt-5">Posts</h3>
      <div class="row">
        <div class="col-4 my-2" v-for="post in user.posts">
          <Post :post="post"></Post>
        </div>
      </div>
    </div>
    <div class="col-3">
      <h3>Following</h3>
      <ProfileInfo v-for="user in user.following" :user="user"></ProfileInfo>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileInfo from "@/components/ProfileInfo.vue";
import Post from "@/components/Post.vue";
import { ref } from "vue";
import { UsersService } from "@/services/users.service";
import type { UserDto } from "@/dto/user.dto";
import { useRoute } from "vue-router";

const userService = new UsersService();
const user = ref<UserDto | undefined>(undefined);

const route = useRoute();
userService.getUser(route.params.username).then((res) => (user.value = res));

function followUser() {
  userService.followUser(user.value.username);
}
</script>
