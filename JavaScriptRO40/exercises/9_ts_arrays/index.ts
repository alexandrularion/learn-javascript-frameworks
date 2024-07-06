// Exercise 9: Arrays
// Create an array of numbers and write a function that takes this array and returns the sum of its elements.
// Extend the function to handle an array of arrays of numbers and return the sum of all elements.
const newArray: number[] = [2, 4, 6, 8, 9];
console.log(newArray.length);
function sumOfElem(newArray: Array<any>): number {
  let sumArray: number = 0;
  let isNormalArray: boolean = newArray.every(
    (item) => typeof item === 'number'
  );
  if (isNormalArray) {
    for (let i = 0; i < newArray.length; i++) {
      sumArray += newArray[i];
    }
  } else {
    for (let i = 0; i < newArray.length; i++) {
      for (let m = 0; m < newArray[i].length; m++) {
        sumArray += newArray[i][m];
        console.log(i, m);
      }
    }
  }
  return sumArray;
}
console.log(sumOfElem(newArray));
console.log(
  sumOfElem([
    [1, 2, 3],
    [4, 5, 6],
  ])
);