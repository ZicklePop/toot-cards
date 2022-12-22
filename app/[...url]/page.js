import getUrlParts from '../../lib/get-url-parts'
import getApiFromParts from '../../lib/get-api-from-parts'

async function fetchData(url) {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export default async function Page({ params: { url } }) {
  const api = getApiFromParts(getUrlParts(url))
  const json = await fetchData(api)

  return (
    <>
      <pre>
        <code>{JSON.stringify(json, null, 2)}</code>
      </pre>
    </>
  )
}
