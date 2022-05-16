<template>
  <div class="row">
    <div class="col-2">
      <img :src="user.photoUrl" class="rounded" style="max-width: 100%" />
    </div>
    <div class="col">
      <h5 class="card-title">{{ user.name }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        <div v-if="!hasHyperlink">@{{ user.username }}</div>
        <router-link
          class="link-secondary"
          :to="'/profile/' + user.username"
          v-if="hasHyperlink"
          >@{{ user.username }}</router-link
        >
      </h6>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UserDto } from "@/dto/user.dto";

defineProps<{
  user: UserDto;
  hasHyperlink?: boolean;
}>();
</script>

<style scoped></style>
