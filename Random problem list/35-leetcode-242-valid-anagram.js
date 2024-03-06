// Given two strings s and t,
// return true if t is an anagram of s, and false otherwise.

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let charObj = {};

    for (let i = 0; i<str1.length; i++) {
        let charStrOne = str1[i]; 

        charObj[charStrOne] ? charObj[charStrOne] += 1 : charObj[charStrOne] = 1;
    }

    for (let j = 0; j<str2.length; j++) {
        let charStrTwo = str2[j];

        if (!charObj[charStrTwo]) {
            return false;
        } else {
            charObj[charStrTwo] -= 1;
        }
    }
    return  true;
}

console.log(isAnagram('aaz', 'azz'));
