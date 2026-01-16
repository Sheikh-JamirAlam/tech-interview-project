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
      <div className="container mx-auto px-4 md:px-6">
        <div className="w-full mx-auto flex justify-between">
          <div className="flex max-w-125 flex-col items-center justify-center">
            <p className="font-medium">{eyebrow}</p>
            <div className="mt-6 flex flex-col items-center space-y-4 text-center sm:space-y-6 md:text-center">
              <h2 className="mx-auto max-w-85 font-medium text-3xl">{title}</h2>
              <RichText
                className="text-left text-base"
                richText={richText}
              />
            </div>
            <div className="mt-8">
              <SanityButtons
                buttonClassName="w-full sm:w-auto px-6.5 py-1.5 rounded-none text-[#737373] dark:border-[#737373] dark:bg-transparent dark:hover:bg-input/30 text-base"
                buttons={buttons}
                className="mb-8 grid w-full gap-2 sm:w-fit sm:grid-flow-col lg:justify-start"
              />
            </div>
          </div>
          {image && (
            <div className="">
              <SanityImage
                className="object-cover"
                fetchPriority="high"
                height={800}
                image={image}
                loading="eager"
                width={800}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
