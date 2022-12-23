import Toot from '../../ui/toot'
import getStatusFromParams from '../../lib/get-status-from-params'

export default async function Page({ params: { url } }) {
  const json = await getStatusFromParams(url)

  return (
    <>
      <Toot {...json} />
    </>
  )
}
