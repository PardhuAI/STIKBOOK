"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {/* Prev */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
          currentPage === 1
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-black/10 dark:hover:bg-white/20"
        }`}
        disabled={currentPage === 1}
      >
        ←
      </button>

      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              page === currentPage
                ? "text-white"
                : "bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20"
            }`}
            style={
              page === currentPage
                ? { background: "var(--text-gradient)" }
                : undefined
            }
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
          currentPage === totalPages
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-black/10 dark:hover:bg-white/20"
        }`}
        disabled={currentPage === totalPages}
      >
        →
      </button>
    </div>
  );
}
