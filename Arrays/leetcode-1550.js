var threeConsecutiveOdds = function(arr) {
    let count = 0;
    for (let i = 0; i<=arr.length-1; i++) {
        if (arr[i]%2 == 0) count = 0; 
        else count ++;
        if (count == 3) return true;
    } 
    return false;
};

console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]));
