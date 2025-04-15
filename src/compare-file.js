import { sortAndCopyObject } from "./helpers/helpers.js";


export default function compareFile(objFirst, objSecond) {
  const objDiff = sortAndCopyObject({ ...objFirst, ...objSecond });
    
  const objResult = {};
  for (const [key, value] of Object.entries(objDiff)) {
    if (Object.hasOwn(objFirst, key) && Object.hasOwn(objSecond, key)) {
      if (objFirst[key] === objSecond[key]) {
        objResult[key] = value;
      } else {
        objResult[`- ${key}`] = objFirst[key];
        objResult[`+ ${key}`] = objSecond[key];  
      }
    } else if (!Object.hasOwn(objFirst, key)) {
      objResult[`+ ${key}`] = value;
    } else { objResult[`- ${key}`] = value; }
  }

  return objResult;
}