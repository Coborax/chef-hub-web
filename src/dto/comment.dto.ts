import type { UserDto } from "@/dto/user.dto";

export interface CommentDto {
  id: number;
  msg: string;
  user: UserDto;
}
