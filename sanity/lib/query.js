import imageUrlBuilder from '@sanity/image-url'

import {createClient} from 'next-sanity'

// creating client

const client = createClient({
  projectId: 'k6yif4a4',
  dataset: 'production',
  apiVersion: '2023-03-22',
  useCdn: false,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

// querying
export const getData = async () => {
  try {
    const res = await client.fetch(
      `*[_type == 'post' ]`,
      {},
      {
        // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
        cache: 'force-cache',
        next: {tags: ['post']},
      },
    )
    console.log(res)
    return res
  } catch (error) {
    console.log(error)
    return
  }
}
