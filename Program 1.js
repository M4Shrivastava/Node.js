/*Program 1. Write a node.js program to find the largest of three numbers*/
const num1 = 252;
const num2 = 303;
const num3 = 299;
let largest;

if ( num1 >= num2 && num1 >= num3){
    largest = num1;
}

else if (num2>= num1 && num2 >= num3){
    largest = num2;
}

else{
    largest = num3;
}
console.log(`The largest number is: ${largest}`);


