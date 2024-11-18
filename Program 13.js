/*Program 13. Write a node.js program to reverse the element of an array .*/
function reverseArray(arr) {
    let reversedArray = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }

    return reversedArray; 
}
const numbers = [11, 12, 13, 14, 15, 16, 17];
const reversedNumbers = reverseArray(numbers);
console.log(`Original array: ${numbers}`);
console.log(`Reversed array: ${reversedNumbers}`);






