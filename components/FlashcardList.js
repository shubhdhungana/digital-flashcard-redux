import { useSelector, useDispatch } from "react-redux";
import { removeFlashcard } from "../features/flashcards/flashcardSlice";
import FlashcardItem from "./FlashcardItem";

const FlashcardList = () => {
  const flashcards = useSelector((state) => state.flashcards.flashcards);
  const dispatch = useDispatch();

  const handleRemoveFlashcard = (id) => {
    dispatch(removeFlashcard(id));
  };

  return (
    <ul className="space-y-4">
      {flashcards.map((flashcard) => (
        <FlashcardItem
          key={flashcard.id}
          flashcard={flashcard}
          onRemove={handleRemoveFlashcard}
        />
      ))}
    </ul>
  );
};

export default FlashcardList;
