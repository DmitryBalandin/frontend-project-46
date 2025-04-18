import fs from 'fs';
import path from 'path';
import process from 'process';
import formatterStylich from '../src/formatters/formatter-stylish.js';
import formatterPlain from '../src/formatters/formatter-plain.js';
import { obgDiff2, } from '../__fixtures__/objectDeep.js';
import { diffObj1WithObj2, } from '../__fixtures__/objects.js';

test('formatting obj with style = stylich', () => {
  const formatObj = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', 'formattObj.txt',), 'utf-8',);
  expect(formatterStylich(obgDiff2,),).toEqual(formatObj.trim(),);
},);

test('formatting simple obj with style = plain', () => {
  const formatObj = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', 'forrmater-simpleObj-plain.txt',), 'utf-8',);
  expect(formatterPlain(diffObj1WithObj2, 'plain',),).toEqual(formatObj.trim(),);
},);

test('formatting objDeep with style = plain', () => {
  const formatObj = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', 'formattObjP-plain.txt',), 'utf-8',);
  expect(formatterPlain(obgDiff2, 'plain',),).toEqual(formatObj.trim(),);
},);