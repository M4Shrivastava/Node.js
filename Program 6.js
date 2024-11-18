/*Program 6. Write a node.js program to check if a string is palindrome.*/
let str = 'madam';
let n = str.length;
console.log(checkPalindrome(str, n));
function checkPalindrome(str, n){
  for (let i = 0; i < n; i++){
    if (str[i] != str[n-1-i]){
      return false;
    }
  }
  return true;
}



