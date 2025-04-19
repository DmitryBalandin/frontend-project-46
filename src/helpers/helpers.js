import path from 'path';
import process from 'process';
import yaml from 'js-yaml';

export const findAbsolutePath = (pathFile) => path.resolve(process.cwd(), pathFile);

export const sortAndCopyObject = (jsonFile) => Object.fromEntries(Object.entries(jsonFile).sort());

export const transformYamltoJSON = (file) => yaml.load(file);
