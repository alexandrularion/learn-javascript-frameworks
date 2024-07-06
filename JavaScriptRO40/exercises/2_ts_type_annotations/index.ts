// Exercise 2: Type Annotations
// Define variables to hold your name, age, and a boolean indicating if you're a student with type annotations.
// Create a function that takes these variables and returns an object containing them.

const firstName: string = "Alex";
const age: number = 24;
const isStudent: boolean = false; // I was

const createUser = (currentName: string, currentAge: number, currentIsStudent: boolean) => {
    return {
        name: currentName,
        age: currentAge,
        isStudent: currentIsStudent
    }
}

const user1 = createUser("John", 20, true);
console.log(user1); // { name: "John", age: 20, isStudent: true }

const user2 = createUser(firstName, age, isStudent);
console.log(user2); // { name: "Alex", age: 24, isStudent: false }