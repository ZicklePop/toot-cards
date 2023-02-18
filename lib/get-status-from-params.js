import getUrlParts from './get-url-parts'
import getApiFromParts from './get-api-from-parts'

async function fetchData(url) {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Toot fetching failed')
  }
  const data = await res.json()
  if (data.replies_count > 0 || !!data.in_reply_to_id) {
    const contextRes = await fetch(`${url}/context`)
    if (res.ok) {
      data._context = await contextRes.json()
    }
  }
  return data
}

export default async function getStatusFromParams(params) {
  const api = await getApiFromParts(getUrlParts(params))
  return await fetchData(api)
}
