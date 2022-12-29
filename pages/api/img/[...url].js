import OGToot from '../../../ui/og-toot'
import getStatusFromParams from '../../../lib/get-status-from-params'
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

function cleanUrl(url = '') {
  return url.pathname.replace('/api/img/', '')
}

export default async function handler(req) {
  const url = cleanUrl(req.nextUrl)
  try {
    const json = await getStatusFromParams(url.split('/'))
    return new ImageResponse(<OGToot {...json} />, {
      width: 1200,
      height: 630,
    })
  } catch (e) {
    return new Response(`Failed to generate image: ${e}`, {
      status: 500,
    })
  }
}
