"use strict";
// Định nghĩa một lớp có tên là students có các thuộc tính private id và name
// Tạo lớp student
class Student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
// Tạo lớp Classroom
class Classroom {
    constructor(students) {
        this.students = students;
    }
    addStudent(student) {
        this.students = [...this.students, student]; // Gọi bằng: spead operator
    }
    showStudents() {
        this.students.forEach(student => {
            console.log(student.name);
        });
    }
}
// // Tạo 1 mảng Students
// let students: Student[] = [];
// // Tạo 1 đối tượng Classroom
// let classRoom1: Classroom = new Classroom(students);
// console.log(classRoom1.students);
// Tạo 6 học sinh 
let s1 = new Student("Trung Tickey", 1);
let s2 = new Student("Tâm Anh", 2);
let s3 = new Student("Đình Kha", 3);
let s4 = new Student("Bảo Trân", 4);
let s5 = new Student("Như Ngọc", 5);
let s6 = new Student("Ní Hảo", 6);
// Tạo 2 lớp học và thêm hs vào lớp
let classRoom1 = new Classroom([]);
let classRoom2 = new Classroom([]);
// Thêm học sinh vào lớp 
classRoom1.addStudent(s1);
classRoom1.addStudent(s3);
classRoom1.addStudent(s5);
classRoom2.addStudent(s2);
classRoom2.addStudent(s4);
classRoom2.addStudent(s6);
// Hiện thị danh sách học sinh
classRoom1.showStudents();
classRoom2.showStudents();
