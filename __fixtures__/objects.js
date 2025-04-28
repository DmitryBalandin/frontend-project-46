export const obj1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};
export const obj2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

export const objSort1 = {
  follow: false,
  host: 'hexlet.io',
  proxy: '123.234.53.22',
  timeout: 50,
};
export const objSort2 = {
  host: 'hexlet.io',
  timeout: 20,
  verbose: true,
};

export const diffObj1WithObj2 = {
  follow: {
    mark: 'delete',
    from: false,
    to: null,
  },
  host: {
    mark: 'unchange',
    from: 'hexlet.io',
    to: 'hexlet.io',
  },
  proxy: {
    mark: 'delete',
    from: '123.234.53.22',
    to: null,
  },
  timeout: {
    mark: 'change',
    from: 50,
    to: 20,
  },
  verbose: {
    mark: 'add',
    from: null,
    to: true,
  },
};

export const diffObj2WithObj1 = {
  follow: {
    from: null,
    mark: 'add',
    to: false,
  },
  host: {
    from: 'hexlet.io',
    mark: 'unchange',
    to: 'hexlet.io',
  },
  proxy: {
    from: null,
    mark: 'add',
    to: '123.234.53.22',
  },
  timeout: {
    from: 20,
    mark: 'change',
    to: 50,
  },
  verbose: {
    from: true,
    mark: 'delete',
    to: null,
  },
};
