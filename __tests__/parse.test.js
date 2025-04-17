import fs from 'fs';
import path from "path";
import process from 'process';
import { obj1 } from '../__fixtures__/objects.js';
import parse from '../src/parse.js';
import { objDeep1 } from '../__fixtures__/objectDeep.js';

const bufferFileJson = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', 'file1.json'), 'utf-8');
const bufferFileYaml = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', 'file1.yaml'), 'utf-8');
const bufferFileJs = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', 'objects.js'), 'utf-8');
const bufferFileJson2 = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', 'file2.json'), 'utf-8');
const bufferFileJsonDeep = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', 'fileDeep1.json'), 'utf-8');
const bufferFileYamlDeep = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', 'fileDeep1.yaml'), 'utf-8');
test('wrong extension', () => {
  expect(parse(bufferFileJs, '.js')).toEqual({});
});

test('eqaul difference extension', () => {
  expect(parse(bufferFileJson, '.json')).toEqual(parse(bufferFileYaml,'.yaml'));
  expect(parse(bufferFileJsonDeep, '.json')).toEqual(parse(bufferFileYamlDeep,'.yaml'));
});

test('parse  obj json and yaml', () => {
  expect(parse(bufferFileJson, '.json')).toEqual(obj1);
  expect(parse(bufferFileYaml,'.yaml')).toEqual(obj1);
});

test('return difference result with difference argument', () => {
  expect(parse(bufferFileJson, '.json')).not.toEqual(parse(bufferFileJson2, '.json'));
});

test('parse objDeep json and yaml', () => {
  expect(parse(bufferFileJsonDeep, '.json')).toEqual(objDeep1);
  expect(parse(bufferFileYamlDeep,'.yaml')).toEqual(objDeep1);
});