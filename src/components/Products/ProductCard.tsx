import Image from "next/image";
import { useState } from "react";
import type { Products } from "../../types/typings";
import Currency from "react-currency-formatter";

import { AiFillStar } from "react-icons/ai";

const MAX_RATING = 5;
const MIN_RATING = 1;

export default function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
}: Products["products"]) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div>
      <p>{category}</p>
      <Image src={image} alt={title} width={200} height={200} />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar key={i} className="h-5" />
          ))}
      </div>

      <p>{description}</p>
      <div>
        <Currency quantity={price} currency="DKK" />
      </div>
      {hasPrime && (
        <div>
          <img src="https://links.papareact.com/fdw" alt="" />
          <p>FREE Next-day Delivery</p>
        </div>
      )}
      <button>Add to Basket</button>
    </div>
  );
}
