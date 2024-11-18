/*Program 7. Write a node.js program to reverse a digits of numbers .*/
let n = 123456789
let reverse = 0
while(n>0){
  reverse = (reverse*10)+(n%10)
  n = Math.floor(n/10)
}
console.log(reverse)



