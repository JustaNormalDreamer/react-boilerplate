import { configureStore } from '@reduxjs/toolkit';
import { postApi } from '@/redux/post.reducer';
import { errorMiddleware } from '@/redux/error.middleware';
import themeSlice from '@/redux/theme.slice';

export const store = configureStore({
  reducer: {
    themeSlice: themeSlice,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([errorMiddleware, postApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
