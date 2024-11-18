/*Program 16. Write a node.js program to detemine the frequency of an element in array  .*/
function countElementFrequency(arr) {
    const frequency = {};

    for (let element of arr) {
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
    }

    return frequency;
}
const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
const frequencyCount = countElementFrequency(numbers);
console.log(`Element frequency:`, frequencyCount);







