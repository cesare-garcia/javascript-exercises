const add = function(num1, num2) {
  let sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
	let difference = num1 - num2;
  return difference;
};

const sum = function(array) {
	let arraySum = 0;
  for ( let i = 0; i < array.length; i++ ) {
    arraySum += array[i];
  }
  return arraySum;
};

const multiply = function(array) {
  let product = 1;
  for ( let i = 0; i < array.length; i++ ) {
    product *= array[i];
  }
  return product;
};

const power = function(base, exponent) {
	let product = base ** exponent;
  return product;
};

const factorial = function(number) {
	let factorialArray = [];
  let factorialProduct = 1;

  if ( number == 0 ) {
    let factorialProduct = 1;
    return factorialProduct;

  } else {
    
    for (let i = 1; i <= number; i++) {
      factorialArray.push(i);
      factorialProduct *= factorialArray[i-1];
    }

    return factorialProduct;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
