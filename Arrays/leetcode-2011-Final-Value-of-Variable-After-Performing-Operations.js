// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// return the final value of X after performing all the operations.

// solution:
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for (let i = 0; i<operations.length; i++) {
        if (operations[i].charAt(1) == '+') {
            x++;
        } else {
            x--;
        }
    }
    return x
};

console.log(finalValueAfterOperations(["--X","X++","X++"]));