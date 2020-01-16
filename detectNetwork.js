// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var firstOne = Number.parseInt(cardNumber.slice(0, 1));
  var firstTwo = Number.parseInt(cardNumber.slice(0, 2));
  var firstThree = Number.parseInt(cardNumber.slice(0, 3));
  var firstFour = Number.parseInt(cardNumber.slice(0, 4));
  var firstFive = Number.parseInt(cardNumber.slice(0, 5));
  var firstSix = Number.parseInt(cardNumber.slice(0, 6));
  var cardLength = cardNumber.length;
  var chinaUnionPayPrefix = [];
  for (var i = 622126; i <= 622925; i++) {
    chinaUnionPayPrefix.push(i);
  }
  for (var i = 624; i <= 626; i++) {
    chinaUnionPayPrefix.push(i);
  }
  for (var i = 6282; i <= 6288; i++) {
    chinaUnionPayPrefix.push(i);
  }
  var chinaUnionPayLength = [16, 17, 18, 19];
  var switchPrefix = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  var switchLength = [16, 18, 19];

  if ((firstTwo === 38 || firstTwo === 39) && cardLength === 14) {
    return 'Diner\'s Club';
  } else if ((firstTwo === 34 || firstTwo === 37) && cardLength === 15) {
    return 'American Express';
  } else if ((switchPrefix.includes(firstFour) || switchPrefix.includes(firstSix)) && switchLength.includes(cardLength)) {
    return 'Switch';
  } else if (firstOne === 4 && (cardLength === 13 || cardLength === 16 || cardLength === 19)) {
    return 'Visa';
  } else if ((firstTwo >= 51 && firstTwo <= 55) && cardLength === 16) {
    return 'MasterCard';
  } else if ((firstTwo === 65 || firstFour === 6011 || (firstThree >= 644 && firstThree <= 649)) && (cardLength === 16 || cardLength === 19)) {
    return 'Discover';
  } else if ((firstFour === 5018 || firstFour === 5020 || firstFour === 5038 || firstFour === 6304) && (cardLength >=12 && cardLength <= 19)) {
    return 'Maestro';
  } else if ((chinaUnionPayPrefix.includes(firstThree) || chinaUnionPayPrefix.includes(firstFour) || chinaUnionPayPrefix.includes(firstSix)) && chinaUnionPayLength.includes(cardLength)) {
    return 'China UnionPay';
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


