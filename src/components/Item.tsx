import { ItemProps } from "../types/types";
import "../styles/Item.css";
import { Link } from "react-router-dom";
import "../styles/Item.css";
import { dateDifference } from "../helpers/functions";
export default function Item({ item }: ItemProps) {
  let price: string;
  let priceClass: string = "";
  let daysOffer: number = 0;
  let hoursOffer: number = 0;
  if (item.offer) {
    price = item.offer.price.toString();
    priceClass = "item-price--alert";
    let differenceOffer = dateDifference(item.offer?.expires_at);
    daysOffer = differenceOffer.days;
    hoursOffer = differenceOffer.hours;
  } else {
    price = item.price;
  }
  let url = "/catalogo/detalle/" + item.id;
  return (
    <div className="item" key={item.id}>
      <img src={item.images[0]} alt="product"></img>
      <div className="item-text">
        <p className="item-title">{item.title}</p>
        <p
          className={`item-price ${priceClass}`}
        >{`${item.currency} ${price}`}</p>
        {item.offer && (
          <p>{`Esta oferta finaliza en ${daysOffer.toString()} días, ${hoursOffer.toString()} horas`}</p>
        )}
        <Link to={url}>Ver más</Link>
      </div>
    </div>
  );
}
