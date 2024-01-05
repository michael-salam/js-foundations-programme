/* 
TASK 1
Define an object to represent a mobile phone.
It should have 5 properties: brand, model, color, battery size (in mAh), and price.
It should also perform 5 actions (methods): switch on, switch off, make phone call, send text message, and take photo.
The methods can simply log a message to the console based on what it does.
Name the properties and methods accordingly.
*/

const mobilePhone = {
  brand: "Samsung",
  model: "Galaxy S8",
  color: "black",
  batterySize: "3500mAh",
  price: "N100,000",
  switchOn: function () {
    console.log("Switching phone on...");
  },
  switchOff: function () {
    console.log("Switching phone off...");
  },
  makePhoneCall: function () {
    console.log("Making a phone call...");
  },
  sendTextMessage: function () {
    console.log("Sending a text message...");
  },
  takePhoto: function () {
    console.log("Taking a photo...");
  },
};

/*
TASK 2
Follow each comment below and write the JavaScript code that does what it describes
*/

// 1. DECLARE A VARIABLE TO STORE THE FIRST NAME OF A USER AS "Bart"
let firstName = "Bart";
// 2. DECLARE A VARIABLE TO STORE THE LAST NAME OF THE USER AS "Simpson"
let lastName = "Simpson";
// 3. DECLARE A VARIABLE TO STORE THE BIRTH YEAR OF THE USER AS 1979
let birthYear = 1979;
// 4. DECLARE A VARIABLE TO STORE THE AGE OF A USER, BY SUBTRACTING THEIR BIRTH YEAR FROM THE CURRENT YEAR (2023)
let age = 2023 - birthYear;
// 5. DECLARE A VARIABLE TO STORE THE FULL NAME OF THE USER, BY CONCATENATING THEIR FIRST AND LAST NAMES
let fullName = `${firstName} ${lastName}`;
// 6. LOG THE USER'S AGE TO THE CONSOLE
// console.log(age);
// 7. LOG THE USER'S FULL NAME TO THE CONSOLE
// console.log(fullName);

/*
TASK 3
Show how you can use a for...in and a for...of loop to get all the car brands from the array below
*/
const cars = [
  { id: 1, color: "green", brand: "Mercedes", isInGoodCondition: false },
  { id: 2, color: "orange", brand: "Volkswagen", isInGoodCondition: true },
  { id: 3, color: "yellow", brand: "Toyota", isInGoodCondition: true },
  { id: 4, color: "red", brand: "Honda", isInGoodCondition: true },
  { id: 5, color: "white", brand: "Hyundai", isInGoodCondition: false },
];

// for...in loop
for (let car in cars) {
  //   console.log(cars[car].brand);
}
// for...of loop
for (let car of cars) {
  //   console.log(car.brand);
}

/*
TASK 4
Using the cars array in TASK 3, write the code that corresponds to the following comments
*/

// 1. LOOP THROUGH ALL THE CARS IN THE CARS ARRAY
// 2. CHECK IF EACH CAR IS IN GOOD CONDITION OR NOT
// 3. IF THE CAR IS IN GOOD CONDITION, LOG "[brand] is in good condition", where [brand] is the brand of the car
// 4. IF THE CAR IS NOT IN GOOD CONDITION, LOG "[brand] needs to be fixed", where [brand] is the brand of the car
// Hint: you can use string concatenation to combine the brand and the rest of the text

// for (let car of cars) {
//   if (car.isInGoodCondition) console.log(`${car.brand} is in good condition`);
//   else console.log(`${car.brand} needs to be fixed`);
// }

/*
TASK 5
Comment the most appropriate data type for each of the following variables and assign corresponding values.
I have assigned empty strings to all of them to prevent any errors. You must change the values to the appropriate data type.
*/

// Example - Scenario 1: User Information
const userName = "user3605"; // String
const userAge = 37; // Number
const isSubscribed = false; // Boolean

// Scenario 2: Product Details
const productName = "balloon"; //String
const productPrice = 150000; // Number
const inStock = true; // Boolean
const features = {
  // Object
  color: "red",
  size: "large",
};

// Scenario 3: Weather Information
const temperature = 37.5; // Number
const isSunny = false; // Boolean

// Scenario 4: Book Details
const bookTitle = "Rich Dad Poor Dad"; // String
const authorDetails = {
  nameOfAuthor: "Robert Kiyosaki",
  age: 68,
}; // Object
const isBestseller = true; // Boolean

// Scenario 5: User Preferences
const favoriteColors = ["red", "green", "blue"]; // Array
const hasPets = true; // Boolean

// Scenario 6: Dynamic Content
let dynamicValue;
