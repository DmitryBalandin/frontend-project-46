import formatterStylich from './formatter-stylish.js'
import formatterPlain from './formatter-plain.js'
import formatterJson from './formatter-json.js'

export default function formatter(json, format = 'stylish') {
  switch (format) {
    case 'stylish':
      return formatterStylich(json)
    case 'plain':
      return formatterPlain(json)
    case 'json':
      return formatterJson(json)
    default:
      return formatterStylich(json)
  }
}
