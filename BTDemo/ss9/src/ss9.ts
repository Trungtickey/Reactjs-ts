// Type Tuple : mảng cố định

let arrNotChangeLength: [number, string, boolean];
arrNotChangeLength = [1, "nam", true];

console.log(arrNotChangeLength);
// console.log("3",arrNotChangeLength[3]);

// option readonly 
let number: readonly number[] = [10]; // khi báo ngầm định / literals 

// Type Allias - kiểu đối tượng 
// từ khóa type
type UserType = {
   readonly id: number, // chỉ đọc
    name:any,
    age: number
};
// từ khóa  : interface 

interface UserInterface {
    id: number,
    name: string,
    age: number
};
// từ khóa  : class 
class UserClass {
    id: number
    name: string
    age: number
    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

let user1: UserType = {
    id: 1,
    name:undefined,
    age:19
}


// Type guard 
// typeof
// instance of (kiểm tra kiểu dữ liệu của 1 instance (đối tượng) có phải interface hoặc class hay không)
let userClass :any = new UserClass(1,"Khánh",15);
let userClass1 :any = new UserClass(2,"Tam anh",16);
let userFake : UserType = {
    id: 1,
    name:"HÙng",
    age:19
}
let userCopy = userClass; // gán địa chỉ tham chiếu 

userClass.name = "tâm anh"
console.log(userClass);
console.log(userCopy);

function printName(user:UserClass) :void {
    user.name = "hung"
    console.log(user.name);
}

printName(userClass)
console.log(userClass);

// toán tử in : kiểm tra xem 1 thuộc tính có tồn tại trong 1 object hay ko

console.log("id" in userClass);
console.log("sex" in userClass);

if("name" in userClass){
    console.log(userClass.name);
}

// Type casting
// toán tử as : như là 
let myFunction = (a : number|string,b :number|string) : string|number =>{
    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    }else{
        return String(a) + String(b);
    }
} 

// let result = myFunction(1,2) as string;
// console.log(typeof result);

// sử dụng <> : phổ biến hơn
let result = <string> myFunction(1,2);


// toán tử Optional chaining "?."
// let username = userFake?.name1; // nếu tồn tại thuộc tính name thì trả về giá trị thuộc tính đó 
// nếu ko thì trả về undefined
// console.log("username",username);

let userTest : UserType = {
    id :1,
    name: userClass,
    age:19
}

let username = userTest?.name?.name; // nếu tồn tại thuộc tính name thì trả về giá trị thuộc tính đó
console.log(username);


// toán tử Nullish coalescing "??"
let fullName = undefined ?? "Tên mặc định"; // literal type
console.log( "fullName",fullName);

type HTTPMethod = "GET" | "POST"| "PUT" | "DELETE";  // alias , intersection , literal 
// enum   Method{
//     GET,PUT,POST,DELETE
// }

let method:HTTPMethod = "PUT";

// bt 2
// Viết một hàm nhận vào một Tuple chứa thông tin về một mặt hàng
// (tên, giá, số lượng). Tính tổng tiền dựa trên giá và số lượng.
type Product = [string,number,number] ;
const getTotal= (param: Product):number =>{
    return param[1]*param[2];
}
// [ten, gia, soluong]
// tính tổng

let product : Product = ["áo dài",100,99];

console.log(getTotal(product));



function getNode(name :string) : (HTMLElement| null){
    return document.getElementById(name);
}