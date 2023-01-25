const reverseString = function(string) {
    
    let stringArray = string.split("");
    let revString = "";

    for ( let i = (string.length - 1); i >= 0; i--) {
        revString = revString + stringArray[i];
    }

    return revString;
};

// Do not edit below this line
module.exports = reverseString;
