var minMovesToSeat = function(seats, students) {

    let moves  = 0;
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    let j = 0;
    for (let i = 0; i<seats.length; i++) {
        moves += Math.abs(seats[i]-students[j]);
        j++;
    }
    return moves;
};


console.log(minMovesToSeat([3,1,5], [2,7,4]));