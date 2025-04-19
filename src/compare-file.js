import { sortAndCopyObject } from './helpers/helpers.js';

export default function compareFile(objFirst, objSecond) {
  const objDiff = sortAndCopyObject({ ...objFirst, ...objSecond });
  const keys = Object.keys(objDiff);
  return keys.reduce((acc, key) => {
    if (Object.hasOwn(objFirst, key) && Object.hasOwn(objSecond, key)) {
      if (typeof objFirst[key] === 'object' && typeof objSecond[key] === 'object' && !Array.isArray(objFirst[key]) && !Array.isArray(objSecond[key])) {
        return { ...acc, [`  ${key}`]: compareFile(objFirst[key], objSecond[key]) };
      }
      if (objFirst[key] === objSecond[key]) {
        return { ...acc, [`  ${key}`]: objFirst[key] };
      }
      return {
        ...acc,
        [`- ${key}`] : (typeof objFirst[key] === 'object' && objFirst[key] !== null) ? compareFile(objFirst[key], objFirst[key]) : objFirst[key],
        [`+ ${key}`] : (typeof objSecond[key] === 'object' && objSecond[key] !== null) ? compareFile(objSecond[key], objSecond[key]) : objSecond[key],
      }
    }
    if (!Object.hasOwn(objFirst, key)) {
      if (typeof objSecond[key] === 'object') {
        return { ...acc, [`+ ${key}`]: compareFile(objSecond[key], objSecond[key]) }
      }
      return { ...acc, [`+ ${key}`]: objSecond[key] }

    }
    if (typeof objFirst[key] === 'object') {
      return { ...acc, [`- ${key}`]: compareFile(objFirst[key], objFirst[key]) }
    }
    return { ...acc, [`- ${key}`]: objFirst[key] };
  }, {})
}
