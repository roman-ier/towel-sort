function flatten(arr) {
    const result = []

    arr.forEach((i) => {
        if (Array.isArray(i)) {
            result.push(...flatten(i))
        } else {
            result.push(i)
        }
    })

    return result
}

module.exports = function towelSort(matrix) {

    if (arguments.length > 0 && matrix.length > 0) {
       let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];
    newArr = newArr.concat(i % 2 ? [...arr].reverse() : arr);
  }
  return newArr;
    } else return [];
}
