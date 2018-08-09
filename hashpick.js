const crypto = require('crypto');

module.exports = function hashpicker(items) {
    return function(input) {
        const buf = crypto
            .createHash('md5')
            .update(input)
            .digest();

        let n = 0;
        for (let i = 0; i < buf.length; i += 6) {
            n ^= buf.readUIntBE(i, Math.min(6, buf.length - i));
        }

        return items[Math.abs(n) % items.length];
    };
};
