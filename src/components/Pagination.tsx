import { Button } from './Button'

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (pageNumber: number) => void
}

export const Pagination = ({
  totalPages,
  currentPage,
  onPageChange
}: PaginationProps) => {
  const MAX_VISIBLE_PAGES = 4

  const getPageNumbers = () => {
    if (totalPages <= MAX_VISIBLE_PAGES) {
      return Array.from({ length: totalPages }, (_, index) => index + 1)
    }

    const pagesBefore = Math.min(
      Math.floor(MAX_VISIBLE_PAGES / 2),
      currentPage - 1
    )
    const pagesAfter = MAX_VISIBLE_PAGES - pagesBefore - 1
    let startPage = Math.max(1, currentPage - pagesBefore)
    let endPage = Math.min(totalPages, currentPage + pagesAfter)

    if (endPage - startPage + 1 < MAX_VISIBLE_PAGES) {
      endPage = Math.min(totalPages, startPage + MAX_VISIBLE_PAGES - 1)
      startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1)
    }

    return Array.from(
      { length: Math.min(MAX_VISIBLE_PAGES, totalPages) },
      (_, index) => startPage + index
    )
  }

  return (
    <div className="w-full justify-center flex gap-3 mt-5 max-md:mb-16">
      {currentPage > 2 && (
        <Button
          textSize="xm"
          className="w-7 h-7 bg-gray-100 hover:bg-gray-300"
          onClick={() => onPageChange(1)}
        >
          1
        </Button>
      )}

      {currentPage > MAX_VISIBLE_PAGES / 2 + 2 &&
        totalPages > MAX_VISIBLE_PAGES && (
          <span className="text-gray-500">...</span>
        )}

      {getPageNumbers().map(pageNumber => (
        <Button
          textSize="xm"
          className={`w-7 h-7 bg-gray-100 hover:bg-gray-300 ${
            pageNumber === currentPage ? 'bg-gray-400' : ''
          }`}
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}

      {currentPage < totalPages - MAX_VISIBLE_PAGES / 2 - 1 &&
        totalPages > MAX_VISIBLE_PAGES && (
          <span className="text-gray-500">...</span>
        )}

      {currentPage < totalPages - 1 && (
        <Button
          textSize="xm"
          className="w-7 h-7 bg-gray-100 hover:bg-gray-300"
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </Button>
      )}
    </div>
  )
}
