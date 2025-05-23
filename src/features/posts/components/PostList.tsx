import { useGetPostsQuery } from "../server/postsApi";
import type { Post } from "../server/postsApi";
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
        <PostBlock key={post.id} {...post} />
      ))}
    </ul>
  );
}
