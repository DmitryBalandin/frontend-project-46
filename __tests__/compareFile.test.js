import compareFile from '../src/compare-file.js';
import _ from 'lodash';
import { objSort1, objSort2, diffObj1WithObj2, diffObj2WithObj1 } from '../__fixtures__/objects.js';
import { objDeep1, objDeep2, obgDiff2 } from '../__fixtures__/objectDeep.js';

test('Object is empty', () => {
  expect(compareFile({}, {})).toEqual({});
});

test('compare object', () => {
  expect(compareFile(objSort1, objSort2)).toEqual(diffObj1WithObj2);
  expect(compareFile(objSort2, objSort1)).toEqual(diffObj2WithObj1);
  // expect(compareFile(objSort1,objSort1)).toEqual(objSort1);
});

// test('compare two difference object not toEgual', () => {
//   expect(compareFile(objSort1,objSort2)).not.toEqual(compareFile(objSort2,objSort1));
// });

test('compare two  deep object', () => {
  expect(compareFile(objDeep1, objDeep2)).toEqual(obgDiff2);
});

test('not mutantion obj', () => {
  const objClone = _.cloneDeep(objSort1);
  const result = compareFile(objSort1, objSort1);
  expect(result === objSort1).toBeFalsy();
  expect(objSort1).toEqual(objClone);
});