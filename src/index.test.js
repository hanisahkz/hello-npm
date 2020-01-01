import filterModule from './index';

test('should replace blacklisted words with asterisks', () => (
    expect(filterModule(
      'The name of the NX will be the Nintendo Switch',
      ['switch']
    )).toBe('The name of the NX will be the Nintendo *****************')
))
  
test('should replace multiple instances of blacklisted words', () => (
    expect(filterModule(
        'The name of the NX will be the Nintendo Switch. The switch will be awesome!',
        ['switch']
    )).toBe('The name of the NX will be the Nintendo *****************. The ***************** will be awesome!')
))