let searchNum = (matrix, target) => {
    let m = matrix.length;
    let n = matrix[0].length;

    let start = 0;
    let end = (m*n) -1;

    let row = Math.floor(mid/n);
    let col = Math.floor(mid%n);

    while (start<=end) {
        let mid = Math.floor(start+(end-start)/2);
        if(target > matrix[row][col]) {
            start = mid + 1;
        } else if (target < matrix[row][col]) {
            end = mid - 1;
        } else {
            return true;
        }
    }
    return false;
}

console.log(searchNum([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 34));