/* Create a function that applies a discount to every price of the product in the array. Use floor rounding.

Example:

[1,2,3,5]  == solution([2,4,6,11], 50)
[8,17,35,89]  == solution([10,20,40,100], 11)
[1,2,4,10]  == solution([10,20,40,100], 90)
*/

const applyDiscount = (prices, discount) => {
  const m = discount / 100;
  return prices.map((p) => p - p * m).map(Math.floor);
};

console.log(applyDiscount([2, 4, 6, 11], 50));
console.log(applyDiscount([10, 20, 40, 100], 11));
console.log(applyDiscount([10, 20, 40, 100], 90));
