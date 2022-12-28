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
    <div tw="flex flex-col w-full bg-neutral-100 shadow-lg dark:bg-neutral-800 py-4">
      <div tw="flex pb-4 flex-row items-center">
        <div tw="flex pr-3">
          <img src={avatar} tw="h-16 w-16 rounded-md" />
        </div>
        <div tw="flex flex-col w-full">
          <div tw="flex font-bold w-full">{display_name}</div>
          <div tw="flex w-full">
            @{username}
            <span tw="text-neutral-500 dark:text-neutral-400">@{host}</span>
          </div>
        </div>
      </div>
      <div tw="flex w-full text-xl">
        {sanitizeHtml(content, {
          allowedTags: '',
          allowedAttributes: '',
        })}
      </div>
      <div tw="flex flex-row pt-4 text-neutral-500 dark:text-neutral-400">
        <div tw="flex flex-row pb-0">
          <div tw="flex pr-0 pl-3">
            <ReplyIcon />
            <div tw="flex pl-1">{replies_count}</div>
          </div>
          <div tw="flex pr-0 pl-3">
            <ReblogIcon />
            <div tw="flex pl-1">{reblogs_count}</div>
          </div>
          <div tw="flex pr-0 pl-3">
            <FavouriteIcon />
            <div tw="flex pl-1">{favourites_count}</div>
          </div>
        </div>
        <div tw="flex pl-3">
          <div tw="flex pr-3 pb-0">
            <ClockIcon />
            <div tw="flex pl-1">{formatDate(created_at)}</div>
          </div>
          {edited_at && (
            <div tw="flex pr-3">
              <EditIcon />
              <div tw="flex pl-1">{formatDate(edited_at)}</div>
            </div>
          )}
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
