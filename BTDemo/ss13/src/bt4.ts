abstract class Animal1 {
    // Abstract method (không có phần triển khai)
    abstract makeSound(): void;
  
    // Concrete method (có phần triển khai)
    move(): void {
      console.log("Moving...");
    }
  }
  
  class Tiger extends Animal1 {
    // Triển khai phương thức abstract
    makeSound(): void {
      console.log("Roar! Roar!");
    }
  }
  
  class Elephant extends Animal1 {
    // Triển khai phương thức abstract
    makeSound(): void {
      console.log("Trumpet! Trumpet!");
    }
  }
  
  let tiger: Tiger = new Tiger();
  tiger.makeSound(); // Output: Roar! Roar!
  tiger.move(); // Output: Moving...
  
  let elephant: Elephant = new Elephant();
  elephant.makeSound(); // Output: Trumpet! Trumpet!
  elephant.move(); // Output: Moving...
  
  class Car1 {
    // Concrete method
    startEngine(): void {
      console.log("Engine started.");
    }
  
    // Concrete method
    stopEngine(): void {
      console.log("Engine stopped.");
    }
  }
  
  class Sedan extends Car1 {
    // Ghi đè phương thức startEngine
    startEngine(): void {
      console.log("Sedan engine started.");
    }
  }
  
  class Truck extends Car1 {
    // Sử dụng phương thức startEngine mặc định
  }