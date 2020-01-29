
const areOnlyUniqSymbols = (str) => {
  if (str.length === 0) return false;

  const uniq = [...new Set(str.split(''))].join('');
  return uniq === str;
}

console.log(areOnlyUniqSymbols('')); // false
console.log(areOnlyUniqSymbols('hhello')); // false
console.log(areOnlyUniqSymbols('helo')); // true
console.log(areOnlyUniqSymbols('h')); // true

