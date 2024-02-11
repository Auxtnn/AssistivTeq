import {client} from "./client"
import groq from 'groq'




// querying 
export const getData = async () => {
    try {
      const res = await client.fetch(
        groq`*[_type == 'post']
        {
        title, 
        publishedAt, 
        slug, 
        overview,
        author->{name}, 
        mainImage{asset->{url}}, 
        "categories": categories[]->{title},
        body[]
      }`,
        {},
        {
          // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
          cache: "force-cache",
          next: { tags: ["post"] },
        }
      );
      console.log(res)
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  