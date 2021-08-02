import { PaginationProps } from "../types/types";
export default function Pagination({ perPage, total, paginate, currentPage } : PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
              href="!#"
              className={
                "page-link" + (currentPage === number ? " active-page" : "")
              }
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
