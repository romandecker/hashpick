const hashpicker = require('../hashpick');
const expect = require('chai').expect;

describe('hashpicker', function() {
    it('should pick items based on hash', function() {
        const pick = hashpicker(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']);
    });

    it('should always return an item from the list', async () => {
        const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
        const pick = hashpicker(items);

        for (let i = 0; i < 1000; i++) {
            const item = pick(i + '');
            expect(items).to.include(item);
        }
    });
});
