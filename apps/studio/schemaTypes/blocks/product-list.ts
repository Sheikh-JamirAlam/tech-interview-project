import { ImageIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

import { imageWithAltField } from "@/schemaTypes/common";

const product = defineField({
  name: "product",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "The product name",
    }),
    defineField({
      name: "subtitle",
      type: "string",
      description: "The product subtitle",
    }),
    imageWithAltField(),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "image",
    },
    prepare: ({ title, media }) => ({
      title,
      subtitle: "Product",
      media,
    }),
  },
});

export const productList = defineType({
  name: "productList",
  type: "object",
  icon: ImageIcon,
  description:
    "A list of products, each with an image, title and subtitle",
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "The product name",
    }),
    defineField({
      name: "products",
      type: "array",
      description: "The products to display in the grid",
      of: [product],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title,
      subtitle: "Product List",
    }),
  },
});
