import fs from 'fs';
import path from 'path';
import { findAbsolutePath } from './helpers/helpers.js';
import parse from './parse.js';
import compareFile from './compare-file.js';
import formatter from './formatters/index.js';

export default (path1, path2, format) => {
  const absolutePath1 = findAbsolutePath(path1);
  const absolutePath2 = findAbsolutePath(path2);
  const bufferFile1 = fs.readFileSync(absolutePath1, 'utf-8');
  const bufferFile2 = fs.readFileSync(absolutePath2, 'utf-8');
  const jsonFile1 = parse(bufferFile1, path.extname(absolutePath1));
  const jsonFile2 = parse(bufferFile2, path.extname(absolutePath2));
  const diffObj = compareFile(jsonFile1, jsonFile2);
  const result = formatter(diffObj, format);
  return result;
};
