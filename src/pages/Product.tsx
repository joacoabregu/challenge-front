import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Form from "../components/Form";
import "../styles/React-Image-Gallery.css";
import { Comment, Item, Items } from "../types/interfaces";
import { getItems, selectItems, selectStatus } from "../state/itemsSlice";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import Comments from "../components/Comments";

export default function Product() {
  let items: Items = useAppSelector(selectItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  let status = useAppSelector(selectStatus);
  let { id } = useParams<{ id: string }>();
  const url: string =
    "https://rooftop-api-rest-frontend.herokuapp.com/questions";

  let item: Item | undefined = items.find((item) => item.id === Number(id));

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
      <Comments id={id} />
    </>
  );
}
