// const personFactory = (name, age) => {
//   const sayHello = () => console.log(`Hello, my name is ${name}`);

//   return { name, age, sayHello };
// };

// const person1 = personFactory("John", 30);
// console.log(person1.sayHello());

// const bookFactory = (title, author, pages) => {
//   const getInfo = () =>
//     console.log(`${title} was written by ${author} in ${pages} pages`);

//   return { title, author, pages, getInfo };
// };

// const book1 = bookFactory("JavaScript: The good parts","Douglas Crockford",235);

// console.log(book1.getInfo());

// const person = (name, color, age, food) => {
//   const getInfo = () =>
//     console.log(
//       `${name} is ${age} years old. His favorite color is ${color} and loves ${food}`
//     );
//   return { name, color, age, food, getInfo };
// };

// const person1 = person("Maynard", "red", 34, "rice");
// console.log(person1.getInfo());

// const name = "Art";

// const printName = (string) => {
//   const nameInsideFuntion = string;

//   console.log(nameInsideFuntion);
// };

// printName("AL");

// console.log(name);

// let a = 17;

// const func = (x) => {
//   let a = x;
// };

// func(99);

// console.log(a);

// const counter = () => {
//   let count = 0;
//   return () => {
//     count++;
//     console.log(count);
//   };
// };

// const myCounter = counter();
// console.log(myCounter());

// const greeting = (name) => {
//   const message = `Hello, ${name}`;

//   return () => console.log(message);
// };

// const greetAl = greeting("Al");
// greetAl();

// const greetArt = greeting("Art");
// greetArt();

// const createCounter = () => {
//   let count = 0;

//   const increment = () => {
//     count++;
//     console.log(count);
//   };

//   const decrement = () => {
//     count--;
//     console.log(count);
//   };
//   return { increment, decrement };
// };

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.decrement();

// const createCartItem = (item, quantity) => {
//   const increaseQuantity = () => {
//     quantity++;
//     console.log(`Increased quantity of ${item} to ${quantity}`);
//   };

//   const decreaseQuantity = () => {
//     quantity--;
//     console.log(`Decreased quantity of ${item} to ${quantity}`);
//   };

//   return { item, quantity, increaseQuantity, decreaseQuantity };
// };

// const cartItem = createCartItem("milk", 2);
// cartItem.increaseQuantity();
// cartItem.increaseQuantity();
// cartItem.decreaseQuantity();
// cartItem.decreaseQuantity();
// cartItem.decreaseQuantity();

// const cartItem2 = createCartItem("bread", 5);
// cartItem2.increaseQuantity();

// Excercise: Scope and closure

// 1.write a function called "createTemparatureConverter"
// 2. It takes a temperature in Celsius as an argument and returns 2 functions
// 3. The first function is called "toFahrenheit" and takes a temperature in Celsius as an argument
// 4. The second function is called "toCelsius" and takes a temperature in Fahrenheit as an argument

// formula to convert from Celsius to Fahrenheit: (Celsius * 1.8) + 32
// formula to convert from Fahrenheit to Celsius: (Fahrenheit - 32) / 1.8

const createTemparatureConverter = () => {
  const toCelsius = (Fahrenheit) => (Fahrenheit - 32) / 1.8;
  const toFahrenheit = (Celsius) => Celsius * 1.8 + 32;

  return { toCelsius, toFahrenheit };
};

const temparatureConverter = createTemparatureConverter();
console.log(temparatureConverter.toFahrenheit(32.2222222222222222));
console.log(temparatureConverter.toCelsius(90));

// Excercise: create a closure function with the name 'createCounter'
//it consist of a coint varianle initialize 0
// increas and decrease method
// assign the closure function to a variable called counter

// const createCounter = () => {
//   let count = 0;

//   const increment = () => {
//     count++;
//     console.log(count);
//   };
//   const decrement = () => {
//     count--;
//     console.log(count);
//   };

//   return { increment, decrement };
// };

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.decrement();

// Prefixing;

const createCounter = () => {
  let count = 0;

  const increment = () => ++count;
  const decrement = () => --count;

  return { increment, decrement };
};

// Private variable and functions
// const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());

// const factoryFunction = (string) => {
//   const capitalizeString = () => string.toUpperCase();
//   const printString = () => console.log(`${capitalizeString()}`);

//   return { printString };
// };

// const cookies = factoryFunction("cookies");

// cookies.printString();

const playerFactory = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName = () => name;
  const getHealth = () => health;

  const die = () => console.log(`${name} died!`);

  const damage = (dmg) => {
    health -= dmg;

    if (health <= 0) {
      die();
    }
  };

  const attack = (enemy) => {
    enemy.damage(2);
    console.log(`${enemy.getName()} has been hit!`);
    console.log(`Remaining health: ${enemy.getHealth()}`);
  };

  return { getLevel, getName, getHealth, attack, damage };
};

const player = playerFactory("Black Knight", 5);
const enemy = playerFactory("Minotaur", 4);

// IIFE- immediately invoke function expression
const calculator = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return { add, subtract, multiply, divide };
})();

console.log(calculator.add(1, 2));
console.log(calculator.subtract(10, 2));
console.log(calculator.divide(10, 2));
console.log(calculator.multiply(10, 2));
