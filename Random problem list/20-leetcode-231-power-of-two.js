const isPowerOfTwo = (num) => {
    for (let i = 0; i <= 30; i++) {
        let power = Math.pow(2, i);

        if (power == num) {
            return true;
        }
        
    }
    return false;
}

console.log(isPowerOfTwo(64));

