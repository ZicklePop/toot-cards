import getUrlParts from '../../lib/get-url-parts'
import getApiFromParts from '../../lib/get-api-from-parts'

// example 'https://nyan.lol/@zicklepop@nyan.lol/109391055794397972'

async function fetchData(url) {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export default async function response(req, res) {
  const { url } = req.query
  const api = getApiFromParts(getUrlParts(url))
  const json = await fetchData(api)

  res.status(200).json({ ...json })
}
