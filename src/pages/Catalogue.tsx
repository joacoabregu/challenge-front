import { useAppSelector, useAppDispatch } from "../state/hooks";
import { getItems, selectItems, selectStatus } from "../state/itemsSlice";
import { Item as ItemInterface } from "../types/interfaces";
import { Items } from "../types/interfaces";
import { useEffect } from "react";
import Item from "../components/Item";

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

  if (status === "error") {
    return (
      <div>
        <p>Se ha producido un error. Intente más tarde</p>
      </div>
    );
  }

  if (!items.length) {
    return <div>No hay items para mostrar</div>;
  } else {
    return (
      <>
        {items.map((data: ItemInterface) => (
          <Item item={data} />
        ))}
      </>
    );
  }
}
