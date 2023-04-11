export const onlyNumbers = (array): boolean => {
  if (!Array.isArray(array)) {
    return false;
  }
  return array.every(element => {
    return typeof element === 'number';
  });
};

export const checkArrayAscending = (array: number[]): boolean => {
  if (!onlyNumbers(array) || array.length < 2) {
    return false;
  }
  const newArray = [...array];
  return JSON.stringify(newArray.sort((a, b) => a - b)) === JSON.stringify(array);
};
