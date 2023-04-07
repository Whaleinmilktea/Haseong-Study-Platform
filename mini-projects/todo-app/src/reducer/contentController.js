import { createSlice } from '@reduxjs/toolkit';

// redux toolkit 사용법을 익혀봐야겠다!!!!
const initialState = [];

export const contentSlice = createSlice({
  name: 'contents',
  initialState,
  reducers: {
    createContent: (state, action) => {
      state.push(action.payload);
    },
    deleteContent: (state, action) => {
      return state.filter((content) => content.id !== action.payload);
    },
    updateContent: (state, action) => {
      const { id, contents } = action.payload;
      const index = state.findIndex((content) => content.id === id);
      state[index].contents = contents;
    },
  },
});

export const { createContent, deleteContent, updateContent } = contentSlice.actions;

export default contentSlice.reducer;
