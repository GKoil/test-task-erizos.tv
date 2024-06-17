function printSpiralMatrix(matrix: number[][]): string {
  if (matrix.length === 0) {
    return '';
  }

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  const result: number[] = [];

  while (top <= bottom && left <= right) {
    // from left to right
    for (let i = left; i <= right; i += 1) {
      result.push(matrix[top][i]);
    }
    top += 1;

    // from top to bottom
    for (let i = top; i <= bottom; i += 1) {
      result.push(matrix[i][right]);
    }
    right -= 1;

    if (top <= bottom) {
      // from right to left
      for (let i = right; i >= left; i -= 1) {
        result.push(matrix[bottom][i]);
      }
      bottom -= 1;
    }

    if (left <= right) {
      // from bottom to top
      for (let i = bottom; i >= top; i -= 1) {
        result.push(matrix[i][left]);
      }
      left += 1;
    }
  }

  return result.join(' ');
}

const MATRIX = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(printSpiralMatrix(MATRIX)); // 1 2 3 6 9 8 7 4 5 ?
