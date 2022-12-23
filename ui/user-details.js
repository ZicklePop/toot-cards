/* eslint-disable @next/next/no-img-element */
export default function UserDetails({ avatar, display_name, url, username }) {
  return (
    <a href={url} className="flex flex-row items-center pb-3">
      <div className="pr-2">
        <img src={avatar} alt={`${display_name}'s avatar`} className="w-16" />
      </div>
      <div className="">
        <div className="font-bold">{display_name}</div>
        <div>@{username}</div>
      </div>
    </a>
  )
}
