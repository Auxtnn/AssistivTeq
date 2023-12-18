import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, token } from '../env'

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
})
export async function getPosts() {
  try {
    const query = `*[_type == "post"]{
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

    const result = await client.fetch(query);
    return result;
  } catch (error) {
    // Log the error or handle it as needed
    console.error('Error fetching posts:', error);
    throw error; // Optionally re-throw the error to propagate it to the caller
  }
}


export default client;