import { useAppSelector, useAppDispatch } from "../state/hooks";
import { getItems, selectItems, selectStatus } from "../state/itemsSlice";
import { Item as ItemInterface } from "../types/interfaces";
import { Items } from "../types/interfaces";
import { useEffect, useState } from "react";
import Item from "../components/Item";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";

export default function Catalogue() {
  let items: Items = useAppSelector(selectItems);
  let status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  useEffect(() => {
    if (status === "error") {
      dispatch(getItems());
    }
  }, [status, dispatch]);

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage: number = 5;
  // Get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentItems = items.slice(indexOfFirstBook, indexOfLastBook);
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (status === "error") {
    return (
      <div>
        <p>Se ha producido un error. Intente más tarde</p>
      </div>
    );
  }

  if (!items.length) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="items">
          {currentItems.map((data: ItemInterface, index) => (
            <Item item={data} key={index} />
          ))}
        </div>
        <Pagination
          perPage={booksPerPage}
          total={items.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </>
    );
  }
}
