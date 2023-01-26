export default function formatDate(input, small = false) {
  if (!input) return ''
  const date = new Date(input)
  const prettyDate = new Intl.DateTimeFormat('en-US', {
    month: small ? 'numeric' : 'short',
    day: 'numeric',
    year: small ? '2-digit' : 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h12',
    timeZoneName: 'short',
  }).format(date)
  return prettyDate
}
