export default async function checkRedirect(url) {
  const res = await fetch(url, { method: 'HEAD' })
  if (!res.ok) {
    throw new Error('Toot redirect check failed')
  }
  return res.url
}
