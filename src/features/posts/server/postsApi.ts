// src/features/posts/postsApi.ts
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getDatabase, ref, child, get, DataSnapshot } from "firebase/database";
import type { DatabaseReference } from "firebase/database";

export interface Post {
  id: string;
  title: string;
  author: string;
  body: string;
}

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      async queryFn() {
        try {
          const dbRef: DatabaseReference = ref(getDatabase());
          const snapshot: DataSnapshot = await get(child(dbRef, "posts"));

          if (!snapshot.exists()) {
            return { data: [] };
          }

          const data = snapshot.val() as Record<string, Omit<Post, "id">>;

          const posts: Post[] = Object.entries(data).map(([id, value]) => ({
            id,
            ...value,
          }));

          return { data: posts };
        } catch (error) {
          return { error: { status: "FETCH_ERROR", error } };
        }
      },
    }),
  }),
});

// Export the auto-generated hook
export const { useGetPostsQuery } = postsApi;
