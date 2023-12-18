import { groq } from "next-sanity";
import client from "./client";

export async function getPosts() {
  try {
    const query = groq `*[_type == "post"]{
      _id,
      title,
      slug,
      author-> { name },
      mainImage {
        asset -> {
          url
        }
      },
      categories[]-> { title },
      publishedAt,
      body
    }`;

    const sanityQuery = client.fetch(query);

    const externalURL = url; 
    const externalData = fetch(externalURL).then((res) => res.json());

    const [sanityResult, externalResult] = await Promise.all([
      sanityQuery,
      externalData,
    ]);

    const postsFromSanity = sanityResult?.data || [];
    const dataFromExternal = externalResult || [];

    // Combine the results from Sanity and the external URL
    const combinedData = {
      postsFromSanity,
      dataFromExternal,
    };

    return combinedData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
