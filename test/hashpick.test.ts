import createPicker from '../src/hashpick';

describe('hashpicker', function() {
  it('should always return an item from the list', () => {
    const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    const pick = createPicker(items);

    for (let i = 0; i < 1000; i++) {
      const item = pick(i + '');
      expect(items).toContain(item);
    }
  });
});
