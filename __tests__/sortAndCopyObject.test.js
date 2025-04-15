import { sortAndCopyObject } from "../src/helpers/helpers.js";
import _ from "lodash";
import { obj1,obj2 } from "../__fixtures__/objects.js";

test('Object is empty', () => {
    expect(sortAndCopyObject({})).toEqual({});
});

test('sort object', () => {
    expect(sortAndCopyObject(obj1)).toEqual({
        "follow": false,
        "host": "hexlet.io",
        "proxy": "123.234.53.22",
        "timeout": 50,
    });
    expect(sortAndCopyObject(obj1) === obj1).toBeFalsy();
});

test('sort two difference object not toEgual', () => {
    expect(sortAndCopyObject(obj1)).not.toEqual(sortAndCopyObject(obj2));
});

test('not mutantion obj', () => {
    const objClone = _.cloneDeep(obj1);
    const result = sortAndCopyObject(obj1);
    expect(result === obj1).toBeFalsy();
    expect(obj1).toEqual(objClone);
});