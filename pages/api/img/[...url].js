import Toot from '../../../../ui/toot'
import getStatusFromParams from '../../../lib/get-status-from-params'
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

// TODO: Get around dangerouslySetInnerHTML
// and make sure every div containing multiple
// children is flex.
// Do classes need to be defined with tw=""?
// https://github.com/vercel/examples/blob/main/edge-functions/vercel-og-nextjs/pages/api/tailwind.tsx

export default async function handler(req) {
  const { searchParams } = req.nextUrl
  const url = searchParams.get('url')
  try {
    const json = await getStatusFromParams(url.split('/'))
    return new ImageResponse(<Toot {...json} />, {
      width: 1200,
      height: 630,
    })
  } catch (e) {
    return new Response('Failed to generate image', { status: 500 })
  }
}
