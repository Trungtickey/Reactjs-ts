// Kiểu dữ liệu Generics trong Typescript
// Mảng trong TypeScript
let arr1 : number[] = [1,2,3,4,5];

let arr2 : Array<number> = [1,2,3,4,5]; // generic array

let arr3 : Array<number> = new Array(1,2,3,4,5)// generic array

// function in ra tham số truyền vào chưa xác định kiểu dữ liệu
const printf = (word : any): void =>{ // c1: Cách này ko chặt chẽ
    console.log(word);
}
const printGeneric = <T>(word : T): void =>{ // Taọ ra một tham số cho kiểu dữ liệu của biến word
    console.log(word);
}

printGeneric("Công Vương");
printGeneric(100);
printGeneric(null);

// Khởi tạo 1 turple từ 2 tham số truyền vào
const getTurple = <U,V>(a: U, b: V) : [U,V]=>{
      return[a,b];
}
console.log(getTurple(1, "Liên"));
console.log(getTurple(undefined,"Nữ"));
console.log(getTurple(true, false));
console.log(getTurple("Liên, Thành ơi", "Đậu Đại Học Nhaaaa"));

// Các quy tắc cơ bản về đặt tên : 
// T : type
// E : Element
// K: Key
// V: Value
// N: Number

// Bài tập: tạo 1 hàm truyền vào 2 đối số : nếu 2 đối số đều là number thì trả về tổng của 2 đối số
Number()+Number()
// nếu cả 2 là chuỗi thì nỗi chuỗi
String()+String()
// còn nếu không thì in ra thông báo lỗi " Không thể xác định kiểu"

const baiTap =<U,V> (a: U, b: V): any=>{
     if(typeof a == 'number' && typeof b == 'number'){
        return Number(a) + Number(b)
     } else if(typeof a =='string' && typeof b == 'string'){
        // Nếu cả 2 là chuỗi thì nối chuỗi
        return String(a) + String(b);
     } else {
        // Nếu ko thì in ra báo lỗi "ko thể xác định"
        console.error("Không thể xác định")
     }
}

console.log(baiTap(1,2));
console.log(baiTap("trung", "Ticeky"));
baiTap(null, undefined );

// Cú pháp phương thức, hàm generic
// function [Tên Hàm] <tên kí hiệu của các tham số>( Các danh sách tham số ) : [kiểu trả về]{...}

interface Person {
    weight: number,
    height: number,
}
class Student implements Person {
    weight: number;
    height: number;
    name: string;
    constructor(weight: number, height: number, name: string){
        this.weight=weight;
        this.height=height;
        this.name=name;
    }
}

// Tạo hàm hiển thị thông tin của person
const printInfoPerson = <T extends Person>(human : T)=>{
    // Bất cứ kiểu dữ liệu nào kế Person đều thỏa mãn T (extends)
    console.log(human.height, human.weight)
}
let st : Person = new Student(60,1.6, "Trung");
// Ép kiểu ngầm định: quan hệ kế thừa - ép kiểu từ con lên cha
// Ép kiểu tường minh : Từ cha về con - <type children>
let str : Student = <Student> st;
printInfoPerson(st);

// Tham số T phải thỏa mãn là kiểu dữ liệu cha của lớp Student

// Lớp/interface Generic
interface ArrayFake <T>{
    data : T[];
    push(item : T): void; // thêm vào cuối mảng
    pop(): T; // Xóa cuôí và trả về thằng vừa xóa
    }


class ArrayFakeImpl<T> implements ArrayFake<T>{
    data : T[] = [];
    push(item : T): void{
        this.data.push(item);
    }
    pop() : T{
        return this.data.pop() as T;
    }
    toString=()=>{
        return this.data
    }
} 

// Khởi tạo đối tượng
let arrFake : ArrayFake<number> = new ArrayFakeImpl<number>();

arrFake.push(1);
arrFake.push(2);
arrFake.push(3);
console.log(arrFake.toString());

console.log([1,2,3,4,5,6]);

// Generic với phương thức đặc biệt : static
class Numbers{
    static so: number;
    constructor(_so : number){
        Numbers.so = _so;
    }
    static calX2(){ // có vùng nhớ
       return Numbers.so* 2;
    }
    static sum<T>(a:T,b:T){
        return Number(a) + Number(b);
    }
}

// ko cần khởi tạo đối tượng vẫn có thể truy xuất các thành phần tĩnh
// nếu như khởi tạo đối tượng
let n1 = new Numbers(2);
let n2 = new Numbers(3);

console.log(Numbers.so);


// Chương trình quản lí bán hàng
interface ICrud<T,E>{
    create(item : T) : void;
    read() : T[];
    findById(id : string) : T;
    update(item : T) : boolean;
    delete(id : E) : boolean;
}

// quản lí sản phẩm
class Product{
    id: string;
    name: string;
    price: number;
    constructor(id:string, name: string, price: number){
        this.id=id;
        this.name=name;
        this.price=price;
    }
}
interface IProduct extends ICrud<Product,string>{
    // Các phương thức bổ sung
    getTotalProductQuantity() : number;
    get5ProductBestSeller() : Product[];
}



