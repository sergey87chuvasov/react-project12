import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  viewType: 'доход',
};

export const viewTypeMainReducer = createSlice({
  name: 'viewTypeMain',
  initialState,
  reducers: {
    changeViewType: (state, action) => {
      state.viewType = action.payload;
    },
  },
});

export const { changeViewType } = viewTypeMainReducer.actions;
export default viewTypeMainReducer.reducer;
