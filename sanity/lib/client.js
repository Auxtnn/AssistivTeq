import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn, url } from '../env'

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  url,
})


export default client;