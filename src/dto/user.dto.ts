import type { PostDto } from "@/dto/post.dto";

export interface UserDto {
  id: number;
  name: string;
  username: string;
  password: string;
  photoUrl: string;
  posts: PostDto[];
  following: UserDto[];
  access_token: string;
}
