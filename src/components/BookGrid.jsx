
import BookCard from "./BookCard";

function BookGrid({ books, onLoan, onCheckAvailability }) {
  if (books.length === 0) {
    return (
      <p className="py-10 text-center text-zinc-500">
        Nenhum livro encontrado.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onLoan={onLoan}
          onCheckAvailability={onCheckAvailability}
        />
      ))}
    </div>
  );
}

export default BookGrid;
