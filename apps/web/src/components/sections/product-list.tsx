import type { PagebuilderType } from "@/types";
import { SanityImage } from "../elements/sanity-image";

type ProductListProps = PagebuilderType<"productList">;

type ProductProps = {
  type?: string;
  product: NonNullable<ProductListProps["products"]>[number];
};

function Product({ type, product }: ProductProps) {
  const { title, subtitle, image } = product ?? {};
  return (
    <div className="flex flex-col items-center justify-center">
      {image && (
        <div className={`${type === "Our latest furniture" ? "h-63.5 flex items-center" : ""}`}>
          <SanityImage
            className=""
            fetchPriority="high"
            height={332}
            image={image}
            loading="eager"
            width={332}
          />
        </div>
      )}
      <h2 className="mt-3 font-bold text-[#737373]">{title}</h2>
      <p className="text-[#737373]">{subtitle}</p>
    </div>
  );
}

export function ProductList({
  title,
  products,
}: ProductListProps) {
  return (
    <section className="py-9.5 bg-[#E3E3E3]" id="products">
      <h2 className="font-semibold text-2xl text-center">{title}</h2>
      {Array.isArray(products) && products.length > 0 && (
        <div className="mx-auto mt-8 flex justify-evenly">
          {products.map((product, index) => (
            <Product
              type={title}
              product={product}
              key={`Product-${product?._key}-${index}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
