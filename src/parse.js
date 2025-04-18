import { transformYamltoJSON } from './helpers/helpers.js';

export default (file, typeFail) => {
  switch (typeFail) {
  case '.json':
    return JSON.parse(file);
  case '.yml':
  case '.yaml':
    return transformYamltoJSON(file);
  default:
    return {};
  }
};

