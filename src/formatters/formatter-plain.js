export default function formatterPlain(json) {
  const result = [];
  const formatterValue = (value) => {
    if (typeof value === 'string') {
      return `'${value}'`;
    }
    if(typeof value === 'object' && value !== null && !Array.isArray(value)){
      return `[complex value]`;
    }
    return value;
  };
  
  const iter = (path, json) => {
    const keys = Object.keys(json);
    keys.forEach((key, index, array) => {
      if (key[0] === "+" && array.includes(`-${key.slice(1)}`)) {
        const removeValue = json[`-${key.slice(1)}`];
        const addedValue = json[key];
        result.push(`Property '${(`${path}.${key.slice(2)}`).slice(1)}' was updated. From ${formatterValue(removeValue)} to ${formatterValue(addedValue)}`);
      } else if (key[0] === "+" && !array.includes(`-${key.slice(1)}`)) {
        const addedValue = json[key];
        result.push(`Property '${(`${path}.${key.slice(2)}`).slice(1)}' was added with value: ${formatterValue(addedValue)}`);
      } else if (key[0] === "-" && !array.includes(`+${key.slice(1)}`)) {
        result.push(`Property '${(`${path}.${key.slice(2)}`).slice(1)}' was removed`);
      }
      if (key[0] === " " && typeof json[key] === 'object' && json[key] !== null && !Array.isArray(json[key])) {
        iter(`${path}.${key.slice(2)}`, json[key]);
      }
    });
  };
  iter('', json);

  return result.join('\n');
}
