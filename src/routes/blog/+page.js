import { getPosts } from '$lib/blog/posts';

export function load() {
  return {
    posts: getPosts()
  };
}
