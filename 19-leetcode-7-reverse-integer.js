// const reverse = (int) => {

//     let isNegative = false;
//     if (int < 0) {
//         isNegative = true;
//     }

//     if(isNegative) {
//         int =+ ('-' + int.toString().split('').reverse().join(''));
//     } else {
//         int = +int.toString().split('').reverse().join('');
//     }

//     if (int > 2**31 - 1 || int < -1 * 2**31) {
//         return 0
//     }
//     return int;
// }

// console.log(reverse(15342364));


const reverse = (int) => {
    let sign = Math.sign(int);

    let result = sign * String(Math.abs(int)).split('').reverse().join('');

    let limit = Math.pow(2, 31);

    if(result <= -limit || result > limit) {
        return 0;
    }
    
    return result;
};

console.log(reverse(123656576765));