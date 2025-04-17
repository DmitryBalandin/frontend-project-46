export default function  formatter(json, formatter = "stylish") {
    let replacer, spacesCount;
    switch(formatter){
      case "stylish":
        replacer = ' ';
        spacesCount = 4;
        break
    }
  const iter = (currentValue, depth) => {
    if (typeof currentValue !== 'object' || currentValue === null) {
      return `${currentValue}`;
    }

    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize - 2);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);
    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => `${currentIndent}${key}: ${iter(val, depth + 1)}`);

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(json, 1);
};






// formatter(json,formatter = "stylish") {
//   let replacer, spacesCount;
//   switch(formatter){
//     case "stylish":
//       replacer = ' ';
//       spacesCount = 2;
//       break
//   }
//   const space = replacer.repeat(spacesCount);
//   return  `{\n${JSON.stringify(json,null, space).split('"').join('').split(',').join('')}\n}`;
// }