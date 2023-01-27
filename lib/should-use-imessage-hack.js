import { headers } from 'next/headers'

export default async function shouldUseIMessageHack() {
  const userHeaders = await headers()
  const userAgent = userHeaders.get('user-agent')
  return userAgent.includes('Facebot Twitterbot')
}
