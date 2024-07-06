// Exercise 1: Basic Types
// Define variables with different basic types: string, number, boolean, array, tuple.
// Create an array of tuples representing a list of people with their names and ages.

const productName: string = "Product name"; // explicit typing
const dayOfMonth: number = 20;
const isAdmin: boolean = true;

// definition of array
const fruits: Array<string> = ["orange", "apple"];

// tuple
const [isAdministrator, isShopper, isManager]: [boolean, boolean, boolean] = [true, false ,true ];
console.log(isAdministrator, isShopper, isManager);

// array of tuples
const persons: Array<[string, number]> = [["John Doe", 30],["Julian Smith", 40], ["Jane Doe", 28]];