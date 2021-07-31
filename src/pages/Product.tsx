import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Form from "../components/Form";
import "../styles/React-Image-Gallery.css";
import { Comment, Item, Items } from "../types/interfaces";
import { selectItems, selectStatus } from "../state/itemsSlice";
import { useAppSelector } from "../state/hooks";

export default function Product() {
  let items: Items = useAppSelector(selectItems);
  let status = useAppSelector(selectStatus);
  let { id } = useParams<{ id: string }>();
  const url: string =
    "https://rooftop-api-rest-frontend.herokuapp.com/questions";
  let [comments, setComments] = useState<Comment[] | []>([]);

  useEffect(() => {
    let urlGET: string = url + "?item_id=" + id;
    axios
      .get(urlGET)
      .then((response: AxiosResponse) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  let item: Item | undefined = items.find((item) => item.id === Number(id));
  let data;
  if (!comments.length) {
    data = <p>No hay comentarios</p>;
  } else {
    data = comments.map((comment: Comment) => {
      return (
        <div key={comment.sent_at}>
          <p>{comment.question} </p>
          <p>{comment.answer} </p>
          <p>{comment.sent_at} </p>
        </div>
      );
    });
  }
  if (!item) {
    return <p>No exite este producto</p>;
  }
  let itemImages = item.images.map((image) => {
    return {
      original: image,
      thumbnail: image,
    };
  });
  return (
    <>
      <ImageGallery items={itemImages} />
      <div>
        <h1> {item.title} </h1>
        <p>
          {item.currency} {item.price}
        </p>
      </div>
      <Form urlPOST={url} />
      <h2>Comentarios</h2>
      {data}
    </>
  );
}
