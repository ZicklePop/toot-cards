export default function formatDate(input) {
  if (!input) return ''
  const date = new Date(input)
  const prettyDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h12',
  }).format(date)
  return prettyDate
}
