// Exercise 3: Functions
// Write a function that takes two numbers as arguments and returns their sum.
// Additionally, handle the case where the arguments might be null or undefined.

const doSum = (firstNumber: number | null | undefined, secondNumber: number| null | undefined): number => {
    if(!firstNumber || !secondNumber) {
        return -1;
    }
    const sum = firstNumber + secondNumber;
    return sum;
}

const sum1 = doSum(3,10);
console.log(sum1); // 13

const sum2 = doSum(null, 10);
console.log(sum2); // -1

