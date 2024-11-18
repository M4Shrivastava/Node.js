/*Program 9. Write a node.js program to print all prime numbers between 1 to 100.*/
function isPrime(n){
  for (let i = 2; i < n; i++){
    if(n%i==0){
      return false;
    }
  }
  return true
}

for (let i = 2; i <= 100; i++){
  if(isPrime(i)){
    console.log(i);
  }
}






