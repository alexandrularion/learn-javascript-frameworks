// Native JavaScript
function calcSum() {
  return 10 + 20;
}

console.log(calcSum()); // 30

// Static Type Check
let fullName: string = "Dry Cooker";
fullName = "Popescu Vasile"; // assigning new value
// fullName = 2; // Type 'number' is not assignable to type 'string'.
console.log(fullName); // 2

// explicit basic types
/**
 Data types
 Primitives: String, number, boolean, null, undefined, symbol, NaN
 Non-primitives: Array, Object, Function, Date

 JavaScript syntax:
 varkeyword <variableName> = <value>;

 TypeScript syntax:
 varkeyword <variableName>:<type> = <value>;
 */

// String
const greeting: string = "Hello, sir!"; // double quotes
const color: string = "red"; // single quotes
const sentence: string = `I like the ${color} color.
And tech.`; // "I like the red color" (template string)

// Number
const sum: number = 200; // decimal
const binary: number = 0b001; // binary (nr. 1)
const octal: number = 0o744; // octal
const hexadecimal: number = 0x99aabb33; // hexadecimal
const bigint: bigint = 999n; // big int
const result: number = NaN;

// Boolean
const isLoggedIn: boolean = false;
const isVisible: boolean = true;

// Null vs Undefined
let age: undefined; // undefined
let gender: string | null = null; // null
gender = "m"; // string

// Any
let product: any = {
  name: "Dry Cooker",
  stock: 30,
};
product = "Aspirator"; // Wrong: May lead to type mistakes

// Unknown
let biography: unknown = "I have a few hobbies like playing table tennis, etc.";

biography = {
  description: "...",
  createdAt: "12/24/2024",
}; // may be an object

biography = "..."; // may be a string

gender = 2 as unknown as string; // casting

// Array
const numList: Array<number> = [1, 2, 3, 4, 5]; // Array of numbers
numList.push(10); // we can push only numbers

const productList: Array<{
    name: string;
    stock: number;
    description: string;
  }> = [
  { name: "My product",stock: 10, description: "Description of the product" },
  { name: "New product", stock: 100, description: "My description"}
];

productList.forEach((product)=> {
    console.log(product.stock)
}); // 10 100

// Object
type User = {
    name: string;
    age: number;
    email: string;
    role: string;
    isAccountNew: boolean;
    nrOfPosts: number | null;
    posts?: Array<any>;
    createdAt: Date;
};

const user:User = {
    name: "Tudor Popescu",
    age: 24,
    email: "tudor.popescu@gmail.com",
    role: "administrator",
    isAccountNew: false,
    nrOfPosts: null,
    // posts: [],
    createdAt: new Date()
}

console.log(user.email); // "tudor.popescu@gmail.com"


interface Account {
    provider: "facebook" | "google" | "password";
    jwtToken: string;
    createdAt: Date;
    updatedAt: Date;
}

interface AdminAccount extends Account {
    specialPermissions: [ "update:user", "delete:user"?, "create:user"?], // tuple
    rootAdmin: boolean;
}

interface ModeratorAccount extends Account {
    permissions: ["create:post","update:post","delete:comments"?]
}

const adminAccount: AdminAccount = {
    provider: "facebook",
    jwtToken: "lk;lkasd90i1209i390jalkksjdljasd892u90i2302eklajlskdjlsdj293i423.asd92342394234",
    createdAt: new Date(),
    updatedAt: new Date(),
    rootAdmin: true,
    specialPermissions: ["update:user","delete:user"]
}

const moderatorAccount: ModeratorAccount = {
    permissions: ["create:post","update:post"],
    provider: "password",
    jwtToken: "lk;lkasd90i1209i390jalkksjdljasd892u90i2302eklajlskdjlsdj293i423.asd92342394234",
    createdAt: new Date(),
    updatedAt: new Date(),
}

console.log(adminAccount); // object
console.log(moderatorAccount); // object

// Functions
function multiplyByTwo(a:number, b:number, c?:number):number {
    return a * b + (c || 1);
}

multiplyByTwo(10, 100, undefined); // 1001