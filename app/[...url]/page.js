import getStatusFromParams from '../../lib/get-status-from-params'

export default async function Page({ params: { url } }) {
  const json = await getStatusFromParams(url)

  return (
    <>
      <pre>
        <code>{JSON.stringify(json, null, 2)}</code>
      </pre>
    </>
  )
}
