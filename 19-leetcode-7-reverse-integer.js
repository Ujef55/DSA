const reverse = (int) => {
    let revInt = int.toString().split('').reverse().join('');
    
    if(revInt.endsWith('-')) {
        revInt = '-' + revInt;
        return parseInt(revInt);
    } else {
        return parseInt(revInt);
    }
    
}

console.log(reverse(-789));