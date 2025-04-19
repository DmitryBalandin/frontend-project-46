import path from 'path';
import process from 'process';
import yaml from 'js-yaml';
import _ from 'lodash';

export const findAbsolutePath = (pathFile) => path.resolve(process.cwd(), pathFile);

export const sortAndCopyObject = (jsonFile) => {
  const sortJson = Object.fromEntries(_.sortBy(Object.entries(jsonFile)));
  return sortJson;
};

export const transformYamltoJSON = (file) => yaml.load(file);
