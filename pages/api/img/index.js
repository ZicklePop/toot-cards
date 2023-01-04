import OGToot from '../../../ui/og-toot'
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

const font = fetch(
  new URL('../../../public/OpenSans-Regular.ttf', import.meta.url)
).then(res => res.arrayBuffer())
const boldFont = fetch(
  new URL('../../../public/OpenSans-SemiBold.ttf', import.meta.url)
).then(res => res.arrayBuffer())

function getObj(searchParams) {
  const obj = {}
  searchParams.forEach((value, key) => {
    obj[key] = value
  })
  return obj
}

export default async function handler(req) {
  const fontData = await font
  const boldFontData = await boldFont
  const config = {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Open Sans',
        data: fontData,
        style: 'normal',
      },
      {
        name: 'Open Sans Bold',
        data: boldFontData,
        style: 'normal',
      },
    ],
  }

  try {
    const { searchParams } = new URL(req.url)
    const data = getObj(searchParams)
    return new ImageResponse(<OGToot {...data} />, config)
  } catch (e) {
    return new ImageResponse(
      (
        <div tw="text-3xl bg-white h-full w-full flex text-center items-center justify-center">
          <p
            style={{
              fontFamily: '"Open Sans"',
            }}
          >{`Failed to generate image with error: ${e.message}`}</p>
        </div>
      ),
      config
    )
  }
}
