import { configureStore, createSlice, ThunkAction, Action, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { asyncCall } from '../api'

export interface Post {
  id: string;
  title: string;
  body: string;
  tags: string[];
};

export interface AppState {
  loading: boolean;
  posts: Post[];
};

const initialState: AppState = {
  loading: false,
  posts: [],
};

export const slice = createSlice({ 
  name: 'slice', 
  initialState, 
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(asyncAction.pending, (state) => {
      state.loading = true;
    })
    .addCase(asyncAction.fulfilled, (state, action: PayloadAction<Post[]>) => {
      state.loading = false;
      console.log(action.payload)
      state.posts = action.payload;
    })
    .addCase(asyncAction.rejected, (state) => {
      state.loading = false;
    });
  }
});

export const asyncAction = createAsyncThunk(
  'async',
  async () => {
    const response = await asyncCall('');
    return response;
  }
);

export const selectLoading = (state: RootState) => state.loading;

export const selectPosts = (state: RootState) => state.posts;


const store = configureStore({ reducer: slice.reducer });

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;