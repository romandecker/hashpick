export interface Picker<T> {
  (input: string): T;
}

function hashToInt(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return new Uint32Array([hash])[0];
}

export function createPicker<T>(items: ReadonlyArray<T>): Picker<T> {
  return function (input: string): T {
    return items[hashToInt(input) % items.length];
  };
}

export default createPicker;
