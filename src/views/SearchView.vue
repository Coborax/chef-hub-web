<template>
  <h2>Search results for "{{ searchTerm }}"</h2>
  <hr />
  <div class="row">
    <div class="col-12 my-2" v-for="user in users" v-bind:key="user.id">
      <ProfileInfo :user="user" has-hyperlink></ProfileInfo>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileInfo from "@/components/ProfileInfo.vue";
import { onMounted, onUpdated, ref, watch } from "vue";
import { UsersService } from "@/services/users.service";
import type { UserDto } from "@/dto/user.dto";
import { useRoute } from "vue-router";

const route = useRoute();

const userService = new UsersService();
const users = ref<UserDto[] | undefined>(undefined);
const searchTerm = ref<string>(route.params.searchTerm);

userService.search(searchTerm.value).then((res) => (users.value = res));
</script>
