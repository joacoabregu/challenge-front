export interface Comment {
  question: string;
  customer_name: string;
  answer: string;
  sent_at: string;
}

export interface FormProps {
  urlPOST: string;
}

export interface Item {
  id: number;
  title: string;
  currency: string;
  price: string;
  offer: { price: number; expires_at: string } | null;
  images: string[];
}

export interface Items extends Array<Item> {}
