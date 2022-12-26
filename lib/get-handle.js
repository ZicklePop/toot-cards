import getUrlParts from './get-url-parts'

export default function getHandle(input = '') {
  const { external, host, status, user } = getUrlParts(input.split('/'))

  if (host && external && host !== external) {
    return input
  }

  return `@${user}@${external || host || ''}/${status || ''}`
}
