import fs from 'fs'
import path from 'path'
import process from 'process'
import app from '../src/index.js'

test('gendiff with style = stylich', () => {
  const formatObj = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', 'formattObj.txt'), 'utf-8')
  expect(app('./__fixtures__/fileDeep1.json', './__fixtures__/fileDeep2.json')).toEqual(formatObj.trim())
  expect(app('./__fixtures__/fileDeep1.json', './__fixtures__/fileDeep2.yaml')).toEqual(formatObj.trim())
})

test('gendiff with style = plain', () => {
  const formatObjDeep = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', 'formattObjP-plain.txt'), 'utf-8')
  const formatObj = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', 'forrmater-simpleObj-plain.txt'), 'utf-8')
  expect(app('./__fixtures__/fileDeep1.json', './__fixtures__/fileDeep2.json', 'plain')).toEqual(formatObjDeep.trim())
  expect(app('./__fixtures__/file1.json', './__fixtures__/file2.json', 'plain')).toEqual(formatObj.trim())
  expect(app('./__fixtures__/fileDeep1.json', './__fixtures__/fileDeep2.yaml', 'plain')).toEqual(formatObjDeep.trim())
})

test('gendiff with style = json', () => {
  const formatObj = fs.readFileSync(path.resolve(process.cwd(), '__fixtures__', 'formatter-json.txt'), 'utf-8')
  expect(app('./__fixtures__/fileDeep1.json', './__fixtures__/fileDeep2.json', 'json')).toEqual(formatObj.trim())
  expect(app('./__fixtures__/fileDeep1.json', './__fixtures__/fileDeep2.yaml', 'json')).toEqual(formatObj.trim())
})
