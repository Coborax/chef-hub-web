import http from "./http.client";

import type { PostDto } from "@/dto/post.dto";

export class PostsService {
  async getMyPosts(): Promise<PostDto[]> {
    const res = await http.get<PostDto[]>("/posts");
    return res.data;
  }
  async getFeed(): Promise<PostDto[]> {
    const res = await http.get<PostDto[]>("/posts/feed");
    return res.data;
  }
}
