import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "../components/Form";

import "../styles/React-Image-Gallery.css";

interface Comment {
  question: string;
  customer_name: string;
  answer: string;
  sent_at: string;
}

export default function Product() {
  let { id } = useParams<{ id: string }>();
  let [comments, setComments] = useState([]);

  useEffect(() => {
    let url: string =
      "https://rooftop-api-rest-frontend.herokuapp.com/questions?item_id=" + id;
    axios
      .get(url)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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
  return (
    <>
      <ImageGallery items={item.images} />
      <div>
        <h1> {item.title} </h1>
        <p>
          {item.currency} {item.price}
        </p>
      </div>
      <Form />
      <h2>Comentarios</h2>
      {data}
    </>
  );
}
