import { createSlice } from "@reduxjs/toolkit";

const flashcardsSlice = createSlice({
  name: "flashcards",
  initialState: {
    flashcards: [],
  },
  reducers: {
    addFlashcard: (state, action) => {
      state.flashcards.push({
        id: Date.now(),
        front: action.payload.front,
        back: action.payload.back,
      });
    },
    updateFlashcard: (state, action) => {
      const flashcard = state.flashcards.find(
        (fc) => fc.id === action.payload.id
      );
      if (flashcard) {
        flashcard.front = action.payload.front;
        flashcard.back = action.payload.back;
      }
    },
    removeFlashcard: (state, action) => {
      state.flashcards = state.flashcards.filter(
        (fc) => fc.id !== action.payload
      );
    },
  },
});

export const { addFlashcard, updateFlashcard, removeFlashcard } =
  flashcardsSlice.actions;
export default flashcardsSlice.reducer;
