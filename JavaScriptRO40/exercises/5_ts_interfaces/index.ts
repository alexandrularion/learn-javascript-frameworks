// Exercise 5: Interfaces
// Create an interface for a Person with properties name (string) and age (number).
// Write a function that takes a Person object and returns a greeting message.
// Create an interface for a Student that extends Person and includes a boolean property isEnrolled.

interface Person {
    name: string;
    age: number;
}

interface Student extends Person {
    isEnrolled: boolean;
}

const person1: Person = {
    name: "John",
    age: 20
}

const greetPerson = (person: Person) => {
    const message = `Hello, ${person.name}!`
    return message;
}

const message1 = greetPerson({ name: "Julian", age: 30 })
console.log(message1); // "Hello, Julian!"

const message2 = greetPerson(person1);
console.log(message2); // "Hellom, John!";