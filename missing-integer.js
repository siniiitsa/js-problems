/*
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

function solution(A) {
  const a = [...A].sort((a, b) => a - b);
  const startingIndex = a.findIndex(number => number >= 0);

  if (startingIndex === -1) return 1;
  if (a[startingIndex] > 1) return 1;

  for (let i = startingIndex; i < a.length; ++i) {
    if (a[i + 1] > a[i] + 1) return a[i] + 1;
  }

  const lastNumber = a[a.length - 1]
  return lastNumber + 1;
}

const numbers = [1, 3, 6, 4, 1, 2];
console.log(solution(numbers)) // 5