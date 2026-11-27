
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

function BookCard({ book, onLoan, onCheckAvailability }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleCheckAvailability() {
    setLoading(true);
    setResult("");

    const available = await new Promise((resolve) => {
      setTimeout(() => resolve(book.available), 1200);
    });

    setResult(
      available
        ? "Livro disponível para consulta."
        : "Livro indisponível no momento."
    );

    setLoading(false);
    onCheckAvailability?.(book, available);
  }

  return (
    <Card className="group transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle className="group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
          {book.title}
        </CardTitle>
        <CardDescription>{book.author}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Gênero: {book.genre}
        </p>

        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Páginas: {book.pages}
        </p>

        <p className="text-sm font-medium">
          {book.available ? "Disponível" : "Indisponível"}
        </p>

        <Button
          className="w-full"
          disabled={!book.available}
          onClick={() => onLoan(book)}
        >
          {book.available ? "Emprestar livro" : "Indisponível"}
        </Button>

        <Button
          className="w-full"
          variant="outline"
          disabled={loading}
          onClick={handleCheckAvailability}
        >
          {loading ? "Consultando..." : "Consultar disponibilidade"}
        </Button>

        {result && (
          <p className="text-sm text-emerald-700 dark:text-emerald-400">
            {result}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default BookCard;
