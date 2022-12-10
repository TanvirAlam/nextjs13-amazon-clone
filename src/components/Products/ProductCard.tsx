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
    <div className="relative z-30 m-5 flex flex-col rounded-md bg-white p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <div className="flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          objectFit="contain"
        />
      </div>
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="my-2 text-xs line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="DKK" />
      </div>
      {hasPrime && (
        <div className="-mt-5 flex items-center space-x-2">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="button mt-auto">Add to Basket</button>
    </div>
  );
}
