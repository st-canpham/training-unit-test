# UNIT TEST

### Câu 1:

- Hãy nêu các bước viết unit test
  - Identify all possible case
  - Specify parameters and expected results for each case
  - Write test
  - Execute test
  - Evaluation and assessment of results

### Câu 2:

- Hãy nêu các thành phần cơ bản có trong 1 unit test
  - Test suit
  - Block test
  - Test case
  - Action
  - Assert

### Câu 3:

- Liệt kê tất cả các test cases mà bạn có thể nghĩ ra để kiểm tra 1 mảng có phải là mảng số tăng dần hay không
  | Input | Output |
  | :----: | :----: |
  | null | false |
  | undefined | false |
  | 1 | false |
  | '[1, 2, 3]' | false |
  | '[ ]' | false |
  | [ 1, 2, '3', '4', '5' ] | false |
  | [ 1, 2, '3', '4', '5' ] | false |
  | [ 1, 3, 5, [ 6, 7 ] ] | false |
  | [ 2, 1, 4, 5, 3, 8 ] | false |
  | [ 2, 1.5, 4, 5, 3.2, 8 ] | false |
  | [ 2, 3, 5, 7, null ] | false |
  | [ 2, 3, 5, 7, undefined ] | false |
  | [ 2, 3, 5, 7, 8, 10 ] | true |
  | [ 2, 3.3, 5, 7.5, 8, 10 ] | true |
