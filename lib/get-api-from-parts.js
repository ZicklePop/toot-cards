import checkRedirect from './check-redirect'
import getUrlParts from './get-url-parts'

export default async function getApiFromParts({
  external,
  host,
  protocol,
  status,
  user,
}) {
  let apiUrl = `${protocol}://${host}/api/v1/statuses/${status}`
  if (external) {
    const statusUrl = `${protocol}://${host}/@${user}@${external}/${status}`
    const actualUrl = await checkRedirect(statusUrl)
    const newParts = getUrlParts(actualUrl.split('/'))
    apiUrl = await getApiFromParts(newParts)
  }
  return apiUrl
}
