export const objDeep1 = {
  common: {
    setting1: 'Value 1',
    setting2: 200,
    setting3: true,
    setting6: {
      key: 'value',
      doge: {
        wow: '',
      },
    },
  },
  group1: {
    baz: 'bas',
    foo: 'bar',
    nest: {
      key: 'value',
    },
  },
  group2: {
    abc: 12345,
    deep: {
      id: 45,
    },
  },
};

export const objDeep2 = {
  common: {
    follow: false,
    setting1: 'Value 1',
    setting3: null,
    setting4: 'blah blah',
    setting5: {
      key5: 'value5',
    },
    setting6: {
      key: 'value',
      ops: 'vops',
      doge: {
        wow: 'so much',
      },
    },
  },
  group1: {
    foo: 'bar',
    baz: 'bars',
    nest: 'str',
  },
  group3: {
    deep: {
      id: {
        number: 45,
      },
    },
    fee: 100500,
  },
};

export const obgDiff = {
  common: {
    '+ follow': false,
    setting1: 'Value 1',
    '- setting2': 200,
    '- setting3': true,
    '+ setting3': null,
    '+ setting4': 'blah blah',
    '+ setting5': {
      key5: 'value5',
    },
    setting6: {
      doge: {
        '- wow': '',
        '+ wow': 'so much',
      },
      key: 'value',
      '+ ops': 'vops',
    },
  },
  group1: {
    '- baz': 'bas',
    '+ baz': 'bars',
    foo: 'bar',
    '- nest': {
      key: 'value',
    },
    '+ nest': 'str',
  },
  '- group2': {
    abc: 12345,
    deep: {
      id: 45,
    },
  },
  '+ group3': {
    deep: {
      id: {
        number: 45,
      },
    },
    fee: 100500,
  },
};

export const obgDiff2 = {
  '  common': {
    '+ follow': false,
    '  setting1': 'Value 1',
    '- setting2': 200,
    '- setting3': true,
    '+ setting3': null,
    '+ setting4': 'blah blah',
    '+ setting5': {
      '  key5': 'value5',
    },
    '  setting6': {
      '  doge': {
        '- wow': '',
        '+ wow': 'so much',
      },
      '  key': 'value',
      '+ ops': 'vops',
    },
  },
  '  group1': {
    '- baz': 'bas',
    '+ baz': 'bars',
    '  foo': 'bar',
    '- nest': {
      '  key': 'value',
    },
    '+ nest': 'str',
  },
  '- group2': {
    '  abc': 12345,
    '  deep': {
      '  id': 45,
    },
  },
  '+ group3': {
    '  deep': {
      '  id': {
        '  number': 45,
      },
    },
    '  fee': 100500,
  },
};

export const obgDiffNew = {
  common: {
    follow: {
      mark: 'add',
      from: null,
      to: false,
    },
    setting1: {
      mark: 'unchange',
      from: 'Value 1',
      to: 'Value 1',
    },
    setting2: {
      mark: 'delete',
      from: 200,
      to: null,
    },
    setting3: {
      mark: 'change',
      from: true,
      to: null,
    },
    setting4: {
      mark: 'add',
      from: null,
      to: 'blah blah',
    },
    setting5: {
      mark: 'add',
      from: null,
      to: {
        key5: 'value5',
      },
    },
    setting6: {
      doge: {
        wow: {
          mark: 'change',
          from: '',
          to: 'so much',
        },
      },
      key: {
        mark: 'unchange',
        from: 'value',
        to: 'value',
      },
      ops: {
        mark: 'add',
        from: null,
        to: 'vops',
      },
    },
  },
  group1: {
    baz: {
      mark: 'change',
      from: 'bas',
      to: 'bars',
    },
    foo: {
      mark: 'unchange',
      from: 'bar',
      to: 'bar',
    },
    nest: {
      mark: 'change',
      from: {
        key: 'value',
      },
      to: 'str',
    },
  },
  group2: {
    mark: 'delete',
    from: {
      abc: 12345,
      deep: {
        id: 45,
      },
    },
    to: null,
  },
  group3: {
    mark: 'add',
    from: null,
    to: {
      deep: {
        id: {
          number: 45,
        },
      },
      fee: 100500,
    },
  },
};
