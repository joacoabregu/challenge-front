import { useAppSelector, useAppDispatch } from "../state/hooks";
import { getItems, selectItems, selectStatus } from "../state/itemsSlice";
import { Item as ItemInterface } from "../types/interfaces";
import { Items } from "../types/interfaces";
import { useEffect, useState } from "react";
import Item from "../components/Item";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import { getCurrentPagination } from "../helpers/functions";
import "../styles/Items.css";

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
  const itemsPerPage: number = 5;
  const currentItems = getCurrentPagination(items, currentPage, itemsPerPage);
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

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
          perPage={itemsPerPage}
          total={items.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </>
    );
  }
}
