import fs from 'fs';
import { findAbsolutePath, sortAndCopyObject } from './helpers/helpers.js';
import parse from './parse.js';
import compareFile from './compare-file.js';

export default (path1, path2) => {
    const absolutePath1 = findAbsolutePath(path1);
    const absolutePath2 = findAbsolutePath(path2);
    const bufferFile1 = fs.readFileSync(absolutePath1);
    const bufferFile2 = fs.readFileSync(absolutePath2);
    const jsonFile1 = parse(bufferFile1);
    const jsonFile2 = parse(bufferFile2);
    const copyFile1 = sortAndCopyObject(jsonFile1);
    const copyFile2 = sortAndCopyObject(jsonFile2);
    const diffObj = compareFile(copyFile1, copyFile2)
    
    return diffObj
};