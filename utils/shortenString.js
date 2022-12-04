// Shorten a string to less than maxLen characters without truncating words.
export default function shorten(str, maxLen, separator = ' ') {
  if (str.length <= maxLen) return str;
  return str.substring(0, str.lastIndexOf(separator, maxLen));
}
