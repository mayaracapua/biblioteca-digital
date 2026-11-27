
function FilterBar({ genres, activeGenre, onGenreChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <button
          key={genre}
          type="button"
          onClick={() => onGenreChange(genre)}
          aria-pressed={activeGenre === genre}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-emerald-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${
            activeGenre === genre
              ? "bg-emerald-700 text-white"
              : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
