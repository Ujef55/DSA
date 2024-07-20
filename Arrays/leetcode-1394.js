var findLucky = function (arr) {
    let frequency = {};

    for (let i = 0; i < arr.length; i++) {
        if (!frequency[arr[i]]) {
            frequency[arr[i]] = 1;
        } else {
            frequency[arr[i]] += 1;
        }
    }
    console.log(frequency);

    let entries = Object.entries(frequency)
    for (let i = entries.length - 1; i >= 0; i--) {
        if (entries[i][0] == entries[i][1]) {
            return entries[i][1];
        }
    }
    return -1
};

console.log(findLucky([2, 2, 3, 4]));