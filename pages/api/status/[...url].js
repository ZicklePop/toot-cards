import getStatusFromParams from '../../../lib/get-status-from-params'

export const config = {
  runtime: 'edge',
}

function cleanUrl(url = '') {
  return url.pathname.replace('/api/status/', '')
}

export default async function handler(req) {
  const url = cleanUrl(req.nextUrl)
  const json = await getStatusFromParams(url.split('/'))
  return new Response(JSON.stringify(json), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
