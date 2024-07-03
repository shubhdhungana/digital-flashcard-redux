const FlashcardItem = ({ flashcard, onRemove }) => {
  return (
    <li className="p-4 border rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">Front: {flashcard.front}</p>
          <p className="italic">Back: {flashcard.back}</p>
        </div>
        <button
          onClick={() => onRemove(flashcard.id)}
          className="p-2 bg-red-500 text-white rounded"
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default FlashcardItem;
