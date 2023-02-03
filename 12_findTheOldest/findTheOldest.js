const findTheOldest = function(array) {

    let filteredArray = array.filter( element => {
        if ( !element.yearOfDeath ) {
            element.currentYear = new Date().getFullYear();
            return element;
        } else {
            return element;
        }
    });

    let sortedArray = filteredArray.sort( (lastPerson, nextPerson) => {
        
        let lastAge = (lastPerson.yearOfDeath - lastPerson.yearOfBirth);
        let nextAge = (nextPerson.yearOfDeath - nextPerson.yearOfBirth);

        if ( !lastPerson.yearOfDeath ) {
            lastAge = (lastperson.currentYear - lastPerson.yearOfBirth)
        } else if ( !nextPerson.yearOfDeath ) {
            nextAge = (nextPerson.currentYear - nextPerson.yearOfBirth)
        }

        if (lastAge > nextAge) {
            return -1;
        } else {
            return 1;
        }
    });
    return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
