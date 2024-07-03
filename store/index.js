import { configureStore } from "@reduxjs/toolkit";
import flashcardsReducer from "../features/flashcards/flashcardSlice"

export const store = configureStore({
  reducer: {
    flashcards: flashcardsReducer,
  },
});
