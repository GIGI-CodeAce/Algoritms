function matrix(n) {
    let result = new Array(n).fill().map(() => new Array(n).fill(0)); // NxN empty matrix
    let counter = 1;
    let top = 0, bottom = n - 1, left = 0, right = n - 1;

    while (top <= bottom && left <= right) {
        // top row
        for (let i = left; i <= right; i++) {
            result[top][i] = counter++;
        }
        top++;

        // right col
        for (let i = top; i <= bottom; i++) {
            result[i][right] = counter++;
        }
        right--;

        // bottom row
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result[bottom][i] = counter++;
            }
            bottom--;
        }

        // left col
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result[i][left] = counter++;
            }
            left++;
        }
    }

    return result;
}

console.log(matrix(10));
// [
//   [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ],
//   [
//     36, 37, 38, 39, 40,
//     41, 42, 43, 44, 11
//   ],
//   [
//     35, 64, 65, 66, 67,
//     68, 69, 70, 45, 12
//   ],
//   [
//     34, 63, 84, 85, 86,
//     87, 88, 71, 46, 13
//   ],
//   [
//     33, 62, 83, 96, 97,
//     98, 89, 72, 47, 14
//   ],
//   [
//     32, 61, 82, 95, 100,
//     99, 90, 73, 48,  15
//   ],
//   [
//     31, 60, 81, 94, 93,
//     92, 91, 74, 49, 16
//   ],
//   [
//     30, 59, 80, 79, 78,
//     77, 76, 75, 50, 17
//   ],
//   [
//     29, 58, 57, 56, 55,
//     54, 53, 52, 51, 18
//   ],
//   [
//     28, 27, 26, 25, 24,
//     23, 22, 21, 20, 19
//   ]
// ]