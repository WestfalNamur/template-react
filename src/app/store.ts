import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import todoApi from "../features/todos/todoSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
      [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(todoApi.middleware),
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
