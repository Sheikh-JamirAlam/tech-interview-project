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
    <section className="" id="hero">
      <div className="container mx-auto">
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
                className="mx-auto object-cover object-center"
                fetchPriority="high"
                height={1500}
                image={image}
                loading="eager"
                width={2500}
                quality={100}
              />
            </div>
          )}
          <div className="w-fit flex flex-wrap justify-center mx-auto mt-7.5 text-base">
            {title?.split("|").map((text, index) => 
              <div key={index} className="flex items-center group">
                <h1 className="w-fit px-2 text-[#9C9C9D] hover:text-black transition-colors">
                  {text}
                </h1>
                <p className="text-[#9C9C9D] group-last:hidden">|</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
