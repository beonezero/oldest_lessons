//document.querySelector(".title").innerText = "Hello";
let myHeader = document.querySelector(".title");
myHeader.innerText = "Hello Hello";

let myName = document.querySelector(".name");
myName.innerText = "Neakhai Yauheni";

let plus = document.querySelector(".plus");
plus.innerText = 66 + 33;

let numberOne = 10;
let numberTwo = 15;

let mySum = numberOne + numberTwo;

let sumElement = document.querySelector(".sum");
sumElement.innerText = mySum;

let multiplyElement = document.querySelector(".multiply");
multiplyElement.innerText = 9 * 9;

let minusElement = document.querySelector(".minus");
minusElement.innerText = 100 - 35;

let addText = document.querySelector(".add-text");
// let firstName = "Yauheni";
// let lastName = "Niakhai";
// let age = 27;
//Интерполяция
// let fullName = `${firstName} ${lastName} ${age} - years old`;
// addText.innerText = fullName;

let person = {
  firstName: "Yauheni",
  lastName: "Neakhai",
  age: 27,
};

let fullName = `${person.firstName} ${person.lastName} ${person.age}`;
addText.innerText = fullName;

let car = document.querySelector(".car");

let myCar = {
  model: "Volvo",
  year: 2023,
  color: "gray",
};
car.innerText = `Model is ${myCar.model}, color - ${myCar.color}, and year is ${myCar.year}`;

let cars = ["BMW", "Audi", "Tesla", "Toyota"];
//cars.push("Mers")
//cars.pop();
// cars.shift();
// cars.unshift("Tractor");

let carInner = document.querySelector(".car_inner");
//carInner.innerText = `${cars[1]} and ${cars[3]}`;
carInner.innerText = cars;
