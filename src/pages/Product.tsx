import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";
import "../styles/React-Image-Gallery.css";
export default function Product() {
  let { id } = useParams<{ id: string }>();
  console.log(id);
  let item = {
    id: 1,
    title: "Increible Ladrillo Mesa",
    currency: "R$",
    price: "493.00",
    offer: {
      price: 320.45,
      expires_at: "2022-03-17T04:04:06.028Z",
    },
    images: [
      { original: "http://placeimg.com/640/480" },
      { original: "http://placeimg.com/640/480" },
      { original: "http://placeimg.com/640/480" },
    ],
  };
  return (
    <>
      <ImageGallery items={item.images} />
    </>
  );
}
