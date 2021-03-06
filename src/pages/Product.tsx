import { Suspense, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";
import Form from "../components/Form";
import "../styles/React-Image-Gallery.css";
import { Item, Items } from "../types/interfaces";
import { getItems, selectItems, selectStatus } from "../state/itemsSlice";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import Comments from "../components/Comments";
import Spinner from "../components/Spinner";
import "../styles/Product.css";
import { datesDifferenceToStr } from "../helpers/functions";

export default function Product() {
  let items: Items = useAppSelector(selectItems);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  let status = useAppSelector(selectStatus);
  useEffect(() => {
    if (status === "error") {
      dispatch(getItems());
    }
  }, [status, dispatch]);

  let { id } = useParams<{ id: string }>();
  // Search item according to id
  let item: Item | undefined = items.find((item) => item.id === Number(id));
  const url: string =
    "https://rooftop-api-rest-frontend.herokuapp.com/questions";

  if (status === "error") {
    return (
      <div>
        <p>Se ha producido un error. Intente más tarde</p>
      </div>
    );
  }

  if (!item) {
    return <Spinner />;
  }

  let price: string;
  let priceClass: string = "";
  let offerStr: string = "";
  if (item.offer) {
    price = item.offer.price.toString();
    priceClass = "item-price--alert";
    offerStr = datesDifferenceToStr(item.offer?.expires_at);
  } else {
    price = item.price;
  }
  // Format item images for React Image Gallery
  let itemImages = item.images.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });
  return (
    <section className="product">
      <ImageGallery items={itemImages} />
      <div>
        <h1 className="product-title"> {item.title} </h1>
        {item.offer && <p>{offerStr}</p>}
        <p className={`product-price ${priceClass}`}>
          {item.currency} {price}
        </p>
      </div>
      <Form urlPOST={url} />
      <h2>Comentarios</h2>
      <Suspense fallback={<Spinner />}>
        <Comments id={id} />
      </Suspense>
    </section>
  );
}
