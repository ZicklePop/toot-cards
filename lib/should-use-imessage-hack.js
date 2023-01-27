import { headers } from 'next/headers'

export default async function shouldUseImessageHack() {
  const userHeaders = await headers()
  const userAgent = userHeaders.get('user-agent')
  return userAgent.includes('Facebot Twitterbot')
}
