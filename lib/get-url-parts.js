export default function getUrlParts(url) {
  let [protocol, host, user, status] = url
  if (user.split('@').length > 2) {
    host = user.split('@')[2]
  }
  return { protocol, host, user, status }
}
