function matrix(n) {
    let result = new Array(n).fill().map(() => new Array(n).fill(0)); // NxN empty matrix
    let counter = 1; // Number to fill
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
