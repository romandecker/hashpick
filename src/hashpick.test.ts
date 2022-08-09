import createPicker from './hashpick';

describe('hashpicker', function () {
  const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
  const pick = createPicker(items);
  it('should always return an item from the list', () => {
    for (let i = 0; i < 1000; i++) {
      const item = pick(i + '');
      expect(items).toContain(item);
    }
  });

  it('should somewhat equally distribute picks', () => {
    const picks = {};
    for (let i = 0; i < 100000; i++) {
      const item = pick(`pick something based on ${i} waaat`);
      picks[item] = (picks[item] || 0) + 1;
    }

    const counts = Object.values(picks) as number[];
    for (let i = 0; i < counts.length; i++) {
      for (let j = i + 1; j < counts.length; j++) {
        expect(counts[i] / counts[j]).toBeCloseTo(1, 1);
      }
    }
  });
});
