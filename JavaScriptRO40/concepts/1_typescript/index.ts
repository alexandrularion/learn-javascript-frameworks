console.log("Hello world using Typescript!");

let size = 2000000; // implicit static typing based on the values assigned
console.log(typeof size); // number
// size = "20000000"; // remove the comment to see the error
console.log(typeof size); // string
console.log(size.toFixed(3)); // 2000000.000

let isLoggedIn: boolean = false; // explicit static typing

// isLoggedIn = 2000; // throws an error
// isLoggedIn = "20023010230123"; // throws an error
// isLoggedIn = []; // throws an error

const lottoNumbers: number[] = [20, 29, 33, 43, 5, 1]; // Number !== number
const lottoNumbers2: Array<number> = [20, 29, 33, 43, 5, 1];

lottoNumbers.find((lottoNumber: number) => lottoNumber === 43); // define the callback param static type

const users: Array<User> = []; // explicit static typing using a custom object
users.push({ username: "will_smith", email: "will.smith@gmail.com" });
users.push({ username: "katy_smith", email: "katy.smith@gmail.com" });
console.log(users[0].email); // "will_smith"
users.push({
  username: "ion.popescu",
  email: "ion.popescu@gmail.com",
  gender: "m",
});
console.log(users); // [{ username: "will_smith", email: "will.smith@gmail.com" },{ username: "katy_smith", email: "katy.smith@gmail.com" }...]

// explicit static typing for a normal function
function multiply(a: number, b?: number): number {
  const result = a * (b || 3.14);
  return result;
}

const result = multiply(4);
console.log(result); // 12.56
console.log(multiply(9, 9)); // 81

// explicit static typing for an arrow function
const greeting = (message: string): void => {
  console.log(message);
};

greeting("Hello world!");

// type User = string
// type User = Array<any>;
type User = { username: string; email: string; gender?: string }; // '?' = optional = undefined

interface Review {
    name: string;
    author: User;
}
interface Product {
    name: string;
    price: number;
    description: string;
    reviews: Array<Review>;
}

const products: Array<Product> = [];