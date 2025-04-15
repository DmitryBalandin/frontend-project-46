import { findAbsolutePath } from "../src/helpers/helpers.js";
import process from 'process';

test('findPath', () =>{
    const path = process.cwd();
    expect(findAbsolutePath('../__fixtures__/file1.json')).toMatch(/file1.json/);
    expect(findAbsolutePath('../__fixtures__/file1.json')).not.toMatch(findAbsolutePath('../__fixtures__/file2.json'));
    expect(findAbsolutePath('')).toMatch(path);
})
