const sumAll = function( starting_int, ending_int ) {

    let larger_int = 0;
    let smaller_int = 0;
    let sum = 0;

    if ( starting_int < 0 || ending_int < 0 ) {
        return "ERROR";
    }

    if ( ending_int > starting_int ) {
        larger_int = ending_int;
        smaller_int = starting_int;
    } else {
        larger_int = starting_int;
        smaller_int = ending_int;
    }

    for ( let i = smaller_int; i <= larger_int; i++ ) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
