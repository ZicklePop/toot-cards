const mastodonURIRegex =
  /(\w+:\/?\/?)?([\w\d]+\.[\w\d]{2,})?\/?@?([\w\d]+)@?([\w\d]+\.[\w\d]{2,})?\/?(\d+)?/i

export default function getUrlParts(url = []) {
  const urlParts = decodeURIComponent(url.join('/')).match(mastodonURIRegex)
  let [, protocol, host, user, external, status] = urlParts
  protocol = `${protocol?.split(':')[0]}` || 'https'
  return {
    external,
    host,
    protocol,
    status,
    user,
  }
}
