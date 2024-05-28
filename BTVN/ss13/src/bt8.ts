// Định nghĩa một lớp có tên là students có các thuộc tính private id và name
// Tạo lớp student
class Student1{
    // Khai báo các thuộc tính
    name: string;
    id: number;
    constructor(name: string, id: number){
        this.name=name;
        this.id=id;
    }
    // Khai báo các phương thức
}
// Tạo lớp Classroom

class Classroom1{
    // constructor(students: Student[]){
    //     Classroom.students=students;
    // } 
    static students: Student[] = [];
    static addStudent(student: Student){
        Classroom1.students=[...Classroom1.students, student]; // Gọi bằng: spead operator
    }
    static showStudents(){
        Classroom1.students.forEach(student => {
            console.log(student.name); //in tên học sinh
        });
    }
    static removeStudent(studentId: number){
        Classroom1.students = Classroom1.students.filter(student => {
            return student.id != studentId;
        });
    }
    static editStudent(student: Student){
        Classroom1.students = Classroom1.students.map(item => {
            if(item.id == student.id){
                return student;
            }
            return item;
        })
    }
}

// // Tạo 1 mảng Students
// let students: Student[] = [];

// // Tạo 1 đối tượng Classroom
// let classRoom1: Classroom = new Classroom(students);
// console.log(classRoom1.students);
// Tạo 6 học sinh 
let t1:Student = new Student("Trung Tickey",1);
let t2:Student = new Student("Tâm Anh",2);
let t3:Student = new Student("Đình Kha",3);
let t4:Student = new Student("Bảo Trân",4);
let t5:Student = new Student("Như Ngọc",5);
let t6:Student = new Student("Ní Hảo",6);
// Tạo 2 lớp học và thêm hs vào lớp
// let classRoom1 = new Classroom([]);
// let classRoom2 = new Classroom([]);

// Thêm học sinh vào lớp 
Classroom1.addStudent(s1);
Classroom1.addStudent(s3);
Classroom1.addStudent(s5);

Classroom1.addStudent(s2);
Classroom1.addStudent(s4);
Classroom1.addStudent(s6);

// Hiện thị danh sách học sinh
Classroom1.showStudents();
Classroom1.showStudents();

// xóa học sinh 
let input =  Number(window.prompt('Nhập id muốn xóa'))

Classroom1.removeStudent(input);

//Hiện thị lại class
Classroom1.showStudents();

// edit 
let idEdit = Number(window.prompt('Nhập id muốn sửa'))
let newName = window.prompt('Nhập tên mới') as string;
let updateStudent = new Student(newName, idEdit)

Classroom1.editStudent(updateStudent);

classRoom1.showStudents(); 

