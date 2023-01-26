import Toot from '../../ui/toot'
import getStatusFromParams from '../../lib/get-status-from-params'

export default async function Page({ params: { url } }) {
  // temp solution to fix NextJS build error
  // with newer versions of NextJS 13 and the
  // app dir experimental feature
  let json = {}
  try {
    json = await getStatusFromParams(url)
  } catch (error) {
    console.error(error)
  }

  return (
    <div className="my-3 flex w-full flex-col">
      <div id="toot">
        <Toot {...json} />
      </div>
    </div>
  )
}
