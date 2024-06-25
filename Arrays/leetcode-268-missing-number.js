let findMissingNum = (arr) => {
    let n = arr.length;
    let sumOfN = n * (n + 1) / 2;
    let sumOfArr = 0;

    for (let i = 0; i<=arr.length-1; i++) sumOfArr += arr[i];
    return sumOfN - sumOfArr;
}

console.log(findMissingNum([3,0,1]));