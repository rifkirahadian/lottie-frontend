import { Animation } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type AnimationState = {
  animations: Animation[];
  sort: string;
  search: string;
};

const initialState: AnimationState = {
  animations: [],
  sort: '',
  search: ''
};

export const animation = createSlice({
  name: "animation",
  initialState,
  reducers: {
    setAnimations: (state, action) => {
      state.animations = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setAnimations, setSort, setSearch } = animation.actions;
export default animation.reducer;