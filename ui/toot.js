import StatusDetails from './status-details'
import UserDetails from './user-details'
import Content from './content'
import Attachments from './attachments'

export default function Toot({
  url,
  created_at,
  replies_count,
  reblogs_count,
  favourites_count,
  edited_at,
  content,
  media_attachments,
  account,
}) {
  const status = {
    url,
    created_at,
    edited_at,
    replies_count,
    reblogs_count,
    favourites_count,
  }
  return (
    <div className=" w-full rounded-md bg-neutral-100 py-3 dark:bg-neutral-800 md:py-4">
      <div className="px-3 md:px-5">
        <UserDetails {...account} />
        <Content content={content} />
      </div>
      <Attachments attachments={media_attachments} />
      <div className="px-3 md:px-5">
        <StatusDetails {...status} />
      </div>
    </div>
  )
}
