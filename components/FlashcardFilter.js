import { useState } from "react";
import { useSelector } from "react-redux";

const FlashcardFilter = () => {
  const [query, setQuery] = useState("");
  const flashcards = useSelector((state) => state.flashcards.flashcards);

  const filteredFlashcards = flashcards.filter(
    (fc) =>
      fc.front.toLowerCase().includes(query.toLowerCase()) ||
      fc.back.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mb-4 p-4 border rounded-lg shadow-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full"
        placeholder="Search flashcards"
      />
      <ul className="mt-4 space-y-2">
        {filteredFlashcards.map((flashcard) => (
          <li key={flashcard.id} className="text-lg">
            {flashcard.front} - {flashcard.back}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashcardFilter;
