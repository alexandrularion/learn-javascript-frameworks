#### 📌 Steps to Create and Run a TypeScript File with `ts-node`

✅ **1. Create a TypeScript File**  
Create a file named `app.ts` and add the following code:  
```ts
// app.ts
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("John"));
```

---

✅ **2. Run the TypeScript File with ts-node**  
Execute the file using:  
```sh
npx ts-node app.ts
```

---

#### 1. **Add Types to Variables**  
**Task:** Add TypeScript types to the following variables.  

```typescript
let userId; // Should be a number
let userName; // Should be a string
let isPremiumUser; // Should be a boolean

userId = 123;
userName = "Alice";
isPremiumUser = true;
```  

**Tips:**  
- Use `number` for `userId`, `string` for `userName`, and `boolean` for `isPremiumUser`.  

---

#### 2. **Define a Custom Type**  
**Task:** Create a custom `type` for a `Car` with the following properties:  
- `brand`: string  
- `model`: string  
- `year`: number  

Use this type to define a `myCar` object.  

```typescript
type Car = {
  // Define properties here
};

const myCar: Car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};
```

**Tips:**  
- Use `type` to create reusable types.  

---

#### 3. **Type Function Parameters and Return Values**  
**Task:** Add types to the parameters and return value of the following function:  

```typescript
function multiply(a, b) {
  return a * b;
}
```  

**Tips:**  
- Use `number` for both parameters and the return type.  
- Explicitly declare types like `function multiply(a: number, b: number): number`.

---

#### 4. **Use Union Types**  
**Task:** Define a variable `userRole` that can either be `"admin"`, `"user"`, or `"guest"`.  

```typescript
let userRole;

userRole = "admin"; // Valid
userRole = "user"; // Valid
userRole = "unknown"; // Should cause a TypeScript error
```

**Tips:**  
- Use `|` to define union types: `let userRole: "admin" | "user" | "guest";`.  

---

#### 5. **Add Optional Properties**  
**Task:** Create a `Profile` type where:  
- `name` is required.  
- `email` is optional.  

Define a `profile` object using this type.  

```typescript
type Profile = {
  // Add properties here
};

const profile: Profile = {
  name: "John"
};
```

**Tips:**  
- Use `?` to make a property optional.  

---

#### 6. **Use Readonly Properties**  
**Task:** Create a `Book` type where the `id` is `readonly` and cannot be modified.  

```typescript
type Book = {
  // Define properties
};

const book: Book = {
  id: 1,
  title: "TypeScript Basics"
};

// Try modifying book.id (should cause an error)
```

**Tips:**  
- Use `readonly` before a property name to make it immutable.  

---

#### 7. **Define Arrays with Types**  
**Task:** Create an array of strings that holds a list of programming languages.  

```typescript
const languages: string[] = ["JavaScript", "TypeScript", "Python"];
```  

**Tips:**  
- Use `type[]` (e.g., `string[]`) to define arrays with specific types.  

---

#### 8. **Create a Tuple**  
**Task:** Define a tuple for a `Point` with `x` and `y` coordinates as numbers.  

```typescript
const point: [number, number] = [10, 20];
```

**Tips:**  
- Use `[type1, type2, ...]` for fixed-length tuples.  

---

#### 9. **Use Type Assertions**  
**Task:** Convert the type of a variable using type assertion.  

```typescript
let userInput: any = "This is a string";

// Use a type assertion to treat userInput as a string
const inputLength = (userInput as string).length;
```

**Tips:**  
- Use `as type` to assert a specific type for a variable.  

---

#### 10. **Define an Enum**  
**Task:** Create an `enum` for user statuses: `ACTIVE`, `INACTIVE`, `BANNED`.  

```typescript
enum UserStatus {
  ACTIVE,
  INACTIVE,
  BANNED
}

const currentUserStatus: UserStatus = UserStatus.ACTIVE;
```

**Tips:**  
- Use `enum` to define a set of named constants.  