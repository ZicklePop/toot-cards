import fetch from 'isomorphic-unfetch'
import getUrlParts from './get-url-parts'
import getApiFromParts from './get-api-from-parts'

async function fetchData(url) {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export default async function getStatusFromParams(params) {
  const api = await getApiFromParts(getUrlParts(params))
  return await fetchData(api)
}
