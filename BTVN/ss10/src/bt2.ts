class Student {
    id: string;
    age: number;
    email: string;
    constructor(id: string, age: number, email: string) {
      this.id = id;
      this.age = age;
      this.email = email;
    }
  }
  
  let class1: Student[] = [];
  
  function add(event: Event): void {
    event.preventDefault();
    let idElement = document.getElementById("id") as HTMLInputElement;
    let ageElement = document.getElementById("age") as HTMLInputElement;
    let emailElement = document.getElementById("email") as HTMLInputElement;
  
    let id = idElement.value;
    let age = parseInt(ageElement.value);
    let email = emailElement.value;
  
    let student = new Student(id, age, email);
    class1.push(student);
  
    console.log(class1);
    (event.target as HTMLFormElement).reset();
  }
  
  document.getElementById("studentForm")!.addEventListener("submit", add);