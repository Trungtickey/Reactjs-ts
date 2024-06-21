"use strict";
class Student {
    constructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    get _id() {
        return this.id;
    }
    get _name() {
        return this.name;
    }
    set _name(newName) {
        this.name = newName;
    }
}
class Classroom {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(studentId) {
        const index = this.students.findIndex(student => student._id === studentId);
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1)[0];
            allStudents.push(removedStudent);
        }
    }
    editStudent(studentId, newName) {
        const student = this.students.find(student => student._id === studentId);
        if (student) {
            student._name = newName;
        }
    }
    showStudents() {
        this.students.forEach(student => {
            console.log(`id: ${student._id} name: ${student._name}`);
        });
    }
}
let allStudents = [
    new Student(1, "kha"),
    new Student(2, "ha"),
    new Student(3, "ta"),
    new Student(4, "ngoc"),
    new Student(5, "tran"),
    new Student(6, "hao"),
];
let class1 = new Classroom();
let class2 = new Classroom();
for (let i = 0; i < allStudents.length; i++) {
    if (i < 3) {
        class1.addStudent(allStudents[i]);
    }
    else {
        class2.addStudent(allStudents[i]);
    }
}
console.log("lop 1: ");
class1.showStudents();
console.log("lop 2: ");
class2.showStudents();
console.log("Removing student with id 2 from class1 and adding to allStudents");
class1.removeStudent(2);
console.log("lop 1: ");
class1.showStudents();
console.log("lop 2: ");
class2.showStudents();
console.log("All students: ");
allStudents.forEach(student => console.log(`id: ${student._id} name: ${student._name}`));
console.log("Editing student with id 4 in class2 to new name 'newName'");
class2.editStudent(4, "newName");
console.log("lop 1: ");
class1.showStudents();
console.log("lop 2: ");
class2.showStudents();
console.log("All students: ");
allStudents.forEach(student => console.log(`id: ${student._id} name: ${student._name}`));
