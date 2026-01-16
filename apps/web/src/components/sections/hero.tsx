import { Badge } from "@workspace/ui/components/badge";

import type { PagebuilderType } from "@/types";
import { RichText } from "../elements/rich-text";
import { SanityButtons } from "../elements/sanity-buttons";
import { SanityImage } from "../elements/sanity-image";

type HeroBlockProps = PagebuilderType<"hero">;

export function HeroBlock({
  title,
  buttons,
  badge,
  image,
  richText,
}: HeroBlockProps) {
  return (
    <section className="px-9.5" id="hero">
      <div className="">
        <div className="">
          {/* <div className="grid h-full grid-rows-[auto_1fr_auto] items-center justify-items-center gap-4 text-center lg:items-start lg:justify-items-start lg:text-left">
            <Badge variant="secondary">{badge}</Badge>
            <div className="grid gap-4">
              <h1 className="text-balance font-semibold text-4xl lg:text-6xl">
                {title}
              </h1>
              <RichText
                className="font-normal text-base md:text-lg"
                richText={richText}
              />
            </div>
            <SanityButtons
              buttonClassName="w-full sm:w-auto"
              buttons={buttons}
              className="mb-8 grid w-full gap-2 sm:w-fit sm:grid-flow-col lg:justify-start"
            />
          </div> */}

          {image && (
            <div className="w-full">
              <SanityImage
                className="w-full object-cover"
                fetchPriority="high"
                height={800}
                image={image}
                loading="eager"
                width={800}
              />
            </div>
          )}
          <h1 className="w-fit mx-auto mt-7.5 text-[#9C9C9D] text-base text-center">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
