export default function formatterJson(json) {
  const space = ' '.repeat(2);
  return JSON.stringify(json, null, space);
}
