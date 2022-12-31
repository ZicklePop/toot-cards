import ClockIcon from '@heroicons/react/24/outline/ClockIcon'
import PencilSquareIcon from '@heroicons/react/24/outline/PencilSquareIcon'
import StarIcon from '@heroicons/react/24/outline/StarIcon'
import ArrowPathIcon from '@heroicons/react/24/outline/ArrowPathIcon'
import ChatBubbleLeftEllipsisIcon from '@heroicons/react/24/outline/ChatBubbleLeftEllipsisIcon'
import StatusBox from './status-box'
import StatusText from './status-text'
import StatusTime from './status-time'

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
            <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
            <StatusText>{replies_count}</StatusText>
          </StatusBox>
          <StatusBox title="boost count">
            <ArrowPathIcon className="h-6 w-6" />
            <StatusText>{reblogs_count}</StatusText>
          </StatusBox>
          <StatusBox title="fav count">
            <StarIcon className="h-6 w-6" />
            <StatusText>{favourites_count}</StatusText>
          </StatusBox>
        </div>
        <div className="w-full align-top md:order-1">
          <div className="flex pr-3 pb-2 md:pb-0" title="created at">
            <ClockIcon className="h-6 w-6" />
            <StatusText>
              <StatusTime time={created_at} />
            </StatusText>
          </div>
          {edited_at && (
            <div className="flex pr-3" title="edited at">
              <PencilSquareIcon className="h-6 w-6" />
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
