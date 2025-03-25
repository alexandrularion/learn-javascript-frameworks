// Tip: Any JavaScript code is valid in TypeScript
var displayLoginMessage = function (username) {
    return "Hello, ".concat(username);
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
var firstName = "Gigel";
var age = 25;
var isAdmin = true;
var user = {
    firstName: firstName,
    age: age,
    isAdmin: isAdmin,
    // gender: 'm',
    // createdAt: new Date()
};
var users = [
    { firstName: null, age: 49, isAdmin: false },
    { firstName: "Doe", age: 99, isAdmin: false },
];
function formatUserAge(user) {
    var message = "The user ".concat(user.firstName, " is ").concat(user.age, " years old.");
    return message;
}
console.log(formatUserAge(users[1]));
var dishes = [];
var calculateDishCalories = function (dish) {
    var proteinCalories = dish.protein * 4;
    var fatCalories = dish.fat * 9;
    var carbsCalories = dish.carbs * 4;
    return proteinCalories + fatCalories + carbsCalories; // total KCal
};
console.log(calculateDishCalories({ protein: 50, fat: 35, carbs: 150 }));
var totalDishCalories = 20;
var newTotalDishCalories = totalDishCalories; // Tip: Convert any type to any type1
// Tip: Convert any error to Error type when using a try/catch block
try {
    var sum = 2 + 2;
    if (sum === 4) {
        throw new Error("The addition failed.");
    }
}
catch (error) {
    var e = error;
    console.log(e.message);
}
// let x = 0;
// let y  = 0;
// let z = 0;
var coordinates2d = [0, 0]; // Tip: Tuple [number,number]
var coordinates3d = [0, 0, 0];
var x = coordinates3d[0], y = coordinates3d[1], z = coordinates3d[2]; // Tip: Array destructuring
console.log(x);
console.log(y);
console.log(z);
var breakpoints = [
    0,
    "30rem",
    "60rem",
    "120rem",
];
console.log(breakpoints);
var permissions = [
    "create:settings",
    "delete:settings",
    "create:profile",
    "create:post",
];
console.log(permissions);
var APP_ROUTES;
(function (APP_ROUTES) {
    APP_ROUTES["HOME_PAGE"] = "/";
    APP_ROUTES["REGISTER_PAGE"] = "/auth/register";
    APP_ROUTES["LOGIN_PAGE"] = "/auth/login";
    APP_ROUTES["PROFILE_PAGE"] = "/profile/{user_name}";
    APP_ROUTES["POSTS_PAGE"] = "/posts";
    // Tip: Example of full URL: https://mywebsite.com/posts / https://mywebsite.com/auth/register
    // http://localhost:5173/posts (local development)
})(APP_ROUTES || (APP_ROUTES = {}));
console.log(APP_ROUTES.POSTS_PAGE); // "/posts"
var newUser = { firstName: "John", lastName: "Doe", age: 30 };
var newUsers = [
    { firstName: "Jhon", age: 30 },
    { firstName: "Will", lastName: "Smith", age: 50 },
    { firstName: "Serena", lastName: "Williams", age: null },
];
var newUserRole = "admin";
console.log(newUserRole);
var category = 3;
console.log(category);
var adminUser = { firstName: "Ion", age: 35, totalUsers: 30 };
console.log(adminUser);
var product = {
    id: "",
    name: "",
    price: 0,
    description: "",
    isVisible: false,
    images: [],
    updatedAt: null,
};
