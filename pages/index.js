import FlashcardFilter from "@/components/FlashcardFilter";
import FlashcardForm from "@/components/FlashcardForm";
import FlashcardList from "@/components/FlashcardList";


export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4 text-center font-bold">Digital Flashcard App</h1>
      <FlashcardForm />
      <FlashcardFilter />
      <FlashcardList />
    </div>
  );
}
