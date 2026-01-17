import { Badge } from "@workspace/ui/components/badge";

import type { PagebuilderType } from "@/types";
import { RichText } from "../elements/rich-text";
import { SanityButtons } from "../elements/sanity-buttons";
import { SanityImage } from "../elements/sanity-image";

type FeatureWithImageProps = PagebuilderType<"featureWithImage">;

export function FeatureWithImage({
  eyebrow,
  title,
  buttons,
  image,
  richText,
}: FeatureWithImageProps) {
  return (
    <section className={`${eyebrow ? "bg-[#DFDAD7] py-32" : "my-6 md:my-32"}`} id="features">
      <div className="container mx-auto">
        <div className="w-full mx-auto grid lg:grid-cols-2 justify-center">
          <div className="max-w-125 order-2 lg:order-1 col-span-1 flex mx-auto flex-col items-center justify-center">
            {eyebrow && <p className="mt-12 lg:mt-0 font-medium">{eyebrow}</p>}
            <div className={`${eyebrow ? "mt-6" : "mt-12 lg:mt-0"} flex flex-col items-center space-y-4 text-center sm:space-y-6 md:text-center`}>
              <h2 className="mx-auto max-w-86 font-medium text-3xl">{title}</h2>
              <RichText
                className="text-left text-base"
                richText={richText}
              />
            </div>
            <div className="mt-8">
              <SanityButtons
                buttonClassName="w-fit mx-auto px-6.5 py-1.5 rounded-none text-[#737373] dark:border-[#737373] dark:bg-transparent dark:hover:bg-input/30 text-sm sm:text-base"
                buttons={buttons}
                className="mb-8 grid gap-y-2.5 sm:w-fit items-center"
              />
            </div>
          </div>
          {image && (
            <div className="order-1 lg:order-2 md:mx-8 lg:mx-15 xl:mx-23.5">
              <SanityImage
                className={`${image.alt === "JAMB Image" ? "xl:w-[70%]" : ""} mx-auto lg:mx-0 object-cover object-center`}
                fetchPriority="high"
                height={1500}
                image={image}
                loading="eager"
                width={1500}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
