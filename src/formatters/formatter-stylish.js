export default function formatterStylich(json,) {
  const replacer = ' ';
  const spacesCount = 4;
  const iter = (currentValue, depth,) => {
    if (typeof currentValue !== 'object' || currentValue === null) {
      return `${currentValue}`;
    }
    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize - 2,);
    const bracketIndent = replacer.repeat(indentSize - spacesCount,);
    const lines = Object
      .entries(currentValue,)
      .map(([key, val,],) => `${currentIndent}${key}: ${iter(val, depth + 1,)}`,);

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n',);
  };

  return iter(json, 1,);
}