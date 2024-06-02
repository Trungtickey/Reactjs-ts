"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let class1 = [];
function add(event) {
    event.preventDefault();
    let idElement = document.getElementById("id");
    let ageElement = document.getElementById("age");
    let emailElement = document.getElementById("email");
    let id = idElement.value;
    let age = parseInt(ageElement.value);
    let email = emailElement.value;
    let student = new Student(id, age, email);
    class1.push(student);
    console.log(class1);
    event.target.reset();
}
document.getElementById("studentForm").addEventListener("submit", add);
