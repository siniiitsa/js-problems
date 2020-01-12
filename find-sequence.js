const createMatrix = (sequence) => {
  const side = Math.sqrt(sequence.length);

  const iterate = (str, acc) => {
    if (str.length === 0) return acc;
    const nextRow = str.slice(-side).split('');
    const newStr = str.slice(0, -side);
    const newAcc = [nextRow, ...acc];

    return iterate(newStr, newAcc);
  };

  return iterate(sequence, []);
};

const findSequence = (matrix, word) => {
  const find = (x, y, word, acc) => {
    if (!word) return acc;

    const row = matrix[y];
    const isLetterAlreadyUsed =
      acc.some(([usedY, usedX]) => usedX === x && usedY === y);

    if (isLetterAlreadyUsed || !row || row && row[x] !== word[0]) {
      return null;
    }

    const newAcc = [...acc, [y, x]];
    const remainingLetters = word.slice(1);

    return (
      find(x, y - 1, remainingLetters, newAcc) ||
      find(x + 1, y, remainingLetters, newAcc) ||
      find(x, y + 1, remainingLetters, newAcc) ||
      find(x - 1, y, remainingLetters, newAcc)
    );
  };

  const maxCoordinate = matrix.length - 1;

  const iterateMatrix = (x, y) => {
    // tries to fidn the target sequence if the first letter of the word
    // mathes the current value in the matrix cell
    const currentValue = matrix[y][x];
    if (word[0] === currentValue) {
      const sequence = find(x, y, word, []);
      if (sequence) {
        return sequence;
      }
    }

    // returns null if matrix end was reached and the target sequence wasn't found
    if (x === maxCoordinate && y === maxCoordinate) {
      return null;
    }

    const nextX = x === maxCoordinate ? 0 : x + 1;
    const nextY = x === maxCoordinate ? y + 1 : y;

    return iterateMatrix(nextX, nextY);
  };

  return iterateMatrix(0, 0);
};

const sequenceToString = (sequence) =>
  !sequence ? 'null' : sequence.map(JSON.stringify).join('->');

// ------------------------------------------------------------

// gets needed arguments: a string to create the matrix and a word to find
const [matrixBase, word] = process.argv.slice(2);

// creates matrix from a given string and find target sequence
const matrix = createMatrix(matrixBase);
const sequence = findSequence(matrix, word);

// displays matrix in the console
console.log('MATRIX:');
matrix.forEach(row => console.log(row));

// displays found sequence in the console
console.log('SEQUENCE:', sequenceToString(sequence));