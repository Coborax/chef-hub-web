import { defineStore } from "pinia";
import type { UserDto } from "@/dto/user.dto";
import { UsersService } from "@/services/users.service";
import type { PostDto } from "@/dto/post.dto";
import { PostsService } from "@/services/posts.service";

const usersService = new UsersService();
const postService = new PostsService();

export const userStore = defineStore({
  id: "UserStore",
  state: () => ({
    loading: false,
    loggedInUser: {} as UserDto,
  }),
  actions: {
    async login(username: string, password: string): Promise<boolean> {
      this.loading = true;
      const token = await usersService.login(username, password);
      if (token) {
        localStorage.setItem("user-token", token);
        return true;
      }
      return false;
    },
    loadUserInfo() {
      this.loading = true;
      usersService.getUserInfo().then((user) => {
        this.loggedInUser = user;
        this.loading = false;
      });
    },
    async loadUserInfoAsync(): Promise<UserDto> {
      this.loading = true;
      this.loggedInUser = await usersService.getUserInfo();
      this.loading = false;

      return this.loggedInUser;
    },
    likePost(post: PostDto) {
      postService.like(post.id).then(() => {
        this.loggedInUser.likedPosts.push(post);
      });
    },
    unlikePost(post: PostDto) {
      postService.unlike(post.id).then(() => {
        const index = this.loggedInUser.likedPosts.indexOf(post);
        this.loggedInUser.likedPosts = this.loggedInUser.likedPosts.splice(
          index - 1,
          1
        );
      });
    },
  },
});
