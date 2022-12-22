import getStatusFromParams from '../../lib/get-status-from-params'

export default async function response({ query: { url } }, res) {
  console.log('🐞', url)
  const json = await getStatusFromParams(url)
  res.status(200).json({ ...json })
}
