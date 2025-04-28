import _ from 'lodash'
import { isCompareValue } from '../helpers/helpers.js'
export default function formatterPlain(jsonFile) {
  const formatterValue = (value) => {
    if (typeof value === 'string') {
      return `'${value}'`
    }
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return '[complex value]'
    }
    return value
  }
  const iter = (path, json) => {
    const keys = Object.keys(json)
    return keys.map((key, index, array) => {
      if (isCompareValue(json[key])) {
        const mark = json[key].mark
        if (mark === 'change') {
          const removeValue = json[key].from
          const addedValue = json[key].to
          return `Property '${(`${path}.${key}`).slice(1)}' was updated. From ${formatterValue(removeValue)} to ${formatterValue(addedValue)}`
        }
        if (mark === 'add') {
          const addedValue = json[key].to
          return `Property '${(`${path}.${key}`).slice(1)}' was added with value: ${formatterValue(addedValue)}`
        }
        if (mark === 'delete') {
          return `Property '${(`${path}.${key}`).slice(1)}' was removed`
        }
      }
      
      if (typeof json[key] === 'object' && json[key] !== null && !Array.isArray(json[key])) {
        return [...iter(`${path}.${key}`, json[key])]
      }
      return undefined
    })
  }
  return (_.flattenDeep(iter('', jsonFile))).filter((value) => value !== undefined).join('\n')
}
