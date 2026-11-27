
import { Button } from "@/components/ui/button";

function Header({ totalLoans, darkMode, onToggleTheme }) {
  return (
    <header className="border-b border-emerald-900/10 bg-white px-6 py-5 dark:bg-zinc-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-emerald-800 dark:text-emerald-300">
            Biblioteca Digital
          </h1>

          <p className="hidden text-sm text-zinc-500 sm:inline">
            Um espaço para descobrir novas histórias
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Empréstimos ({totalLoans})
          </span>

          <Button onClick={onToggleTheme} variant="outline">
            {darkMode ? "Tema claro" : "Tema escuro"}
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
