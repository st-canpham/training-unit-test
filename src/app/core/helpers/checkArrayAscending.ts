export const checkArrayAscending = (array: any): boolean => {
  if (!Array.isArray(array) || array.length < 2) {
    return false;
  }
  return array.every((item: number, index: number) => {
    return typeof item === 'number' && (index === 0 || item >= array[index - 1]);
  });
};
