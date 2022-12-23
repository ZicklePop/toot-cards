import ClockIcon from './icons/clock'
import EditIcon from './icons/edit'
import FavouriteIcon from './icons/favourite'
import ReblogIcon from './icons/reblog'
import ReplyIcon from './icons/reply'
import formatDate from 'lib/format-date'

function StatusBox({ children, ...rest }) {
  return (
    <div className="flex pr-3" {...rest}>
      {children}
    </div>
  )
}

function StatusText({ children, ...rest }) {
  return (
    <div className="pl-1" {...rest}>
      {children}
    </div>
  )
}

function StatusTime({ time, ...rest }) {
  return (
    <time datetime={time} {...rest}>
      {formatDate(time)}
    </time>
  )
}

export default function StatusDetails({
  created_at,
  edited_at,
  favourites_count,
  reblogs_count,
  replies_count,
  url,
}) {
  return (
    <a href={url} className="flex flex-row items-center pt-3">
      <StatusBox title="created at">
        <ClockIcon />
        <StatusText>
          <StatusTime time={created_at} />
        </StatusText>
      </StatusBox>
      {edited_at && (
        <StatusBox title="edited at">
          <EditIcon />
          <StatusText>
            <StatusTime time={edited_at} />
          </StatusText>
        </StatusBox>
      )}
      <StatusBox title="reply count">
        <ReplyIcon />
        <StatusText>{replies_count}</StatusText>
      </StatusBox>
      <StatusBox title="boost count">
        <ReblogIcon />
        <StatusText>{reblogs_count}</StatusText>
      </StatusBox>
      <StatusBox title="fav count">
        <FavouriteIcon />
        <StatusText>{favourites_count}</StatusText>
      </StatusBox>
    </a>
  )
}
