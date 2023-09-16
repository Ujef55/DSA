const findUniqueNumber = (arr) => {
    let ans = 0;
    for (let i = 0; i <= arr.length; i++) {
        ans = ans ^ arr[i];
    }
    return ans;
}

console.log(findUniqueNumber([1,2,1,6,4,2,4]));

