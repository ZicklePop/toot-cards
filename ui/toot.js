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
    <div className="w-full">
      <div className="px-3">
        <UserDetails {...account} />
        <Content content={content} />
      </div>
      <Attachments attachments={media_attachments} />
      <div className="px-3">
        <StatusDetails {...status} />
      </div>
    </div>
  )
}
