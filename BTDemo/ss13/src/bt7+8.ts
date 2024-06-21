class Student {
    private id: number;
    private name: string;
    constructor(_id: number, _name: string) {
        this.id = _id;
        this.name = _name;
    }
    get _id(): number {
        return this.id;
    }
    get _name(): string {
        return this.name;
    }
    set _name(newName: string) {
        this.name = newName;
    }
}

class Classroom {
    students: Student[];
    constructor() {
        this.students = [];
    }
    addStudent(student: Student): void {
        this.students.push(student);
    }
    removeStudent(studentId: number): void {
        const index = this.students.findIndex(student => student._id === studentId);
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1)[0];
            allStudents.push(removedStudent);
        }
    }
    editStudent(studentId: number, newName: string): void {
        const student = this.students.find(student => student._id === studentId);
        if (student) {
            student._name = newName;
        }
    }
    showStudents(): void {
        this.students.forEach(student => {
            console.log(`id: ${student._id} name: ${student._name}`);
        });
    }
}

let allStudents: Student[] = [
    new Student(1, "kha"),
    new Student(2, "ha"),
    new Student(3, "ta"),
    new Student(4, "ngoc"),
    new Student(5, "tran"),
    new Student(6, "hao"),
];

let class1: Classroom = new Classroom();
let class2: Classroom = new Classroom();

for (let i = 0; i < allStudents.length; i++) {
    if (i < 3) {
        class1.addStudent(allStudents[i]);
    } else {
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