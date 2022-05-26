<template>
  <div class="container justify-content-center" style="width: 35em">
    <b-card bg-variant="light">
      <h2 style="text-align: center; margin-bottom: 1.5em">Register</h2>
      <div
        class="container justify-content-center"
        style="width: 25em; margin-bottom: 4em"
      >
        <b-form-input
          size="md"
          v-model="fullnameInput"
          placeholder="Enter your full name"
          style="margin-bottom: 0.5em"
        >
        </b-form-input>
        <b-form-input
          size="md"
          v-model="usernameInput"
          placeholder="Enter username"
          style="margin-bottom: 0.5em"
        >
        </b-form-input>
        <b-form-input
          size="md"
          type="password"
          v-model="passwordInput"
          placeholder="Enter password"
        >
        </b-form-input>
      </div>
      <b-button
        class="container justify-content-center"
        block
        variant="success"
        @click="register"
        >Register
      </b-button>
    </b-card>
  </div>
</template>

<script setup lang="ts">
import { userStore } from "@/stores/UserStore";
import { ref } from "vue";
import router from "../router";

const store = userStore();
const fullnameInput = ref("");
const usernameInput = ref("");
const passwordInput = ref("");

function register() {
  if (
    fullnameInput.value.length > 0 &&
    passwordInput.value.length > 0 &&
    usernameInput.value.length > 0
  ) {
    store
      .register(fullnameInput.value, usernameInput.value, passwordInput.value)
      .then((valid) => {
        if (valid) {
          router.push({ name: "login" });
        }
      });
  }
}
</script>

<style scoped></style>
