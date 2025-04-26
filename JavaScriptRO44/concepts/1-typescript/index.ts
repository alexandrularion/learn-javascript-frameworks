// Tip: Any JS code is valid in TypeScript
const grades: Array<number> = [8, 10, 8.5, 9, 9.3];

function calculateAvg(studentGrades: Array<number>, totalGrades: number): number {
  let sum = 0;

  for (let i = 0; i < totalGrades; i++) {
    sum = sum + studentGrades[i];
  }

  return sum / totalGrades;
}

const result: number = calculateAvg(grades, grades.length);

console.log(result); // 8.96

// Tip: Showcase the TS features

// Basic Types
const userName: string = "Jane Doe";
const isLogged: boolean = false;
const average: number = 9.5;

const userAge: number | null = null; // Tip: We can have multiple types for a single variable

let courses = 10;
// courses = "john" // Type 'string' is not assignable to type 'number'.

type Student = string | number; // Tip: We can use type to create a custom type from other data types

const students: Array<Student> = ["Jane Doe", "John Doe", "William Smith"];

students.push(2); // Tip: We can have a mix of types inserted in the array

interface User {
  firstName: string;
  lastName: string;
  age: number | null;
  gender: "m" | "f" | "o"; // Tip: We can use static values as types
  phoneNumber?: string;
  profile?: {
    followers: number;
    following: number;
    posts: number;
  }; // Tip: We can define objects in our object
  getFirstName: () => string; // Tip: We can define even functions in our object
  printLastName: () => void; // Tip: We can define that we don't return any data type at all
}

const user: User = {
  firstName: "John",
  lastName: "Doe",
  age: null,
  gender: "m",
  getFirstName: function () {
    return this.firstName;
  },
  printLastName: function() {
    console.log(this.lastName)
  }
};

// Generics

interface FetchResponse<T> {
    data: T; // Tip: We can use any if we don't know how that data is structured
    message: string;
}

function fetchUsers(): FetchResponse<{ users: Array<User> }> {
    // Tip: Fake users
    const users: any = [{ firstName: 'Khabib', lastName: 'Denver', age: 20, gender: 'm' }];

    return {
        data: {
            users: users
        },
        message: "The users were fetched successfully."
    }
}

const usersFromApi = fetchUsers();
console.log(usersFromApi.data.users[0].age); // Tip: We can work easily with any kind of data
console.log(usersFromApi.message) // Tip: We can use the message to display a status

// Enums

// Tip: The JavaScript way of making constants
// const ROUTES = {
//     HOME: '/',
//     CONTACT: '/contact'
//     // ....
// }
// console.log(ROUTES.HOME)

enum ROUTES {
    HOME = "/",
    CONTACT = "/contact",
    ABOUT = '/about',
    REGISTER = '/sign-up',
    LOGIN = '/login'
}

console.log(ROUTES.LOGIN); // '/login'
console.log(ROUTES.HOME) // '/'