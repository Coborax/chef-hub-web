import { defineStore } from "pinia";
import type { UserDto } from "@/dto/user.dto";
import { UsersService } from "@/services/users.service";
import type { PostDto } from "@/dto/post.dto";

const usersService = new UsersService();

export const userStore = defineStore({
  id: "UserStore",
  state: () => ({
    loading: false,
    loggedInUser: {} as UserDto,
  }),
  getters: {},
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
  },
});
