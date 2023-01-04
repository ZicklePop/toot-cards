import mastodonURIRegex from './mastodon-uri-regex'

export default `javascript:(function(){
  const urlParts = window.location.href.match(${mastodonURIRegex.toString()});
  if (urlParts[2] !== undefined && urlParts[3] !== undefined && urlParts[5] !== undefined && urlParts[2] !== 'toot.cards') {
    window.location.href = 'https://toot.cards/' + window.location.href;
  } else {
    window.location.href = 'https://toot.cards/';
  }
})()`
  .replaceAll('\n', '')
  .replaceAll(/\s+/g, ' ')
