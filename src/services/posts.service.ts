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
  async upload(title: string, desc: string, file: Blob): Promise<PostDto> {
    const data = new FormData();
    data.append("file", file);
    data.append("title", title);
    data.append("desc", desc);

    const res = await http.post("/posts/upload", data);
    return res.data;
  }

  async getPost(postId: number) {
    const res = await http.get<PostDto[]>("/posts/get/" + postId);
    return res.data;
  }

  async like(postId: number) {
    const res = await http.get<PostDto[]>("/posts/like/" + postId);
    return res.data;
  }

  async unlike(postId: number) {
    const res = await http.get<PostDto[]>("/posts/unlike/" + postId);
    return res.data;
  }
}
