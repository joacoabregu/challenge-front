import banner from "../assets/banner_1.jpg";
import { shuffle } from "underscore";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import { getItems, selectItems, selectStatus } from "../state/itemsSlice";
import { Item, Items } from "../types/interfaces";
import { useEffect } from "react";
export default function Home() {
  let items: Items = useAppSelector(selectItems);
  let status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  if (items.length) {
    let shuffleItems: Items = shuffle(items);
    let sliceShuffleItems: Items = shuffleItems.slice(0, 4);
    console.log(sliceShuffleItems);
    return (
      <main>
        <img src={banner} alt="banner" />
        {sliceShuffleItems.map((item: Item) => {
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
      </main>
    );
  }
  if (status === "error") {
    return (
      <div>
        <p>Se ha producido un error. Intente más tarde</p>
      </div>
    );
  }
  if (!items.length) {
    return <div>No hay items para mostrar</div>;
  }

  return <div>Descargando...</div>;
}
