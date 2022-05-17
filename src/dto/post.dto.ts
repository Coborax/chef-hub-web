import { UserDto } from "@/dto/user.dto";
import type { CommentDto } from "@/dto/comment.dto";

export interface PostDto {
  id: number;
  title: string;
  desc: string;
  photoUrl: string;
  user: UserDto;
  comments: CommentDto[];
}
