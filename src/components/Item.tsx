import { ItemProps } from "../types/types";
import "../styles/Item.css";
import { Link } from "react-router-dom";
export default function Item({ item }: ItemProps) {
  let price;
  if (item.offer) {
    price = item.offer.price;
  } else {
    price = item.price;
  }
  let url = "/catalogo/detalle/" + item.id;
  return (
    <Link to={url}>
      <div key={item.id} className="item">
        <img src={item.images[0]} alt="product"></img>
        <div>
          <p className="item-title">{item.title}</p>
          <p>
            {item.currency}
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
}
