import type { CommentDto } from "@/dto/comment.dto";
import { io } from "socket.io-client";
import type { CreateCommentDto } from "@/dto/create-comment.dto";

export class CommentService {
  socket = io("https://chef-hub-vh6th.ondigitalocean.app/backend");

  constructor() {
    this.socket.connect();
  }

  createChat(comment: CreateCommentDto) {
    this.socket.emit("createComment", comment);
  }

  listenToPost(post: number, chatListener: (comment: CommentDto) => void) {
    this.socket.on("post:" + post, (chat: CommentDto) => {
      chatListener(chat);
    });
    console.log("Listening to post:" + post);
  }

  disconnectFromPost(post: number) {
    this.socket.off("post:" + post);
    console.log("Disconnected from post:" + post);
  }
}
