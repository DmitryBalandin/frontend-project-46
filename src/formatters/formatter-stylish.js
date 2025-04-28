import { isCompareValue } from '../helpers/helpers.js'

export default function formatterStylich(json) {
  const replacer = ' '
  const spacesCount = 4
  const iter = (currentValue, depth) => {
    if (typeof currentValue !== 'object' || currentValue === null) {
      return `${currentValue}`
    }
    const indentSize = depth * spacesCount
    const currentIndent = replacer.repeat(indentSize - 2)
    const bracketIndent = replacer.repeat(indentSize - spacesCount)
    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => {
        if (isCompareValue(val)) {
          const mark = val.mark
          if (mark === 'add') {
            return `${currentIndent}${`+ ${key}`}: ${iter(val.to, depth + 1)}`
          }
          if (mark === 'unchange') {
            return `${currentIndent}${`  ${key}`}: ${iter(val.from, depth + 1)}`
          }
          if (mark === 'delete') {
            return `${currentIndent}${`- ${key}`}: ${iter(val.from, depth + 1)}`
          }
          if (mark === 'change') {
            return [`${currentIndent}${`- ${key}`}: ${iter(val.from, depth + 1)}`,
              `${currentIndent}${`+ ${key}`}: ${iter(val.to, depth + 1)}`].join('\n')
          }
        }
        return `${currentIndent}${'  ' + key}: ${iter(val, depth + 1)}`
      })

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n')
  }

  return iter(json, 1)
}
