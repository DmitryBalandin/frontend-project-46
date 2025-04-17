import fs from 'fs';
import path from "path";
import formatter from '../src/formatter.js';
import { obgDiff2 } from '../__fixtures__/objectDeep.js';

test('formatting obj with style = stylich', () => {
  const formatObj = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', 'formattObj.txt'), 'utf-8');
  expect(formatter(obgDiff2)).toEqual(formatObj.trim());
});