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
  const toCelsius = (temperature) => (temperature - 32) / 1.8;
  const toFahrenheit = (temperature) => temperature * 1.8 + 32;

  return { toCelsius, toFahrenheit };
};

const temparatureConverter = createTemparatureConverter();
console.log(temparatureConverter.toFahrenheit(32.2222222222222222));
console.log(temparatureConverter.toCelsius(90));
