export default function getApiFromParts({ protocol, host, status }) {
  return decodeURIComponent(`${protocol}//${host}/api/v1/statuses/${status}`)
}
