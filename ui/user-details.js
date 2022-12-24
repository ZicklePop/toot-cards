/* eslint-disable @next/next/no-img-element */
export default function UserDetails({ avatar, display_name, url, username }) {
  const host = url.split('/')[2]
  return (
    <div className="pb-4">
      <a href={url} className="flex cursor-pointer flex-row items-center">
        <div className="pr-3">
          <img
            src={avatar}
            alt={`${display_name}'s avatar`}
            className="h-16 w-16 rounded-md"
          />
        </div>
        <div className="">
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
