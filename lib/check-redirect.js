import fetch from 'isomorphic-unfetch'

export default async function checkRedirect(url) {
  const res = await fetch(url, { method: 'HEAD' })
  return res.url
}
