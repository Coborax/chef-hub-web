import http from "@/services/http.client";
import type { UserDto } from "@/dto/user.dto";

export class UsersService {
  async login(username: string, password: string): Promise<string> {
    const res = await http.post<UserDto>("/auth/login", { username, password });
    return res.data.access_token;
  }

  async getUserInfo(): Promise<UserDto> {
    const res = await http.get<UserDto>("/users");
    return res.data;
  }
}
