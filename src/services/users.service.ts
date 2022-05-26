import http from "@/services/http.client";
import type { UserDto } from "@/dto/user.dto";
import type { CreateUserDto } from "@/dto/createUser.dto";

export class UsersService {
  async login(username: string, password: string): Promise<string> {
    const res = await http.post<UserDto>("/auth/login", { username, password });
    return res.data.access_token;
  }

  async getUserInfo(): Promise<UserDto> {
    const res = await http.get<UserDto>("/users");
    return res.data;
  }

  async getUser(username: string): Promise<UserDto> {
    const res = await http.get<UserDto>("/users/" + username);
    return res.data;
  }

  async followUser(username: string) {
    await http.post("users/follow/" + username);
  }

  async search(searchTerm: string): Promise<UserDto[]> {
    const res = await http.get<UserDto[]>("/users/search/" + searchTerm);
    return res.data;
  }

  async register(
    name: string,
    username: string,
    password: string
  ): Promise<UserDto> {
    const body: CreateUserDto = {
      username: username,
      name: name,
      password: password,
    };
    const res = await http.post<UserDto>("/users", body);
    return res.data;
  }
}
