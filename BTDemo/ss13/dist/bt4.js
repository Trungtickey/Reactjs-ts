"use strict";
class Animal1 {
    // Concrete method (có phần triển khai)
    move() {
        console.log("Moving...");
    }
}
class Tiger extends Animal1 {
    // Triển khai phương thức abstract
    makeSound() {
        console.log("Roar! Roar!");
    }
}
class Elephant extends Animal1 {
    // Triển khai phương thức abstract
    makeSound() {
        console.log("Trumpet! Trumpet!");
    }
}
let tiger = new Tiger();
tiger.makeSound(); // Output: Roar! Roar!
tiger.move(); // Output: Moving...
let elephant = new Elephant();
elephant.makeSound(); // Output: Trumpet! Trumpet!
elephant.move(); // Output: Moving...
class Car1 {
    // Concrete method
    startEngine() {
        console.log("Engine started.");
    }
    // Concrete method
    stopEngine() {
        console.log("Engine stopped.");
    }
}
class Sedan extends Car1 {
    // Ghi đè phương thức startEngine
    startEngine() {
        console.log("Sedan engine started.");
    }
}
class Truck extends Car1 {
}
