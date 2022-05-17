<template>
  <h4>Comments</h4>
  <hr />
  <div class="card">
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li
          v-for="comment in comments"
          v-bind:key="comment.id"
          class="list-group-item"
        >
          <b>@{{ comment.user.username }}:</b> {{ comment.msg }}
        </li>
      </ul>
    </div>
    <div class="card-footer text-muted d-flex">
      <input
        class="form-control me-2"
        placeholder="Type a message..."
        v-model="msgInput"
      />
      <button class="btn btn-outline-primary" @click="sendComment()">
        Send
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PostDto } from "@/dto/post.dto";
import { onMounted, onUnmounted, ref } from "vue";
import { CommentService } from "@/services/comment.service";
import type { CommentDto } from "@/dto/comment.dto";
import { userStore } from "@/stores/UserStore";

const commentsService = new CommentService();
const store = userStore();
const comments = ref<CommentDto[]>([]);
const msgInput = ref<string>("");

const props = defineProps<{
  post: PostDto;
}>();

onMounted(() => {
  comments.value = props.post.comments;
  commentsService.listenToPost(props.post.id, (comment) => {
    comments.value.push(comment);
  });
});

onUnmounted(() => {
  commentsService.disconnectFromPost(props.post.id);
});

function sendComment() {
  commentsService.createChat({
    msg: msgInput.value,
    userId: store.loggedInUser.id,
    postId: props.post.id,
  });
}
</script>

<style scoped></style>
