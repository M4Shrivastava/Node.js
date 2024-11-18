/*Program 8. Write a node.js program to count the number of vowels of a given string.*/
function countVowels(str){
  let vowels ="AEIOUaeiou";
  let count = 0;
  for (let char of str){
    if(vowels.includes(char)){
      count++;
    }
  }
  return count;
}
let str = "Hello people";
console.log(countVowels(str));




