var plusOne = function (digits) {
    let num = BigInt(digits.join(''));
    num++
    return num.toString().split('');
};

console.log(plusOne([4, 3, 2, 1]));