import { service } from "../../../services/articles.api";
import { useState } from "react";
import toast from "react-hot-toast";

export function usePost() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const response = await service.get();
      const formattedData = response.map((post) => ({
        id: post.id,
        title: post.title,
        description: post.description,
        username: post.user.username,
        created_at: post.created_at,
        tags: post.tag_list,
        imageUrl: post.cover_image,
      }));

      setPosts(formattedData);
    } catch (error) {
      console.error(`ERRO NO GET DE POSTS: ${error}`);
      toast.error("Erro ao listar artigos");
    }
  }

  return { posts, getPosts };
}
