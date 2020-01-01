export default (content, targetedWords) => (
  content.replace(
    new RegExp(targetedWords.join('|'), 'ig'),
    '*****************'
  )
)