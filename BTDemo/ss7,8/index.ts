// Các kiểu dữ liệu cơ bản  P2
// Array : mảng
// Cách 1: Được khuyên dùng
let array : string[] = ["Sang", "Lien", "Vương"];
// Cách 2 : không được khuyên dùng
let array2 : Array<number> = [1,2,3,4,5];
array.push("Trung", "Thành", "An", "Nhiên");
console.log(array);

// Object : Định nghĩa 1 đối tượng : thuộc tính và phương thức
let obj : {
    id : string,
    name : string,
    age : number,
    sex : boolean,
    getInfo : () => string
};
obj = {
    id : "1",
    name : "Tickey",
    age : 20,
    sex : true,
    getInfo : ()=>{
        return "id :" + obj.id + "| name : " + obj.name + "| age :" + obj.age + "| sex :" + obj.sex 
    } 
}

console.log(obj.getInfo());

// enum : danh sách các hằng số 
enum Color {
    Red, Blue, Green=100, Pink, Yellow
}
console.log(Color.Yellow);
let color : Color = Color.Green;

// never :; function - không bao giờ xảy ra 

// lỗi javascript
function error(message : string) : never{
    throw new Error(message); // ném lỗi trong JS
}

// error("Hôm nay Lại nhớ quê ròi");
// Vòng lặp vô hạn
function infiniteLoop() : never{
    while(true){
        console.log("Ìninite Loop")
    }
}

// UnKnow : Là hàm thực hiện chua xác định (giống any)
let unknownVar:unknown = 1;
unknownVar = "abc";
// console.log(unKnownVar);

// Toán tử hạng (bit)

// let a = 4&5;
// 4 = 1*2^2+0*2^1 + 0*2^2
// 100 = 4
// 101 = 5

// let a = !5;
// console.log(a); // false

let b = 10|11;
// 1010 = 10
// 1011 = 11
// ----
// 1011 = 11
console.log(b);

// Kiểu giao cắt : Cho phép khai báo 1 danh sách kiểu dữ liệu tùy biến

let numberOrString : number|string;
numberOrString = 10;
numberOrString = "10";

let nameStudent : (number|string) & (string|boolean);
nameStudent = "Tickey";

type NameStudent = (number|string) & (string|boolean);

let nameStudent2 : NameStudent;
nameStudent2 = "Liên, Thành";

type Student = {
    id: string,
    name: string,
    age: number,
    sex: boolean,
}

let students : Student[];
let students2 : Array<Student>;

type Numbers = number;
let c : Numbers; 
