import { LayoutGrid } from "lucide-react";
import { defineField, defineType } from "sanity";

import { buttonsField, imageWithAltField } from "@/schemaTypes/common";
import { customRichText } from "@/schemaTypes/definitions/rich-text";

export const featureWithImage = defineType({
  name: "featureWithImage",
  type: "object",
  icon: LayoutGrid,
  description:
    "A grid of features, each with an image, title and description",
  fields: [
    defineField({
      name: "eyebrow",
      type: "string",
      description: "Optional text that appears above the main title",
    }),
    defineField({
      name: "title",
      type: "string",
      description: "The main heading for this feature section",
    }),
    customRichText(["block"]),
    imageWithAltField(),
    buttonsField,
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Feature Images",
    }),
  },
});
