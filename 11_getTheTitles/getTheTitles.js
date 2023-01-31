const getTheTitles = function(newArray) {

   let titleArray = [];

   newArray.forEach(element => {
        titleArray.push(element.title);
   })

   return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
