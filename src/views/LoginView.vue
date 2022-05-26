<template>
  <div class="container justify-content-center center" style="width: 35em">
    <b-card bg-variant="light">
      <h2 style="text-align: center; margin-bottom: 1.5em">LOG IN</h2>
      <div
        class="container justify-content-center"
        style="width: 25em; margin-bottom: 4em"
      >
        <b-form-input
          size="md"
          v-model="usernameInput"
          placeholder="Enter your username"
          style="margin-bottom: 0.5em"
        >
        </b-form-input>
        <b-form-input
          size="md"
          type="password"
          v-model="passwordInput"
          placeholder="Enter your password"
        >
        </b-form-input>
        <span
          >If you have no account, you can register
          <router-link to="/register">here</router-link></span
        >
      </div>
      <b-button
        class="container justify-content-center"
        block
        variant="success"
        @click="logIn"
        >Log in
      </b-button>
    </b-card>
  </div>
</template>

<script setup lang="ts">
import { userStore } from "@/stores/UserStore";
import { ref } from "vue";
import router from "@/router";

const store = userStore();
const usernameInput = ref("");
const passwordInput = ref("");

function logIn() {
  if (usernameInput.value.length > 0 && passwordInput.value.length > 0) {
    store.login(usernameInput.value, passwordInput.value).then((loggedIn) => {
      if (loggedIn) {
        router.push({ path: "/profile" });
      }
    });
  }
  return;
}
</script>

<style scoped></style>
