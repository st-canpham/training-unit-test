import { checkArrayAscending } from './checkArrayAscending';

describe('Đối số không phải là Array', () => {
  it ('Đối số là null', () => {
    expect(checkArrayAscending(null)).toBe(false);
  });

  it ('Đối số là undefined', () => {
    expect(checkArrayAscending(undefined)).toBe(false);
  });
  
  it ('Đối số là NaN', () => {
    expect(checkArrayAscending(NaN)).toBe(false);
  });

  it ('Đối số là number', () => {
    expect(checkArrayAscending(1)).toBe(false);
  });

  it ('Đối số là string', () => {
    expect(checkArrayAscending('[1, 2, 3]')).toBe(false);
  });

  it ('Đối số là function', () => {
    expect(checkArrayAscending(() => {})).toBe(false);
  });

  it ('Đối số là object', () => {
    expect(checkArrayAscending({ a: 1 })).toBe(false);
  });
});

describe('Đối số là mảng không phải là mảng number', () => {
  it ('Đối số là mảng rỗng', () => {
    expect(checkArrayAscending([])).toBe(false);
  });

  it ('Đối số là mảng string', () => {
    expect(checkArrayAscending([ '3', '4', '5' ])).toBe(false);
  });

  it ('Đối số là mảng vừa number vừa string', () => {
    expect(checkArrayAscending([ 1, 2, '3', '4', '5' ])).toBe(false);
  });

  it ('Đối số là mảng lồng nhau', () => {
    expect(checkArrayAscending([ 1, 3, 5, [ 6, 7 ] ])).toBe(false);
  });

  it ('Đối số là mảng có object', () => {
    expect(checkArrayAscending([ 1, 3, 5, { a: 7 } ])).toBe(false);
  });

  it ('Đối số là mảng có function', () => {
    expect(checkArrayAscending([ 1, 3, 5, () => {} ])).toBe(false);
  });

  it ('Đối số là mảng có null', () => {
    expect(checkArrayAscending([ 1, 3, 5, 7, null ])).toBe(false);
  });

  it ('Đối số là mảng có undefined', () => {
    expect(checkArrayAscending([ 1, 3, 5, 7, undefined ])).toBe(false);
  });

  it ('Đối số là mảng có NaN', () => {
    expect(checkArrayAscending([ 1, 3, 5, 7, NaN ])).toBe(false);
  });
});

describe('Đối số là mảng số không hợp lệ', () => {
  it ('Đối số là mảng number có 1 phần tử', () => {
    expect(checkArrayAscending([1])).toBe(false);
  });

  it ('Đối số là mảng number không tăng dần', () => {
    expect(checkArrayAscending([ 2, 1, 4, 5, 3, 8 ])).toBe(false);
  });

  it ('Đối số là mảng số thực không tăng dần', () => {
    expect(checkArrayAscending([ 2, 1.5, 4, 5, 3.2, 8 ])).toBe(false);
  });

  it ('Đối số là mảng có số âm không tăng dần', () => {
    expect(checkArrayAscending([ 2, 3, 5, 7, -10 ])).toBe(false);
  });
});

describe('Đối số là mảng hợp lệ', () => {
  it ('Đối số là mảng số có 2 số bằng nhau', () => {
    expect(checkArrayAscending([ 1, 1 ])).toBe(true);
  });

  it ('Đối số là mảng số có số thực tăng dần', () => {
    expect(checkArrayAscending([ 2, 3.3, 5, 7.5, 8, 10 ])).toBe(true);
  });

  it ('Đối số là mảng số có số âm tăng dần', () => {
    expect(checkArrayAscending([ -10, 3, 5, 7, 8, 10 ])).toBe(true);
  });

  it ('Đối số là mảng số tăng dần', () => {
    expect(checkArrayAscending([ 2, 3, 5, 7, 8, 10 ])).toBe(true);
  });
});
