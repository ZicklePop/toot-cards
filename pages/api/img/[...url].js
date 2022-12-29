/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import ClockIcon from '../../../ui/icons/clock'
import EditIcon from '../../../ui/icons/edit'
import FavouriteIcon from '../../../ui/icons/favourite'
import ReblogIcon from '../../../ui/icons/reblog'
import ReplyIcon from '../../../ui/icons/reply'
import formatDate from 'lib/format-date'
import getStatusFromParams from '../../../lib/get-status-from-params'
import sanitizeHtml from 'sanitize-html'
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

function cleanUrl(url = '') {
  return url.pathname.replace('/api/img/', '')
}

function Toot({
  account: { avatar, display_name, username, url },
  content,
  created_at,
  edited_at,
  favourites_count,
  // media_attachments,
  reblogs_count,
  replies_count,
}) {
  const host = url.split('/')[2]
  return (
    <div tw="flex h-screen flex-col w-full bg-neutral-100 p-5">
      <div tw="flex pb-4 flex-row items-center">
        <div tw="flex pr-5">
          <img src={avatar} tw="h-42 w-42 rounded-lg" />
        </div>
        <div tw="flex flex-col w-full text-5xl">
          <div tw="flex font-bold w-full">{display_name}</div>
          <div tw="flex w-full">
            @{username}
            <span tw="text-neutral-500">@{host}</span>
          </div>
        </div>
      </div>
      <div tw="flex grow items-center w-full text-7xl">
        <div>
          {sanitizeHtml(content, {
            allowedTags: '',
            allowedAttributes: '',
          })}
        </div>
      </div>
      <div tw="text-4xl justify-between w-full flex flex-row pt-4 text-neutral-500">
        <div tw="flex flex-row pb-0">
          <div tw="flex pr-0 pl-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              tw="h-12 w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <div tw="flex pl-2">{replies_count}</div>
          </div>
          <div tw="flex pr-0 pl-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              tw="h-12 w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            <div tw="flex pl-2">{reblogs_count}</div>
          </div>
          <div tw="flex pr-0 pl-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              tw="h-12 w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <div tw="flex pl-2">{favourites_count}</div>
          </div>
        </div>
        <div tw="flex pl-5">
          <div tw="flex px-5 pb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              tw="h-12 w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div tw="flex pl-2">{formatDate(created_at)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default async function handler(req) {
  const url = cleanUrl(req.nextUrl)
  // try {
  const json = await getStatusFromParams(url.split('/'))
  return new ImageResponse(<Toot {...json} />, {
    width: 1200,
    height: 630,
  })
  // } catch (e) {
  //   return new Response('Failed to generate image', { status: 500 })
  // }
}
