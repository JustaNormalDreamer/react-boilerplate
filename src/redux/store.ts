import { configureStore } from '@reduxjs/toolkit';
import { postApi } from '@/redux/posts/post.reducer';
import { errorMiddleware } from '@/redux/error.middleware';
import themeSlice from '@/redux/theme/theme.slice';
import authSlice from '@/redux/auth/auth.slice';

export const store = configureStore({
  reducer: {
    themeSlice: themeSlice,
    authSlice: authSlice,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([errorMiddleware, postApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
