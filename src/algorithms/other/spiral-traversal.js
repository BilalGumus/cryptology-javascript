//SPIRAL INWARD FROM BOTTOM-LEFT, CLOCKWISE
function traversalSIBLC(matrix) {
    const resultArray = [];

    if (matrix.length === 0) {
        return resultArray;
    }

    let rowStart = 0, rowEnd = matrix.length - 1;
    let columnStart = 0, coloumnEnd = matrix[0].length - 1;

    while (rowStart <= rowEnd && columnStart <= coloumnEnd) {
        for (let r = rowEnd; r > rowStart; r--) {
            resultArray.push(matrix[r][columnStart]);
        }

        for (let c = columnStart; c <= coloumnEnd; c++) {
            resultArray.push(matrix[rowStart][c]);
        }

        if (rowStart < rowEnd && columnStart < coloumnEnd) {
            for (let r = rowStart + 1; r <= rowEnd; r++) {
                resultArray.push(matrix[r][coloumnEnd]);
            }

            for (let c = coloumnEnd - 1; c > columnStart; c--) {
                resultArray.push(matrix[rowEnd][c]);
            }
        }

        rowStart++;
        rowEnd--;
        columnStart++;
        coloumnEnd--;
    }
    
    return resultArray;
}

//(REVERSE) SPIRAL INWARD FROM BOTTOM-LEFT, CLOCKWISE
function reverseTraversalSIBLC(matrix) {
    let index = 0;
    const resultArray = matrix.slice();
    const cipherArray = [].concat(...resultArray);
    
    if (resultArray.length === 0) {
        return resultArray;
    }

    let rowStart = 0, rowEnd = resultArray.length - 1;
    let columnStart = 0, coloumnEnd = resultArray[0].length - 1;
    
    while (rowStart <= rowEnd && columnStart <= coloumnEnd) {
        for (let r = rowEnd; r > rowStart; r--) {
            resultArray[r][rowStart] = cipherArray[index];
            index++;
        }

        for (let c = columnStart; c <= coloumnEnd; c++) {
            resultArray[columnStart][c] = cipherArray[index];
            index++;
        }

        if (rowStart < rowEnd && columnStart < coloumnEnd) {
            for (let r = rowStart + 1; r <= rowEnd; r++) {
                resultArray[r][coloumnEnd] = cipherArray[index];
                index++;
            }

            for (let c = coloumnEnd - 1; c > columnStart; c--) {
                resultArray[rowEnd][c] = cipherArray[index];
                index++;
            }
        }

        rowStart++;
        rowEnd--;
        columnStart++;
        coloumnEnd--;
    }

    return [].concat(...resultArray);
}

export { traversalSIBLC, reverseTraversalSIBLC }