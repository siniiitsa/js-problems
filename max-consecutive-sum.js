/* Дан масив чисел произвольной длины. Нужно найти максимально возможную сумму из любой непрерывной последовательности числе в масиве. Например в масиве [1, -2, 3, 4, -5, 6], такой последовательностью будут числа 3, 4, -5, 6 - именно их сума будет наибольшей. Если какое-либо одно число больше чем любая из возможных сум масива, то возвращается это число. */

const getSum = (numbers) => numbers.reduce((total, n) => total + n);

const getMaxSum = (numbers) => {
  const sums = [];

  for (let i = 0; i < numbers.length; i += 1) {
    for (let k = i + 1; k <= numbers.length; k += 1) {
      const currentSequence = numbers.slice(i, k);
      sums.push(getSum(currentSequence));
    }
  }

  return Math.max(...sums);
};

getMaxSum([1, 2, 3]); // 6
getMaxSum([-1, 2, 3]); // 5
getMaxSum([1, -2, 3]); // 3
getMaxSum([1, 0, 0]);// 1
getMaxSum([1, -2, 3, 4, -5, 6]); // 8

