
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function LoanPanel({ loans, onReturn }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Meus empréstimos ({loans.length})</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {loans.length === 0 ? (
          <p className="text-sm text-zinc-500">
            Você ainda não possui empréstimos.
          </p>
        ) : (
          loans.map((book) => (
            <div
              key={book.id}
              className="flex items-center justify-between gap-3 border-b pb-3"
            >
              <div>
                <p className="font-medium">{book.title}</p>
                <p className="text-sm text-zinc-500">{book.author}</p>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => onReturn(book)}
              >
                Devolver
              </Button>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}

export default LoanPanel;
