import Link from "next/link";

import { sanityFetch } from "@/lib/sanity/live";
import { queryFooterData, queryGlobalSeoSettings } from "@/lib/sanity/query";
import type {
  QueryFooterDataResult,
  QueryGlobalSeoSettingsResult,
} from "@/lib/sanity/sanity.types";
import { Logo } from "./logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
} from "./social-icons";

type SocialLinksProps = {
  data: NonNullable<QueryGlobalSeoSettingsResult>["socialLinks"];
};

type FooterProps = {
  data: NonNullable<QueryFooterDataResult>;
  settingsData: NonNullable<QueryGlobalSeoSettingsResult>;
};

export async function FooterServer() {
  const [response, settingsResponse] = await Promise.all([
    sanityFetch({
      query: queryFooterData,
    }),
    sanityFetch({
      query: queryGlobalSeoSettings,
    }),
  ]);

  if (!(response?.data && settingsResponse?.data)) {
    return <FooterSkeleton />;
  }
  return <Footer data={response.data} settingsData={settingsResponse.data} />;
}

function SocialLinks({ data }: SocialLinksProps) {
  if (!data) {
    return null;
  }

  const { facebook, twitter, instagram, youtube, linkedin } = data;

  const socialLinks = [
    {
      url: instagram,
      Icon: InstagramIcon,
      label: "Follow us on Instagram",
    },
    {
      url: facebook,
      Icon: FacebookIcon,
      label: "Follow us on Facebook",
    },
    { url: twitter, Icon: XIcon, label: "Follow us on Twitter" },
    {
      url: linkedin,
      Icon: LinkedinIcon,
      label: "Follow us on LinkedIn",
    },
    {
      url: youtube,
      Icon: YoutubeIcon,
      label: "Subscribe to our YouTube channel",
    },
  ].filter((link) => link.url);

  return (
    <ul className="flex items-center space-x-6 text-muted-foreground">
      {socialLinks.map(({ url, Icon, label }, index) => (
        <li
          className="font-medium hover:text-primary"
          key={`social-link-${url}-${index.toString()}`}
        >
          <Link
            aria-label={label}
            href={url ?? "#"}
            prefetch={false}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon className="fill-muted-foreground hover:fill-primary/80 dark:fill-zinc-400 dark:hover:fill-primary" />
            <span className="sr-only">{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function FooterSkeleton() {
  return (
    <footer className="mt-16 pb-8">
      <section className="container mx-auto px-4 md:px-6">
        <div className="h-[500px] lg:h-auto">
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  <div className="h-10 w-20 animate-pulse rounded bg-muted" />
                </span>
                <div className="mt-6 h-16 w-full animate-pulse rounded bg-muted" />
              </div>
              <div className="flex items-center space-x-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    className="h-6 w-6 animate-pulse rounded bg-muted"
                    key={i}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:gap-20">
              {[1, 2, 3].map((col) => (
                <div key={col}>
                  <div className="mb-6 h-6 w-24 animate-pulse rounded bg-muted" />
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        className="h-4 w-full animate-pulse rounded bg-muted"
                        key={item}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center lg:flex-row lg:items-center lg:text-left">
            <div className="h-4 w-48 animate-pulse rounded bg-muted" />
            <div className="flex justify-center gap-4 lg:justify-start">
              <div className="h-4 w-32 animate-pulse rounded bg-muted" />
              <div className="h-4 w-24 animate-pulse rounded bg-muted" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

function Footer({ data, settingsData }: FooterProps) {
  const { subtitle, columns } = data;
  const { siteTitle, logo, socialLinks } = settingsData;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-50 pt-8 pb-11 bg-[#E3E3E3]">
      <section className="container mx-auto text-[#9C9C9D]">
        <div className="grid lg:grid-cols-5 gap-x-10 gap-y-9">
          <div className="font-medium">
            <p>Tel: +44 (0) 207 730 2122</p><p>95-97 Pimlico Rd</p><p>London SW1W 8PH</p>
          </div>
          <div className="font-medium">
            <a href="mailto:hello@jamb.co.uk" className="hover:text-primary transition-colors">hello@jamb.co.uk</a>
          </div>
          <div></div>
          <div className="sm:col-span-2">
            <p className="font-medium">Newsletter</p>
            <div className="mt-3 flex gap-x-0.5">
              <input placeholder="Search" className="w-full sm:w-100 h-11 px-4 bg-white outline-0 border border-white focus:border-neutral-600 transition-colors" />
              <button className="w-38 h-11 bg-white hover:bg-neutral-600 hover:text-white transition-colors">Subscribe</button>
            </div>
            <div className="mt-3 flex gap-x-2 items-center">
              <div className="w-3 h-3 rounded-full border border-[#9C9C9D]"></div>
              <p className="font-medium">I agree to our Privacy Policy</p>
            </div>
          </div>
        </div>
          {/* <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-4 text-center md:px-6 lg:flex-row lg:text-left"> */}
            {/* <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 md:gap-8 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  <Logo alt={siteTitle} image={logo} priority />
                </span>
                {subtitle && (
                  <p className="mt-6 text-muted-foreground text-sm dark:text-zinc-400">
                    {subtitle}
                  </p>
                )}
              </div>
              {socialLinks && <SocialLinks data={socialLinks} />}
            </div> */}
          <div className="w-full mt-9 grid lg:grid-cols-5 gap-x-10 gap-y-9">
            {Array.isArray(columns) && columns?.length > 0 && (
              columns.map((column, index) => (
                <div key={`column-${column?._key}-${index}`}>
                  {column?.sections?.map((section, index) => (
                    <div key={`section-${section?._key}-${index}`} className={`border border-t-[#9C9C9D] mb-9 last:mb-0`}>
                      <h3 className="mb-4 mt-3.5 font-medium text-black">{section?.title}</h3>
                      {section?.links && section?.links?.length > 0 && (
                        <ul className="space-y-4 text-[#9C9C9D]">
                          {section?.links?.map((link, columnIndex) => (
                            <li
                              className={`font-medium hover:text-primary transition-colors`}
                              key={`${link?._key}-${columnIndex}-column-${column?._key}`}
                            >
                              <Link
                                href={link.href ?? "#"}
                                rel={
                                  link.openInNewTab
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                target={link.openInNewTab ? "_blank" : undefined}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
          {/* </div> */}
          {/* <div className="mt-20 border-t pt-8">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 text-center font-normal text-muted-foreground text-sm md:px-6 lg:flex-row lg:items-center lg:text-left">
              <p>
                © {year} {siteTitle}. All rights reserved.
              </p>
              <ul className="flex justify-center gap-4 lg:justify-start">
                <li className="hover:text-primary">
                  <Link href="/terms">Terms and Conditions</Link>
                </li>
                <li className="hover:text-primary">
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div> */}
      </section>
    </footer>
  );
}
