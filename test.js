const reverseString = (str) => str.split('').reverse().join('');

const createPyramid = (binaryString) => {
  const binaryStringReversed = reverseString(binaryString);
  let remaining = binaryStringReversed;

  let i = 1;
  const pyramid = [];

  while (remaining) {
    const row = remaining.slice(0, i);
    pyramid.push(row);

    remaining = remaining.slice(i);
    i += 2;
  }

  return pyramid;
};

const pyramydToString = (pyramid) => {
  const pyramidReversed = pyramid
    .reverse()
    .map(reverseString);

  const pyramidAsString = pyramidReversed.join('');
  return pyramidAsString;
};

const transformCell = (cell) => {
  const transitionRules = [
    { input: '0000', output: '0000' },
    { input: '0001', output: '1000' },
    { input: '0010', output: '0001' },
    { input: '0011', output: '0010' },
    { input: '0100', output: '0000' },
    { input: '0101', output: '0010' },
    { input: '0110', output: '1011' },
    { input: '0111', output: '1011' },
    { input: '1000', output: '0100' },
    { input: '1001', output: '0101' },
    { input: '1010', output: '0111' },
    { input: '1011', output: '1111' },
    { input: '1100', output: '1101' },
    { input: '1101', output: '1110' },
    { input: '1110', output: '0111' },
    { input: '1111', output: '1111' },
  ];

  const newCell = transitionRules
    .find(rule => rule.input === cell)
    .output;

  if (newCell === '0000' || newCell === '1111') {
    return newCell;
  }

  return transformCell(newCell);
};

const getCells = (pyramid) => {
  const cellSize = 4;
  const pyramidAsString = pyramydToString(pyramid);
  let remaining = pyramidAsString;

  const cells = [];

  while (remaining) {
    const cell = remaining.slice(0, cellSize);
    cells.push(cell);
    remaining = remaining.slice(cellSize);
  }

  return cells;
};

const getCells2 = (pyramid) => {
  const cells = [];

  const lastRow = pyramid[pyramid.lenght - 1];
  const prevRow = pyramid[pyramid.lenght - 2];

  while (prevRow) {
    // const
  }
};

const collapsePyramid = (cells) => {
  if (cells.lenght === 1) {
    return cells[0];
  }

  const transformedCells = cells.map(transformCell);
  // console.log(transformedCells.join(''));
  const collapsed = transformedCells.map(cell => cell[0]);
  return transformedCells;
}

// ================================

const input1 = '1101';
const input2 = '1100';
const input3 = '0101110110100110';

console.log('============================================');

const c = createPyramid(input3);
console.log(c);

const cells = getCells(c);
console.log(c);
const cellsReduced = collapsePyramid(cells);

c.forEach((row, index) => console.log(row, index));