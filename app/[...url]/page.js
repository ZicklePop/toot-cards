import Toot from '../../ui/toot'
import getStatusFromParams from '../../lib/get-status-from-params'

export default async function Page({ params: { url } }) {
  const json = await getStatusFromParams(url)

  return (
    <div className="my-3 flex w-full flex-col">
      <div id="toot">
        <Toot {...json} />
      </div>
    </div>
  )
}
