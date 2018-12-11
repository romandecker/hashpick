export = hashpicker;

declare function hashpicker<T>(items: T[]): HashPicker<T>;

export type HashPicker<T> = (input: string) => T;

export default hashpicker;
