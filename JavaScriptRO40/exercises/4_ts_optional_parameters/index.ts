// Exercise 4: Optional Parameters
// Create a function with an optional parameter.
// If the optional parameter is not provided, default it to a specific value.

const formatWithDecimals = (value: number, decimals: number = 2) => {
    const formatedNumber = value.toFixed(decimals);
    return formatedNumber;
};

const number1 = formatWithDecimals(1000000,3);
console.log(number1); // 1000000,000

const number2 = formatWithDecimals(1000000);
console.log(number2); // 1000000,00