
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ReservationForm({ onReserve }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const normalizedEmail = email.trim();
    const atPosition = normalizedEmail.indexOf("@");
    const dotPosition = normalizedEmail.lastIndexOf(".");

    if (
      !normalizedEmail ||
      atPosition < 1 ||
      dotPosition <= atPosition + 1 ||
      dotPosition === normalizedEmail.length - 1
    ) {
      setError("Digite um e-mail válido para continuar.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Reserva realizada com sucesso!");
    onReserve(normalizedEmail);
    setEmail("");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reservar um livro</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          {success && (
            <p className="text-sm text-emerald-700">{success}</p>
          )}

          <Button type="submit" className="w-full">
            Confirmar reserva
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default ReservationForm;
