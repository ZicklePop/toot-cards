import Image from 'next/image'

export default function UserDetails({ avatar, display_name, url, username }) {
  const host = url?.split('/')[2]
  return (
    <div className="pb-4">
      <a href={url} className="flex cursor-pointer flex-row items-center">
        <div className="shrink-0 pr-3">
          <Image
            alt={`${display_name}'s avatar`}
            className="aspect-square h-16 w-16 rounded-md"
            height={128}
            src={avatar}
            width={128}
          />
        </div>
        <div className="overflow-hidden break-words">
          <div className="font-bold">{display_name}</div>
          <div>
            @{username}
            <span className="text-neutral-500 dark:text-neutral-400">
              @{host}
            </span>
          </div>
        </div>
      </a>
    </div>
  )
}
