import Toot from '../../ui/toot'
import getStatusFromParams from '../../lib/get-status-from-params'
import Error from '../error'

export default async function Page({ params: { url } }) {
  let json = {}
  try {
    json = await getStatusFromParams(url)
  } catch (error) {
    return <Error error={error.messsage} />
  }

  return (
    <div className="my-3 flex w-full flex-col">
      <div id="toot">
        <Toot {...json} />
      </div>
      <div className="mx-3">
        {json?._context?.descendants.map(props => (
          <Toot key={props.id} kind={'reply'} {...props} />
        ))}
      </div>
    </div>
  )
}
