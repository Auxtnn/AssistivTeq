import imageUrlBuilder from "@sanity/image-url";

import { createClient } from "next-sanity";


// creating client

export const client = createClient({
    projectId: "k6yif4a4",
    dataset: "production",
    apiVersion: "2023-12-16",
    useCdn: false,
  });
  
  const builder = imageUrlBuilder(client);
  export const urlFor = (source) => builder.image(source);