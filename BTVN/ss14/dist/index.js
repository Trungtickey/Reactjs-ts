"use strict";
// Định nghĩa lớp Student có các thuộc tính private id và name, tạo một mảng để chứa các thực thể được tạo ra từ lớp student.
// Định nghĩa lớp Classroom có thuộc tính students là mảng các học sinh trong lớp đó. Lớp có phương thức addStudent để thêm học sinh vào trong lớp, phương thức showStudents để in ra danh sách học sinh trong lớp. Phương thức sẽ có tham số truyền vào là id học sinh. Phương thức sẽ thêm học sinh từ trong mảng tất cả học sinh vào lớp học, sau khi thêm thì xóa học sinh đó khỏi mảng tất cả học sinh.
// Tạo 6 thực thể từ lớp Student và thêm vào mảng tất cả học sinh.
// Tạo 2 thực thể từ lớp Classroom và thêm học sinh cho chúng, mỗi lớp học sẽ có 3 học sinh.
class Student {
    constructor(name, id) {
        this.id = id;
        this.name = name;
    }
}
class Classroom {
    constructor(students) {
        this.students = [];
    }
    addStudent(student) {
        this.students = [...this.students, student];
    }
    showStudents() {
        this.students.forEach((a) => console.log(`name: ${a.name}`));
    }
    removeStudent(id) {
        this.students = this.students.filter((student) => student.id != id);
        return this.students;
    }
    edit(student) {
        this.students = this.students.map((item) => {
            if (item.id == student.id) {
                return student;
            }
            return item;
        });
    }
}
let classAll = [
    new Student("Kha", 1),
    new Student("Ha", 2),
    new Student("TA", 3),
    new Student("Tran", 4),
    new Student("Ngoc", 5),
    new Student("Hao", 6),
];
let class1 = new Classroom([]);
let class2 = new Classroom([]);
for (let i = 0; i < classAll.length; i++) {
    if (i < 3) {
        class1.addStudent(classAll[i]);
    }
    else {
        class2.addStudent(classAll[i]);
    }
}
console.log("lop 1: ");
class1.showStudents();
console.log("lop 2:");
class2.showStudents();
// let id = window.prompt("nhập id muốn xóa: ");
// ////////////////////////////////////////////////////////////////////
// let editId = Number(window.prompt("nhập id muốn sửa: "));
// let newName = window.prompt("nhập tên mới: ") as string;
// let edit = new Student(newName, editId);
// console.log("đã xóa ở lớp 1:");
// class1.removeStudent(Number(id));
// class1.showStudents();
// console.log("đã sửa ở lớp 2:");
// class2.edit(edit);
// class2.showStudents();
document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let idIN = document.getElementById("id");
    let idSua = document.getElementById("editId");
    let nameSua = document.getElementById("editName");
    let id = Number(idIN.value);
    let idEdit = Number(idSua.value);
    let nameEdit = nameSua.value;
    if (id) {
        class1.removeStudent(id);
        console.log("đã xóa ở lớp 1:");
        class1.showStudents();
    }
    if (idEdit && nameEdit) {
        let edit = new Student(nameEdit, idEdit);
        class2.edit(edit);
        console.log("đã sửa ở lớp 2:");
        class2.showStudents();
    }
});
