import Logo from '../ui/logo'
import Form from './form'
import mastodonURIRegex from '../lib/mastodon-uri-regex'
import bookmarklet from 'lib/bookmarklet'

const mastodonURIRegexString = mastodonURIRegex
  .toString()
  .substring(1, mastodonURIRegex.toString().length - 2)

export default async function Page() {
  return (
    <Form className="flex w-full flex-col p-3">
      <Logo />
      <label htmlFor="url" className="block pt-3 pb-1 text-lg font-medium">
        Paste a link to a Mastodon post:
      </label>
      <div className="flex flex-col md:flex-row md:items-center">
        <input
          className="form-input block w-full rounded border-2 border-indigo-500 bg-neutral-100 py-3 caret-indigo-500 shadow-lg dark:bg-neutral-800"
          id="url"
          name="url"
          pattern={mastodonURIRegexString}
          placeholder="https://nyan.lol/@zicklepop/109391055794397972"
          type="text"
        />
        <button
          type="submit"
          className="mt-3 flex-none rounded border-2 border-indigo-600 bg-indigo-500 px-5 py-3 font-medium text-white shadow-lg hover:bg-indigo-600 active:bg-indigo-700 motion-safe:transition-colors md:ml-3 md:mt-0"
        >
          View Toot
        </button>
      </div>
      <div className="pt-5 pb-3">
        <p className="pb-1 font-medium">Example usage:</p>
        <ul className="list-outside list-disc break-all pl-5">
          <li className="py-1">
            <a
              className="text-indigo-500 underline"
              href="/@zicklepop@nyan.lol/109391055794397972"
            >
              @zicklepop@nyan.lol/109391055794397972
            </a>
          </li>
          <li className="py-1">
            <a
              className="text-indigo-500 underline"
              href="/@TheEnbyWitch@peoplemaking.games/109435088654382380"
            >
              @TheEnbyWitch@peoplemaking.games/109435088654382380
            </a>
          </li>
          <li className="py-1">
            <a
              className="text-indigo-500 underline"
              href="/https://nyan.lol/@zicklepop/109549679282144965"
            >
              https://nyan.lol/@zicklepop/109549679282144965
            </a>
          </li>
          <li className="py-1">
            <a
              className="text-indigo-500 underline"
              href="/nyan.lol/@TheEnbyWitch@peoplemaking.games/109553684783231839"
            >
              nyan.lol/@TheEnbyWitch@peoplemaking.games/109553684783231839
            </a>
          </li>
        </ul>
        <p className="max-w-sm pt-3 pb-1">
          {'You can add this '}
          <span
            className="inline-block rounded-full bg-indigo-500 px-2 py-0 text-white underline"
            dangerouslySetInnerHTML={{
              __html: `<a href="${bookmarklet}">Toot.cards</a>`,
            }}
          />
          {' bookmarklet to your address bar to quickly view a post here.'}
        </p>
        <p className="pt-3 pb-1">
          {'made with <3 by '}
          <a
            className="text-indigo-500 underline"
            href="https://melaniekat.com"
            rel="me"
          >
            melanie kat
          </a>
        </p>
      </div>
    </Form>
  )
}
