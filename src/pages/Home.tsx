import banner1 from "../assets/banner_1.jpg";
import banner2 from "../assets/banner_2.jpg";
import banner3 from "../assets/banner_3.jpg";
import { shuffle } from "underscore";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import { getItems, selectItems, selectStatus } from "../state/itemsSlice";
import { Item, Items } from "../types/interfaces";
import { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "../styles/React-Image-Gallery.css";

export default function Home() {
  let items: Items = useAppSelector(selectItems);
  let status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  let imageBanner = [
    { original: banner1 },
    { original: banner2 },
    { original: banner3 },
  ];

  if (items.length) {
    let shuffleItems: Items = shuffle(items);
    let sliceShuffleItems: Items = shuffleItems.slice(0, 4);
    console.log(sliceShuffleItems);
    return (
      <main>
        <ImageGallery
          items={imageBanner}
          showNav={false}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
        />
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
