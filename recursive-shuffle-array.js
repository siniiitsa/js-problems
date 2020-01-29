const shuffleArray = (array) => {
  const iter = (acc, source) => {
    if (source.length === 0) {
      return acc;
    }

    const rndIndex = Math.floor(Math.random() * source.length);
    const newAcc = [...acc, source[rndIndex]];
    const newSource = [
      ...source.slice(0, rndIndex),
      ...source.slice(rndIndex + 1)
    ];

    return iter(newAcc, newSource);
  }

  return iter([], array);
};

console.log(
  shuffleArray([1, 2, 3, 4, 5]),
  shuffleArray([1, 2, 3, 4, 5]),
  shuffleArray([1, 2, 3, 4, 5]),
);