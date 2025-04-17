import { sortAndCopyObject } from "./helpers/helpers.js";


export default function compareFile(objFirst, objSecond) {
  const objDiff = sortAndCopyObject({ ...objFirst, ...objSecond });

  const objResult = {};
  for (const [key, value] of Object.entries(objDiff)) {
    if (Object.hasOwn(objFirst, key) && Object.hasOwn(objSecond, key)) {
      if (typeof objFirst[key] === 'object' && typeof objSecond[key] === 'object') {
        objResult[`  ${key}`] = compareFile(objFirst[key], objSecond[key]);
      } else if (objFirst[key] === objSecond[key]) {
        objResult[`  ${key}`] = value;
      } else {
        objResult[`- ${key}`] = (typeof objFirst[key] === 'object' && objFirst[key] !== null) ? compareFile(objFirst[key], objFirst[key]) : objFirst[key];
        objResult[`+ ${key}`] = (typeof objSecond[key] === 'object' && objSecond[key] !== null) ? compareFile(objSecond[key], objSecond[key]) : objSecond[key];
      }
    } else if (!Object.hasOwn(objFirst, key)) {
      if (typeof objSecond[key] === 'object') {
        objResult[`+ ${key}`] = compareFile(objSecond[key], objSecond[key]);
      } else {
        objResult[`+ ${key}`] = value;
      }
    } else {
      if (typeof objFirst[key] === 'object') {
        objResult[`- ${key}`] = compareFile(objFirst[key], objFirst[key]);
      } else {
        objResult[`- ${key}`] = value;
      }

    }
  }

  return objResult;
}