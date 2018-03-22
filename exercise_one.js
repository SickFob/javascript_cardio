// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
function reverseString(str) {
  const strArray = [...str];
  return strArray.reverse().join('');
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
str = 'racecar';
function isPalindrome(str) {
  const strArray = [...str];
  const rightToLeft = strArray.reverse().join('');
  if(str === rightToLeft) {
    return true;
  } else {
    return false;
  }
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const strArray = [...int.toString()];
  const num = strArray.reverse().join('');
  return parseInt(num) * Math.sign(int);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  return str.toLowerCase()
            .split(' ')
            .map(word => word[0].toUpperCase() + word.substr(1))
            .join(' ');
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charMap = {};
  let maxChar = '';
  let maxNum = 0;
  strArray = [...str];
  strArray.forEach(char => {
    if(charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  
  for(char in charMap) {
    if(charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return `${maxChar} => ${maxNum}`;
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. 
// For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  //in progress
}



// Call Function
const reverseStr = reverseString('hello');
console.log('Reverse string: ');
console.log(reverseStr);
console.log('************************************');
const palindromeStr = isPalindrome('racecar');
console.log('Is palindrome: ');
console.log(palindromeStr);
console.log('************************************');
const reverseNum = reverseInt(-123);
console.log('Reverse num: ');
console.log(reverseNum);
console.log('************************************');
const initCap = capitalizeLetters('i lOvE jAvAsCrIpT');
console.log('Capitalize letters: ');
console.log(initCap);
console.log('************************************');
const maxChar = maxCharacter('javascript');
console.log('Max character: ');
console.log(maxChar);
console.log('************************************');


 

