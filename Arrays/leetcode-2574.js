var leftRightDifference = function(arr) {
    let n = arr.length;
    let leftSum = [], rightSum = [], answer = [];
    leftSum[0] = 0, rightSum[n-1] = 0;
    
    for (i = 1; i < n; i++) {
        leftSum[i] = leftSum[i - 1] + arr[i - 1];
    }
    
    for (let i = n - 2; i >= 0; i--) {
        rightSum[i] = rightSum[i + 1] + arr[i + 1];
    }
    
    for (let i = 0; i<n; i++) {
        answer[i] = Math.abs(leftSum[i]-rightSum[i]);
    }
    
    return answer;
    };

    console.log(leftRightDifference([10,4,8,3]));