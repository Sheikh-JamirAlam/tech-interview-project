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
    <div className="min-w-[47.5%] md:min-w-[30.5%] lg:min-w-0 h-full lg:flex-1 flex flex-col items-center justify-center no-scrollbar">
      {image && (
        <div className={`w-full h-full ${type === "Our latest chimneypieces" ? "aspect-4/3" : "aspect-square"}`}>
          <SanityImage
            className="w-full h-full object-contain object-center"
            fetchPriority="high"
            height={3000}
            image={image}
            loading="eager"
            width={3000}
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
    <section className="bg-[#E3E3E3]" id="products">
      <div className="container py-9.5 mx-auto">
        <h2 className="font-medium text-2xl text-center">{title}</h2>
        {Array.isArray(products) && products.length > 0 && (
          <div className="mx-auto mt-8 flex gap-8 overflow-x-auto lg:overflow-visible lg:flex-wrap no-scrollbar">
            {products.map((product, index) => (
              <Product
                type={title}
                product={product}
                key={`Product-${product?._key}-${index}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
