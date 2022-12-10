import type { Products } from "../../types/typings";
import ProductCard from "./ProductCard";

export default function ProductFeeds({ products }: Products) {
  return (
    <div>
      {products.map(
        ({
          id,
          title,
          price,
          description,
          category,
          image,
        }: Products["products"]) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        )
      )}
    </div>
  );
}
