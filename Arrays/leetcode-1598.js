var minOperations = function (logs) {
    operation = 0;
    for (let i = 0; i < logs.length; i++) {
        if (logs[i] == '../') {
            operation--;
            if (operation < 0) {
                operation = 0;
            }
        } else if (logs[i] == './') {
            continue;
        } else {
            operation++;
        }
    }
    return operation;
};


console.log(minOperations["d1/", "d2/", "../", "d21/", "./"]);