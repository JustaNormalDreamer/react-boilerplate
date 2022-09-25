import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([]),
});

export type RootState = ReturnType<typeof store.getState>;
    