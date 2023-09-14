const isPowerOfFour = (num) => {
    for (let i = 0; i <= 15; i++) {
        let power = Math.pow(4, i);
        if (power == num) {
            return true
        }
    }
    return false;
}

console.log(isPowerOfFour(64));