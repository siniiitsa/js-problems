/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

const sumOfTwo = (numbers, sum) => {
  for (let i = 0; i < numbers.length; i += 1) {
    for (let k = i + 1; k < numbers.length; k += 1) {
      if (numbers[i] + numbers[k] === sum) {
        return true;
      }
    }
  }

  return false;
}



const numbers = [10, 15, 3, 7];
console.log(sumOfTwo(numbers, 12));
