import _ from 'lodash';

export default function formatterPlain(jsonFile) {
  const formatterValue = (value) => {
    if (typeof value === 'string') {
      return `'${value}'`;
    }
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return '[complex value]';
    }
    return value;
  };
  const iter = (path, json) => {
    const keys = Object.keys(json);
    return keys.map((key, index, array) => {
      if (key[0] === '+' && array.includes(`-${key.slice(1)}`)) {
        const removeValue = json[`-${key.slice(1)}`];
        const addedValue = json[key];
        return `Property '${(`${path}.${key.slice(2)}`).slice(1)}' was updated. From ${formatterValue(removeValue)} to ${formatterValue(addedValue)}`;
      }
      if (key[0] === '+' && !array.includes(`-${key.slice(1)}`)) {
        const addedValue = json[key];
        return `Property '${(`${path}.${key.slice(2)}`).slice(1)}' was added with value: ${formatterValue(addedValue)}`;
      }
      if (key[0] === '-' && !array.includes(`+${key.slice(1)}`)) {
        return `Property '${(`${path}.${key.slice(2)}`).slice(1)}' was removed`;
      }
      if (key[0] === ' ' && typeof json[key] === 'object' && json[key] !== null && !Array.isArray(json[key])) {
        return [...iter(`${path}.${key.slice(2)}`, json[key])];
      }
      return undefined;
    });
  };
  return (_.flattenDeep(iter('', jsonFile))).filter((value) => value !== undefined).join('\n');
}
