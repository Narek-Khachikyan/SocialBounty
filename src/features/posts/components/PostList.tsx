import { useGetPostsQuery } from "../postsApi";
import type { Post } from "../postsApi";
import { PostBlock } from "../ui/PostBlock";

export function PostsList() {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading posts…</div>;
  }
  if (error) {
    return <div>Error loading posts</div>;
  }
  if (!posts?.length) {
    return <div>No posts available</div>;
  }

  return (
    <ul>
      {posts.map((post: Post) => (
        <PostBlock {...post} />
      ))}
    </ul>
  );
}
