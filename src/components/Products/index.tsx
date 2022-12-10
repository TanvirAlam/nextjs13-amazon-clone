import type { Products } from "../../types/typings";
import ProductCard from "./ProductCard";

export default function ProductFeeds({ products }: Products) {
  return (
    <div className="mx-auto grid grid-flow-row-dense md:-mt-52 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
