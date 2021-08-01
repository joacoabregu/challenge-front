import { ItemProps } from "../types/types";
import "../styles/Item.css";
export default function Item({ item }: ItemProps) {
  let price;
  if (item.offer) {
    price = item.offer.price;
  } else {
    price = item.price;
  }
  return (
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
  );
}
