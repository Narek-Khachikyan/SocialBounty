import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../../features/posts/server/postsApi";

export const store = configureStore({
  reducer: {
    // RTK Query reducer for postsApi
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
