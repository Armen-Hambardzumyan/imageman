import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../types";

const initialState: Post[] = [];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.push(action.payload);
    },
    editPost: (state, action: PayloadAction<Post>) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deletePost: (state, action: PayloadAction<string>) => {
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export const getPosts = (state: { posts: Post[] }) => state.posts;

export const { addPost, editPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
