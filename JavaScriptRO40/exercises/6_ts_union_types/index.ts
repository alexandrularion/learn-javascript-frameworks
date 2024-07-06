// Exercise 6: Union Types
// Define a variable that can hold either a string or a number.
// Write a function that accepts a parameter which can be a string or a number and returns a different message based on the type.
// If the parameter is an array, return the length of the array.

const age: string | number = 10;

const formatAge = (value: string | number | Array<any>) => {
    if(typeof value === "string"){
        return Number(value); // convert the string to number
    } else if(Array.isArray(value)){
        return value.length;
    } else {
        return value + 5;
    }
}

const formattedAge1 = formatAge("20"); // "20" is string
console.log(formattedAge1); // 20 (as number)

const formattedAge2 = formatAge(10); // 10 is number
console.log(formattedAge2); // 15