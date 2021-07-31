import { useAppSelector, useAppDispatch } from "../state/hooks";
import { getItems, selectItems, selectStatus } from "../state/itemsSlice";
import { Item } from "../types/interfaces";
import { Items } from "../types/interfaces";
import { useEffect } from "react";

export default function Catalogue() {
  let items: Items = useAppSelector(selectItems);
  let status = useAppSelector(selectStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

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
        {items.map((item: Item) => {
          let price;
          if (item.offer) {
            price = item.offer.price;
          } else {
            price = item.price;
          }
          return (
            <div key={item.id}>
              <img src={item.images[0]} alt="product"></img>
              <div>
                <p>{item.title}</p>
                <p>
                  {item.currency}
                  {price}
                </p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
