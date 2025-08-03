import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: "categories", // Changed to match CollectionSlug type
  })

  return Response.json(data)
}
// https://localhost:3000/my-route