import RenderToot from './render-toot'

export default function Page() {
  // i wish i could just do this
  // { params: { url } }
  // const json = await getStatusFromParams(url)
  return <RenderToot />
}
