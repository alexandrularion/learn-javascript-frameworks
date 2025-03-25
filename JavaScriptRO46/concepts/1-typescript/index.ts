// Tip: Any JavaScript code is valid in TypeScript
const displayLoginMessage = function (username: string) {
  return `Hello, ${username}`;
};
console.log(displayLoginMessage("Gigel"));

// JavaScript (Data Types)
/*
    Primitives: String, Boolean, Null, Undefiend, Number, Symbol, BigInt
    Non-Primitives: Object, Array, Function, Regex, Math, Promise
 */

// TypeScript (Data Types)
/*
    Primitives: String, Boolean, Null, Undefiend, Number, Symbol, BigInt
    Non-Primitives: Object, Array, Function, Regex, Math, Promise
    Extra types: Any, Unknown (like any, but safer), Tuple (fixed-length array with specific types)
                 Enum (defines a set of named constants), Void (used for functions that return nothing)
                 Never (used for functions that never return)
*/

let firstName: string = "Gigel";
const age: number = 25;
const isAdmin: boolean = true;

const user: { firstName: string | null; age: number; isAdmin: boolean } = {
  firstName: firstName,
  age: age,
  isAdmin: isAdmin,
  // gender: 'm',
  // createdAt: new Date()
};

const users: Array<{
  firstName: string | null;
  age: number;
  isAdmin: boolean;
}> = [
  { firstName: null, age: 49, isAdmin: false },
  { firstName: "Doe", age: 99, isAdmin: false },
];

function formatUserAge(user: {
  firstName: string | null;
  age: number;
  isAdmin: boolean;
}): string {
  const message = `The user ${user.firstName} is ${user.age} years old.`;
  return message;
}

console.log(formatUserAge(users[1]));

const dishes: any = [];
const calculateDishCalories = (dish: {
  protein: number;
  fat: number;
  carbs: number;
}) => {
  const proteinCalories = dish.protein * 4;
  const fatCalories = dish.fat * 9;
  const carbsCalories = dish.carbs * 4;

  return proteinCalories + fatCalories + carbsCalories; // total KCal
};

console.log(calculateDishCalories({ protein: 50, fat: 35, carbs: 150 }));

const totalDishCalories = 20;
const newTotalDishCalories = totalDishCalories as unknown as string; // Tip: Convert any type to any type1

// Tip: Convert any error to Error type when using a try/catch block
try {
  const sum = 2 + 2;
  if (sum === 4) {
    throw new Error("The addition failed.");
  }
} catch (error) {
  const e = error as unknown as Error;
  console.log(e.message);
}

// let x = 0;
// let y  = 0;
// let z = 0;
const coordinates2d: [number, number] = [0, 0]; // Tip: Tuple [number,number]
const coordinates3d: [number, number, number] = [0, 0, 0];

const [x, y, z] = coordinates3d; // Tip: Array destructuring

console.log(x);
console.log(y);
console.log(z);

const breakpoints: [number, string, string, string] = [
  0,
  "30rem",
  "60rem",
  "120rem",
];
console.log(breakpoints);

type permission =
  | "create:settings"
  | "delete:settings"
  | "create:profile"
  | "create:post"
  | "update:post";

const permissions: [permission, permission, permission, permission] = [
  "create:settings",
  "delete:settings",
  "create:profile",
  "create:post",
];
console.log(permissions);

enum APP_ROUTES {
  HOME_PAGE = "/",
  REGISTER_PAGE = "/auth/register",
  LOGIN_PAGE = "/auth/login",
  PROFILE_PAGE = "/profile/{user_name}",
  POSTS_PAGE = "/posts",
  // Tip: Example of full URL: https://mywebsite.com/posts / https://mywebsite.com/auth/register
  // http://localhost:5173/posts (local development)
}

console.log(APP_ROUTES.POSTS_PAGE); // "/posts"

// Tip: Intefaces and Types
type User = {
  firstName: string;
  lastName?: string;
  age: number | null;
};

const newUser: User = { firstName: "John", lastName: "Doe", age: 30 };
const newUsers: Array<User> = [
  { firstName: "Jhon", age: 30 },
  { firstName: "Will", lastName: "Smith", age: 50 },
  { firstName: "Serena", lastName: "Williams", age: null },
];

type Role = "admin" | "guest" | "moderator" | "supervisor";
const newUserRole: Role = "admin";
console.log(newUserRole);

type Category = 0 | 1 | 2 | 3 | 4 | 5;
const category: Category = 3;
console.log(category);

interface AdminUser extends User {
  totalUsers: number;
}
const adminUser: AdminUser = { firstName: "Ion", age: 35, totalUsers: 30 };
console.log(adminUser);

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  isVisible: boolean;
  images: Array<string> | null;
  updatedAt: Date | null;
}

const product: Product = {
  id: "",
  name: "",
  price: 0,
  description: "",
  isVisible: false,
  images: [],
  updatedAt: null,
};
