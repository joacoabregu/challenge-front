import { ItemProps } from "../types/types";

export default function Item({ item }: ItemProps) {
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
}
