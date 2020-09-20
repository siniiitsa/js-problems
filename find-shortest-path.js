/****************************************************************
Описание
	Вам дается квадратная сетка с обычными `.` и заблокированными `X` ячейками. 
  Ваша игровая фигура может перемещаться по любой строке или столбцу или диагонали, пока не достигнет края сетки или заблокированной ячейки. 
  Учитывая сетку, начальную и конечную позиции, определите количество ходов, чтобы добраться до конечной позиции.

Например
	Дана сетка:
  .X.
  .X.
  ...
  
  Система координаты для данной сетки:
  0.0 0.1 0.2
  1.0 1.1	1.2
  2.0	2.1	2.2

  Начальна позиция 2.1 (отсчет идет с верхнего левого края сетки 0.0)
  Конечная позиция 0.2
  
  Путь движения между точками: (2.1) -> (1.2) -> (0.2)
  Ответ: необходимо выполнить 2 шага.

	Задача
  	Завершите выполнение функции в редакторе. Функция должена вывести целое число, обозначающее минимальное количество шагов для перехода от начальной позиции к конечной.
    
  Ограничения
  	Длина сетки > 1 и < 100
    Координата начальной и конечной точки входит в предоставленную сетку.
  	
****************************************************************/

const COVERED_CELL = '0';
const EMPTY_CELL = '.';

const prepareGrid = (grid) => grid.map((row) => row.split(''));

const stringifyGrid = (grid) => grid
  .reduce((acc, row) => `${acc}${row.join(' ')}\n`, '');

const isCovered = (grid, x, y) => {
  if (grid[y] === undefined) return false;
  return grid[y][x] === COVERED_CELL;
};

const moves = Object.values({
  top: (grid, x, y) => isCovered(grid, x, y - 1),
  topRight: (grid, x, y) => isCovered(grid, x + 1, y - 1),
  right: (grid, x, y) => isCovered(grid, x + 1, y),
  bottomRight: (grid, x, y) => isCovered(grid, x + 1, y + 1),
  bottom: (grid, x, y) => isCovered(grid, x, y + 1),
  bottomLeft: (grid, x, y) => isCovered(grid, x - 1, y + 1),
  left: (grid, x, y) => isCovered(grid, x - 1, y),
  topLeft: (grid, x, y) => isCovered(grid, x - 1, y - 1),
});

const isNextToCover = (grid, x, y) => moves.reduce(
  (result, move) => result ? result : move(grid, x, y),
  false,
);

const expandCoveredArea = (grid) => grid.reduce((acc, row, y) => {
  const newRow = row.map((cell, x) => {
    if (cell !== EMPTY_CELL) return cell;
    return isNextToCover(grid, x, y) ? COVERED_CELL : cell;
  });

  return [...acc, newRow];
}, []);

const minWalk = (gridList, startX, startY, endX, endY) => {
  const grid = prepareGrid(gridList);

  const draw = (grid, stepsCount) => {
    console.clear();
    console.log('Steps:', stepsCount, '\n');
    console.log(stringifyGrid(grid));

    if (grid[endY][endX] === COVERED_CELL) {
      console.log('Final steps:', stepsCount);
      return;
    };

    setTimeout(() => {
      if (grid[startY][startX] === EMPTY_CELL) {
        grid[startY][startX] = COVERED_CELL;
        draw(grid, stepsCount + 1);
      } else {
        const newGrid = expandCoveredArea(grid);
        draw(newGrid, stepsCount + 1)
      }
    }, 300);
  };

  draw(grid, 0);
};

minWalk(
  [
    'X................',
    '.................',
    '....XXX..........',
    '.....X...........',
    '.....XX....XX....',
    '......XX..XX.....',
    '.......XXXX......',
    '........Xx.......',
    '.........X...X...',
    '.........XXXXX...',
    '....XX...X.......',
    '....XX...........',
    '...XX......XX....',
    'XXXX........X....',
    '..X..............',
    '..XXXX...........',
    '.................',
  ],
  0, 16,
  16, 0
);
