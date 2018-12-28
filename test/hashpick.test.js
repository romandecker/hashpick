const createPicker = require('../lib/hashpick.js').default;

describe('hashpicker', function() {
  it('should work when importing via require', () => {
    const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    const pick = createPicker(items);

    for (let i = 0; i < 1000; i++) {
      const item = pick(i + '');
      expect(items).toContain(item);
    }
  });
});
