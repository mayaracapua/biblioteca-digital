
import { useState } from "react";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import BookGrid from "./components/BookGrid";
import LoanPanel from "./components/LoanPanel";
import ReservationForm from "./components/ReservationForm";
import ActivityPanel from "./components/ActivityPanel";
import Footer from "./components/Footer";

import { books, genres } from "./data/books";
import { emit } from "./lib/eventBus";
import "./index.css";

function App() {
  const [activeGenre, setActiveGenre] = useState("Todos");
  const [loans, setLoans] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const filteredBooks =
    activeGenre === "Todos"
      ? books
      : books.filter((book) => book.genre === activeGenre);

  function handleLoan(book) {
    if (!book.available) return;

    if (loans.some((loan) => loan.id === book.id)) return;

    setLoans((previous) => [...previous, book]);

    emit({
      message: `Empréstimo realizado: ${book.title}`,
    });
  }

  function handleReturn(book) {
    setLoans((previous) =>
      previous.filter((loan) => loan.id !== book.id)
    );

    emit({
      message: `Livro devolvido: ${book.title}`,
    });
  }

  function handleReservation(email) {
    emit({
      message: `Reserva solicitada por ${email}`,
    });
  }

  function handleAvailability(book, available) {
    emit({
      message: `Consulta de ${book.title}: ${
        available ? "disponível" : "indisponível"
      }`,
    });
  }

  function handleToggleTheme() {
    setDarkMode((previous) => !previous);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-white">
        <Header
          totalLoans={loans.length}
          darkMode={darkMode}
          onToggleTheme={handleToggleTheme}
        />

        <main className="mx-auto max-w-6xl space-y-8 px-6 py-8">
          <FilterBar
            genres={genres}
            activeGenre={activeGenre}
            onGenreChange={setActiveGenre}
          />

          <BookGrid
            books={filteredBooks}
            onLoan={handleLoan}
            onCheckAvailability={handleAvailability}
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <LoanPanel
              loans={loans}
              onReturn={handleReturn}
            />

            <ReservationForm onReserve={handleReservation} />

            <ActivityPanel />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
