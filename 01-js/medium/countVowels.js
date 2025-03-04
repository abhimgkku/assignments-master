/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  vowels = ["a","e","i","o","u"];
  var count = 0
  str = str.toLowerCase().replace(/\s+/g, '').split('').sort();
  for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i]))
    {
      count +=1;
    }
  }
  return count;
}

module.exports = countVowels;