const isPowerOfThree = (int) => {
    for (let i = 0; i <= 19; i++) {
        let power = Math.pow(3, i);
        if (power == int) {
            return true;
        }
    }
    return false;
}

console.log(isPowerOfThree(27));