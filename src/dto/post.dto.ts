import { UserDto } from "@/dto/user.dto";

export interface PostDto {
  id: number;
  title: string;
  desc: string;
  photoUrl: string;
  user: UserDto;
}
