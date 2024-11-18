/*Program 15. Write a node.js program to find the second largest element in an array.*/

const getSecondlargestNumber = (arr = [1,2,3,4,5])=>{
  let largestNumber = arr[0];
  let secondLargestNumber = arr[0];
  
  for (let i = 0; i < arr.length; i++){
    if(arr[i]> largestNumber){
      secondLargestNumber = largestNumber;
      largestNumber = arr[i];
    } 
     else if (arr[i] > secondLargestNumber){
     secondLargestNumber = arr[i];  
    } 
  }
  return secondLargestNumber;
}
console.log(getSecondlargestNumber());






