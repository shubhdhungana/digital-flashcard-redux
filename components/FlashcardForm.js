import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFlashcard } from "../features/flashcards/flashcardSlice";

const FlashcardForm = () => {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (front.trim() && back.trim()) {
      dispatch(addFlashcard({ front, back }));
      setFront("");
      setBack("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 p-4 border rounded-lg shadow-md"
    >
      <input
        type="text"
        value={front}
        onChange={(e) => setFront(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full mb-2"
        placeholder="Enter front text"
      />
      <input
        type="text"
        value={back}
        onChange={(e) => setBack(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full mb-2"
        placeholder="Enter back text"
      />
      <button
        type="submit"
        className="mt-2 p-2 bg-blue-500 text-white rounded w-full"
      >
        Add Flashcard
      </button>
    </form>
  );
};

export default FlashcardForm;
