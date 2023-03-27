import { Post } from "../store";

export async function asyncCall(value: string): Promise<Post[]> {
/*   const data = await fetch('https://dummyjson.com/posts')
  const posts = await data.json();
  return posts.posts; 
  */
  return await fetch('https://dummyjson.com/posts').then(res => res.json()).then(res => res.posts);
}
