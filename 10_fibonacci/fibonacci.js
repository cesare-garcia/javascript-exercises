const fibonacci = function(sequenceNumber) {

    let cSequenceNumber = parseInt(sequenceNumber);

    let fibArray = [1,1];

    if ( cSequenceNumber < 0 ) {
        return "OOPS";
    } else {
        for ( let i = 0; i < cSequenceNumber; i++ ) {
            fibArray.push((fibArray[i]+fibArray[i+1]))
        }
        return fibArray[cSequenceNumber-1];
    }

};

// Do not edit below this line
module.exports = fibonacci;
