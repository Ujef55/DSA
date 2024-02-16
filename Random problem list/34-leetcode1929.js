const getConcatenation = (arr) => {
    let combineArr = [];

    arr.forEach(num => {
        combineArr.push(num);
    });

    arr.forEach(num => {
        combineArr.push(num);
    });

    return combineArr;
}

console.log(getConcatenation([1,2,1]));