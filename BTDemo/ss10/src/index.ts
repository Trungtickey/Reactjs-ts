class Person {
    private sex: boolean;
    private height: number;
    private weight: number;
    constructor(sex: boolean, height: number, weight: number) {
        this.sex = sex;
        this.height = height;
        this.weight = weight;
    }
    public calBMI() {
        return this.weight / (this.height * this.height);
    }
    public toString() {
        return `weight: ${this.weight},height: ${this.height}, sex: ${this.sex}`;
    }
    // getter : lấy ra các thuộc tính private
    public getSex(){
        return this.sex;
    }
    public getHeight(){
        return this.height;
    }
    public getWeight(){
        return this.weight;
    }
    // setter :  thay đổi giá trị các thuộc tính dựa vào tham số truyền vào
    public setSex(sex: boolean){
        this.sex = sex;
    }
    public setHeight(height: number){
        this.height = height;
    }
    public setWeight(weight: number){
        this.weight = weight;
    }
}

class Student extends Person {
    private name: string;
    private age: number;
    private id: string;
    private balance : number;
    constructor(name: string, age: number, id: string, weight: number, sex: boolean, height: number) {
        // gọi tới constructor của Person
        super(sex, height, weight) // phải được gọi đầu tiên của constructor của lớp con
        this.name = name;
        this.age = age;
        this.id = id;
        this.balance = 0;
    }
    doHomeWork() {
        console.log(`${this.name} đang làm bài tập !`);
    }
    // ghi đè 
    toString() {
        return `Tên: ${this.name}, tuổi: ${this.age}, id: ${this.id},`
        +`weight: ${this.getWeight()},height: ${this.getHeight()}, sex: ${this.getSex()}`;
    }
    private toStringPerson(){
        return super.toString();   // gọi tới phương thức chưa bị ghi đè của lớp cha
    }
    getBalance(){
        return this.balance;
    }
}

// tính kế thừa
// sử dụng từ khóa extends để kế thừa lớp kkhacs
let student1 : Student = new Student("Hồ Công Vương", 11, "HS01", 50, true, 1.6); // constructor của con 
console.log(student1.toString()); //?? gọi đến của con 
// console.log(student1.toStringPerson()+"fake");
// student1.doHomeWork();
console.log("sô dư :",student1.getBalance());

console.log(student1.calBMI());


let person = new Person(true,1.8,70);
console.log(person.toString());


// cú pháp khai báo biến 
let variable : Person; // kiểu khai báo là Person 
variable = new Student("Hồ Công Vương", 11, "HS01", 50, true, 1.6); // kiểu khởi tạo / kiểu thực tế 
// đối tượng này có thể thực hiện những hành vi hay đặc điểm gì : kiểu khai báo
// biết được phương thức ghi đè nào được thực thi: kiểu thực tế
console.log(variable.toString() ); // gọi đến của student ;
variable = new Person(true,1.8,70);
console.log(variable.toString()); // gọi đến của person

// tính bao đóng
// hạn chế quyền truy cập của các tác nhân bên ngoai :
// private, protected , (default) , public 
// public : có thể truy cập ở bất cứ đâu 
// default (ko khai báo từ khóa) : chỉ có thể truy cập trong package
// protected : cho phép truy cập bên ngoài nhưng phải có quan hệ kế thừa
// private : chỉ cho phép truy cập bên trong lớp

class Name{
    id: number = 0;
    name: string = "Trung";
    constructor(name: string, id: number){
        this.id = id;
        this.name = name;
    }
}
// this: Trỏ tới đối tượng sinh ra trong lớp đó 
// class: Cũng là 1 dataType 
// Constructor là hàm khởi tạo, trùng tên với tên lớp
// Khi không khai báo constructor thì mặc định JS tạo constructor 0 tham số

let obj : Name = new Name ("Trung", 1);
let name1 : Name = new Name("Tickey", 2);
console.log(obj);
console.log(name1);

