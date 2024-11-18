/*Program 14. Write a node.js program to count the numbers of even and odd element in an array.*/
function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            evenCount++; 
        } else {
            oddCount++; 
        }
    }

    return { evenCount, oddCount };
}
const numbers = [11, 22, 33, 44, 45, 76, 67, 69, 10];
const result = countEvenOdd(numbers);
console.log(`Even elements: ${result.evenCount}`);
console.log(`Odd elements: ${result.oddCount}`);






