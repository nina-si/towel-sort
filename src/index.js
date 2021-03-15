
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) return [];
  else {
    let united = [];
    let temp = [];

    for (i = 0; i < matrix.length; i++) {
      if ((i % 2) == 0) {
        united = temp.concat(matrix[i]);
        temp = united;
      } else {
        united = temp.concat(matrix[i].reverse());
        temp = united;
      }
    }    
    return united;
  }
}
