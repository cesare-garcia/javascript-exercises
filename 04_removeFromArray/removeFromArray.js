const removeFromArray = function( array, targetElement1, targetElement2, targetElement3, targetElement4 ) {
    
    let newArray = [];
    
    for ( const element of array ) {
        if ( element != targetElement1 && element != targetElement2 && element != targetElement3 && element != targetElement4 ) {
            newArray.push(element);
        } else {
            continue;
        }
    }

    return newArray

};

// Do not edit below this line
module.exports = removeFromArray;
