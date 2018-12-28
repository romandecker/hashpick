import { createHash } from 'crypto';

export type PickerInput = string | Buffer | DataView;

export type Picker<T> = (PickerInput) => T;

export function createPicker<T>(items: T[]): Picker<T> {
  return function(input: PickerInput): T {
    const buf = createHash('md5')
      .update(input)
      .digest();

    let n = 0;
    for (let i = 0; i < buf.length; i += 6) {
      n ^= buf.readUIntBE(i, Math.min(6, buf.length - i));
    }

    return items[Math.abs(n) % items.length];
  };
}

export default createPicker;
