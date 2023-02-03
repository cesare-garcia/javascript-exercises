const palindromes = function (string) {

    let originalString = string.toUpperCase();
    let testArray = originalString.split("");
    let originalStringCheck = '';
    for ( let i = 0; i < testArray.length; i++ ) {
        if ( testArray[i] == '.' || testArray[i] == ',' || testArray[i] == '!' || testArray[i] == '?' || testArray[i] == ' ' ) {
            continue;
        } else {
            originalStringCheck += testArray[i];
        }
    }
    if ( testArray[testArray.length - 1] == "." || testArray[testArray.length - 1] == "," || testArray[testArray.length - 1] == "!" || testArray[testArray.length - 1] == "?") {
        originalStringCheck += testArray[testArray.length - 1];
    }
    
    let reverseString = '';
    
    if ( testArray[testArray.length - 1] == '.' || testArray[testArray.length - 1] == ',' || testArray[testArray.length - 1] == '!' || testArray[testArray.length - 1] == '?' ) {
        for ( let i = (testArray.length - 2); i >= 0; i-- ) {
            if ( testArray[i] == '.' || testArray[i] == ',' || testArray[i] == '!' || testArray[i] == '?' || testArray[i] == ' ' ) {
                continue;
            } else {
                reverseString += testArray[i];
            }
        }
        reverseString += testArray[testArray.length - 1];
    } else {
        for (let i = (testArray.length - 1); i >= 0; i-- ) {
            if ( testArray[i] == '.' || testArray[i] == ',' || testArray[i] == '!' || testArray[i] == '?' || testArray[i] == ' ' ) {
                continue;
            } else {
                reverseString += testArray[i];
            }
        }
    }
    console.log(originalStringCheck);
    console.log(reverseString);
    if (originalStringCheck == reverseString) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;


