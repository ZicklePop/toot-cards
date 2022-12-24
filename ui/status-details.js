import ClockIcon from './icons/clock'
import EditIcon from './icons/edit'
import FavouriteIcon from './icons/favourite'
import ReblogIcon from './icons/reblog'
import ReplyIcon from './icons/reply'
import formatDate from 'lib/format-date'

function StatusBox({ children, ...rest }) {
  return (
    <div className="flex pr-3 md:pr-0 md:pl-3" {...rest}>
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
    <>
      <time className="hidden md:block" dateTime={time} {...rest}>
        {formatDate(time)}
      </time>
      <time className="block md:hidden" dateTime={time} {...rest}>
        {formatDate(time, true)}
      </time>
    </>
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
    <div className="pt-4">
      <a
        href={url}
        className="flex cursor-pointer flex-col text-neutral-500 dark:text-neutral-400 md:flex-row"
      >
        <div className="flex flex-row pb-2 align-top md:order-2 md:pb-0">
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
        </div>
        <div className="w-full align-top md:order-1">
          <div className="flex pr-3 pb-2 md:pb-0" title="created at">
            <ClockIcon />
            <StatusText>
              <StatusTime time={created_at} />
            </StatusText>
          </div>
          {edited_at && (
            <div className="flex pr-3" title="edited at">
              <EditIcon />
              <StatusText>
                <StatusTime time={edited_at} />
              </StatusText>
            </div>
          )}
        </div>
      </a>
    </div>
  )
}
