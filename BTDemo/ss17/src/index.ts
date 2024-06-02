// Tổng quan về: decorator là 1 bộ trang trí cho phép can thiệp vào đối tượng trong quá trình chạy(runtime)
// Bản chất decorator là một kiểu dữ liệu function
// function logger(){
//     return function(target : any){
//         console.log(target);
//     }
// }
// Class decorator : Function = (constructor : any) => { }
// Lưu ý: Nếu class decorator trả về môt class mới thì đối tượng sẽ bị ghi đè bởi class đó
// function wrapper (name: string){
//     return class extends target{ // annonymous class: lớp nặc danh
//         address: string = "Nghệ An";
//         id: number =0;
//         name: string="";
//         age: number=0; // Ghi đè các thuộc tính đã có
//         // constructor(id: number, name: string, age: number){
//         //     super(id,name,age);
//         // }
//         // greet(){
//         //     return `hello bạn ní ${this.name}`;
//         // }
//     }
// }
function logger<T extends { new (...args: any[]) : {}}>(target : T){
    // console.log(target);
    return class extends target{ // annonymous class: lớp nặc danh
        address: string = "Nghệ An";
        id: number =0;
        name: string="";
        age: number=0; // Ghi đè các thuộc tính đã có
        // constructor(id: number, name: string, age: number){
        //     super(id,name,age);
        // }
        // greet(){
        //     return `hello bạn ní ${this.name}`;
        // }
    }
}

// Method decorator
function follow(target : any, propertykey: string, descriptor : PropertyDescriptor){
       console.log(target); // tham chiếu của hàm
       console.log(propertykey); // tên hàm
       console.log(descriptor.value); // Bộ chỉnh sửa hàm
       descriptor.value = function(){
         console.log(`ghi đè hàm greet`);
         console.log(`Hello ní có id = ${this.id}`);
       } 
}

function beforeSum(target : any, propertykey: string, descriptor : PropertyDescriptor){
    let value = descriptor.value; // Lấy ra giá trị cũ
    // Thay thế hàm sum bằng 1 hàm khác
    descriptor.value = function(...args:any[]){
        // log trước khi tính
        console.log(...args);
        return value(...args);
    }
}

// Property decorator: đánh dấu trên thuộc tính
// Accessor decorator (người giám sát, kiểm soát)

function x2(target : any, propertykey: string,){
    console.log(target);
    console.log(propertykey)
}

// Tạo 1 hàm pow return về decorator method
function pow(value : number){ //clossure
    // Khai báo các biến như các thuộc tính
    return function(target : any, propertykey: string, descriptor : PropertyDescriptor){
    //    console.log(target);
    //    console.log(propertykey);
    //    console.log(descriptor);
    let old = descriptor.value;
    descriptor.value=function(...args: any[]){
        return Math.pow(old(...args), value);
      }
    }
}

// Decorator Factories: kĩ thuật truyền tham số cho 1 decorator thông qua khia niệm closure 



@logger
class Student{
    id: number;
    name: string;
    @x2
    age: number;
    constructor(id: number, name: string, age: number){
        this.id=id;
        this.name=name;
        this.age=age
    }
    @follow
    greet(){
      return `hello bạn ní ${this.name}`;
    }
    // Tính tổng
    @beforeSum
    sum(a:number, b:number){
        return a + b;
    }
    @pow(2)
    luyThua(a: number){
        return a;
    }

    // Sử dụng từ khóa get / set
    public get id1(){
       console.log("gọi get");
       return this.id;
    }
    public set id1(id:number){
        console.log("gọi set");
        this.id = id;
    }
}

let student = new Student(1,"Trung",20);
console.log(student);
student.greet();
console.log(student.sum(1,2));
student.id1 = 10;
console.log(student.age);

console.log(student.luyThua(5)); // 25



