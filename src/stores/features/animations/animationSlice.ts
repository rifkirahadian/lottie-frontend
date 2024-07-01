import { Animation } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

type CreateAnimationState = {
  animationData: string | null;
  filesize: string | null;
  filename: string | null;
  error: string | null;
};

type AnimationState = {
  animation: Animation | null;
  animations: Animation[];
  sort: string;
  search: string;
  createAnimation: CreateAnimationState;
};

const initialState: AnimationState = {
  animation: null,
  animations: [],
  sort: '',
  search: '',
  createAnimation: {
    animationData: null,
    filesize: null,
    filename: null,
    error: null,
  },
};

export const animation = createSlice({
  name: 'animation',
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
    setCreateAnimation: (state, action) => {
      state.createAnimation = action.payload;
    },
    setAnimation: (state, action) => {
      state.animation = action.payload;
    },
  },
});

export const {
  setAnimations,
  setSort,
  setSearch,
  setCreateAnimation,
  setAnimation,
} = animation.actions;
export default animation.reducer;
