export default function getSeason(date) {
  return Math.floor((date.getMonth() / 12) * 4) % 4;
}
