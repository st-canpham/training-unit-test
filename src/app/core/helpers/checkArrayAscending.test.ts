import { checkArrayAscending } from './checkArrayAscending';

test('Test case 1', () => {
  expect(checkArrayAscending([])).toBeFalsy();
});

test('Test case 2', () => {
  expect(checkArrayAscending([1])).toBeFalsy();
});

test('Test case 3', () => {
  expect(checkArrayAscending([1, 22, 4, 6])).toBeFalsy();
});

test('Test case 4', () => {
  expect(checkArrayAscending([1, 22, 4.4, 6])).toBeFalsy();
});

test('Test case 5', () => {
  expect(checkArrayAscending(null)).toBeFalsy();
});

test('Test case 6', () => {
  expect(checkArrayAscending(undefined)).toBeFalsy();
});

test('Test case 7', () => {
  expect(checkArrayAscending([ 2, 3, 5, 7, null ])).toBeFalsy();
});

test('Test case 8', () => {
  expect(checkArrayAscending([ 2, 3, 5, 7, undefined ])).toBeFalsy();
});

test('Test case 9', () => {
  expect(checkArrayAscending([ 2, 3, 5, 7, 8, 10 ])).toBeTruthy();
});

test('Test case 10', () => {
  expect(checkArrayAscending([ 2, 3.4, 5, 7.2, 8, 10 ])).toBeTruthy();
});
