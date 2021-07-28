import banner from "./banner_1.jpg";
import _, { shuffle } from "underscore";
export default function Home() {
  let items = [
    {
      id: 1,
      title: "Increible Ladrillo Mesa",
      currency: "R$",
      price: "493.00",
      offer: {
        price: 320.45,
        expires_at: "2022-03-17T04:04:06.028Z",
      },
      images: [
        "http://placeimg.com/640/480",
        "http://placeimg.com/640/480",
        "http://placeimg.com/640/480",
      ],
    },
    {
      id: 2,
      title: "Genérico Madera Pantalones",
      currency: "₨",
      price: "785.00",
      offer: {
        price: 667.25,
        expires_at: "2021-08-24T23:58:59.988Z",
      },
      images: [
        "http://placeimg.com/640/480",
        "http://placeimg.com/640/480",
        "http://placeimg.com/640/480",
      ],
    },
    {
      id: 3,
      title: "Guapa Plástico Silla",
      currency: "₦",
      price: "423.00",
      offer: null,
      images: [
        "http://placeimg.com/640/480",
        "http://placeimg.com/640/480",
        "http://placeimg.com/640/480",
      ],
    },
    {
      id: 4,
      title: "Sabroso Acero Pescado",
      currency: "﷼",
      price: "335.00",
      offer: null,
      images: [
        "http://placeimg.com/640/480",
        "http://placeimg.com/640/480",
        "http://placeimg.com/640/480",
      ],
    },
  ];

  return (
    <main>
      <img src={banner} alt="banner" />
      {items.map((item) => {
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
