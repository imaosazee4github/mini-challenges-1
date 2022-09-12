/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let result = [];
    for (let i = 0; i < array[0].length; i++){
        let colum = [];
        for (let y = 0; y < array.length; y++){
            colum.push(array[y][i])
        }
        result.push(colum)
    }
    return result;
}


module.exports = transpose;
