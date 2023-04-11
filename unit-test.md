# UNIT TEST

### Câu 1:

- Hãy nêu các bước viết unit test
  - Define requirements
  - Write a test
  - Write a code
  - Make the test pass
  - Refactor

### Câu 2:

- Hãy nêu các thành phần cơ bản có trong 1 unit test
  - Test suit
  - Block test
  - Test case
  - Action
  - Assert

### Câu 3:

- Liệt kê tất cả các test cases mà bạn có thể nghĩ ra để kiểm tra 1 mảng có phải là mảng số tăng dần hay không
  - input: 1 => output: false
  - input: '[ 1, 2, 3 ]' => output: false
  - input: [ ] => output: false
  - input: [ 1 ] => output: false
  - input: [ 1, 2, '3', '4', '5' ] => output: false
  - input: [ 1, 3, 5, [ 6, 7 ] ] => output: false
  - input: [ 2, 1, 4, 5, 3, 8 ] => output: false
  - input: [ 2, 3, 5, 7, 8, 10 ] => output: true
