import Image from "next/image";
import Link from "next/link";

import type { Maybe, SanityImageProps } from "@/types";
import { SanityImage } from "./elements/sanity-image";

const LOGO_URL =
  "https://cdn.sanity.io/images/drvmygdg/production/670ff34d9957e5c965d00c9cc9bc4523bd871acd-108x45.png";

type LogoProps = {
  src?: Maybe<string>;
  image?: Maybe<SanityImageProps>;
  alt?: Maybe<string>;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function Logo({
  src,
  alt = "logo",
  image,
  width = 108,
  height = 40,
  priority = true,
}: LogoProps) {
  return (
    <Link className="" href="/">
      {image ? (
        <SanityImage
          alt={alt ?? "logo"}
          className="w-[108px]"
          // width={width}
          // height={height}
          decoding="sync"
          image={image}
          loading="eager"
        />
      ) : (
        <Image
          alt={alt ?? "logo"}
          className="h-10 w-[108px]"
          decoding="sync"
          height={height}
          loading="eager"
          priority={priority}
          src={src ?? LOGO_URL}
          width={width}
          quality={100}
        />
      )}
    </Link>
  );
}
