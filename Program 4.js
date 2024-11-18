/*Program 4. Write a node.js program to calculate the factorial of the numbers using recursion.*/
function factorial(n){
  if (n == 0){
    return 1
  }
  else{
    return factorial(n-1)* n
  }
}
console.log(factorial(12));

