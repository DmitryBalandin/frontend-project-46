import path from 'path';
import process from 'process';

export const findAbsolutePath = (pathFile) => path.resolve(process.cwd(), pathFile);

export const sortAndCopyObject = (jsonFile) => Object.fromEntries(Object.entries(jsonFile).sort());