export const obj1 = {
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
};
export const obj2 = {
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
};

export const objSort1 = {
  "follow": false,
  "host": "hexlet.io",
  "proxy": "123.234.53.22",
  "timeout": 50,
};
export const objSort2 = {
  "host": "hexlet.io",
  "timeout": 20,
  "verbose": true,
    
};

export const diffObj1WithObj2 = {
  '- follow': false,
  'host': 'hexlet.io',
  '- proxy': '123.234.53.22',
  '- timeout': 50,
  '+ timeout': 20,
  '+ verbose': true
};

export const diffObj2WithObj1 = {
  '+ follow': false,
  'host': 'hexlet.io',
  '+ proxy': '123.234.53.22',
  '- timeout': 20,
  '+ timeout': 50,
  '- verbose': true
};