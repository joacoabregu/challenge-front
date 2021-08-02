import { ItemProps } from "../types/types";
import "../styles/Item.css";
import { Link } from "react-router-dom";
import "../styles/Item.css";
export default function Item({ item }: ItemProps) {
  let price: string;
  let priceClass: string = "";
  if (item.offer) {
    price = item.offer.price.toString();
    priceClass = "item-price--alert";
  } else {
    price = item.price;
  }
  let url = "/catalogo/detalle/" + item.id;
  return (
    <div className="item" key={item.id}>
      <img src={item.images[0]} alt="product"></img>
      <div>
        <p className="item-title">{item.title}</p>
        <p
          className={`item-price ${priceClass}`}
        >{`${item.currency} ${price}`}</p>
        <Link to={url}>Ver más</Link>
      </div>
    </div>
  );
}
