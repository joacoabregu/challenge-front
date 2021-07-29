import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { Items } from "../types/interfaces";

const initialState: Items = [
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
  {
    id: 5,
    title: "Guapa Ladrillo Coche",
    currency: "₨",
    price: "660.00",
    offer: null,
    images: [
      "http://placeimg.com/640/480",
      "http://placeimg.com/640/480",
      "http://placeimg.com/640/480",
    ],
  },
  {
    id: 6,
    title: "Genérico Hormigon Queso",
    currency: "₴",
    price: "837.00",
    offer: {
      price: 669.6,
      expires_at: "2022-04-05T00:14:43.004Z",
    },
    images: [
      "http://placeimg.com/640/480",
      "http://placeimg.com/640/480",
      "http://placeimg.com/640/480",
    ],
  },
  {
    id: 7,
    title: "Práctico Ladrillo Bacon",
    currency: "¥",
    price: "295.00",
    offer: {
      price: 250.75,
      expires_at: "2022-03-30T10:29:05.448Z",
    },
    images: [
      "http://placeimg.com/640/480",
      "http://placeimg.com/640/480",
      "http://placeimg.com/640/480",
    ],
  },
  {
    id: 8,
    title: "Práctico Ladrillo Mesa",
    currency: "$",
    price: "374.00",
    offer: null,
    images: [
      "http://placeimg.com/640/480",
      "http://placeimg.com/640/480",
      "http://placeimg.com/640/480",
    ],
  },
  {
    id: 9,
    title: "Sabroso Algodón Guantes",
    currency: "₨",
    price: "825.00",
    offer: {
      price: 495,
      expires_at: "2022-06-23T11:05:34.849Z",
    },
    images: [
      "http://placeimg.com/640/480",
      "http://placeimg.com/640/480",
      "http://placeimg.com/640/480",
    ],
  },
  {
    id: 10,
    title: "Artesanal Acero Salchichas",
    currency: "£",
    price: "861.00",
    offer: null,
    images: [
      "http://placeimg.com/640/480",
      "http://placeimg.com/640/480",
      "http://placeimg.com/640/480",
    ],
  },
];

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
      
  },
});

//export const { increment } = itemsSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectItems = (state: RootState) => state.items;
export default itemsSlice.reducer;
