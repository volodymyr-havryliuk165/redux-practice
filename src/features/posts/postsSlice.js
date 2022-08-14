import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'post1',
    content: 'post1 pog',
    reactions: {
      heart: 0,
      like: 0,
    },
  },
  {
    id: '2',
    title: 'post2',
    content: 'post2 pog',
    reactions: {
      heart: 0,
      like: 0,
    },
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            reactions: {
              heart: 0,
              like: 0,
            },
          },
        };
      },
    },
    editPost: {
      reducer(state, action) {
        const { id, content } = action.payload;
        const post = state.find(post => id === post.id);
        post.content = content;
      },
    },
    deletePost: {
      reducer(state, action) {
        const { id } = action.payload;
        return state.filter(post => id !== post.id);
      }
    },
    addReaction: {
      reducer(state, action) {
        const { id, reaction } = action.payload;
        const post = state.find((post) => post.id === id);
        post.reactions[reaction]++;
      },
      prepare(id, reaction) {
        return {
          payload: {
            id,
            reaction,
          },
        };
      },
    },
  },
});

export const getPosts = (state) => state.posts;

export const { addPost, addReaction, deletePost, editPost } = postsSlice.actions;

export default postsSlice.reducer;
