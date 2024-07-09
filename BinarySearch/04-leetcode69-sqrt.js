const sqrtIs = (num) => {
    let start = 0;
    let end = num;
    let ans;
    let mid = Math.floor(start + (end - start) / 2);

while (start <= end) {
    if (mid * mid == num) {
        return mid;
    } else if (mid * mid > num) {
        end = mid - 1;
    } else if (mid * mid < num) {
        ans = mid;
        start = mid + 1;
    }
    mid = Math.floor(start + (end - start) / 2);
}

return ans;
}

console.log(sqrtIs(36));