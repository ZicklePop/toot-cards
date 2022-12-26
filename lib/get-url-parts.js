import mastodonURIRegex from './mastodon-uri-regex'

export default function getUrlParts(url = []) {
  const urlParts = decodeURIComponent(url.join('/')).match(mastodonURIRegex)
  let [, protocol, host, user, external, status] = urlParts
  protocol = protocol ? protocol?.split(':')[0] : 'https'
  host = host || external
  if (host === external) {
    external = null
  }
  return {
    external,
    host,
    protocol,
    status,
    user,
  }
}
