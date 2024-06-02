"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
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
function logger(target) {
    // console.log(target);
    return class extends target {
        constructor() {
            super(...arguments);
            this.address = "Nghệ An";
            this.id = 0;
            this.name = "";
            this.age = 0; // Ghi đè các thuộc tính đã có
            // constructor(id: number, name: string, age: number){
            //     super(id,name,age);
            // }
            // greet(){
            //     return `hello bạn ní ${this.name}`;
            // }
        }
    };
}
// Method decorator
function follow(target, propertykey, descriptor) {
    console.log(target); // tham chiếu của hàm
    console.log(propertykey); // tên hàm
    console.log(descriptor.value); // Bộ chỉnh sửa hàm
    descriptor.value = function () {
        console.log(`ghi đè hàm greet`);
        console.log(`Hello ní có id = ${this.id}`);
    };
}
function beforeSum(target, propertykey, descriptor) {
    let value = descriptor.value; // Lấy ra giá trị cũ
    // Thay thế hàm sum bằng 1 hàm khác
    descriptor.value = function (...args) {
        // log trước khi tính
        console.log(...args);
        return value(...args);
    };
}
// Property decorator: đánh dấu trên thuộc tính
// Accessor decorator (người giám sát, kiểm soát)
function x2(target, propertykey) {
    console.log(target);
    console.log(propertykey);
}
// Tạo 1 hàm pow return về decorator method
function pow(value) {
    // Khai báo các biến như các thuộc tính
    return function (target, propertykey, descriptor) {
        //    console.log(target);
        //    console.log(propertykey);
        //    console.log(descriptor);
        let old = descriptor.value;
        descriptor.value = function (...args) {
            return Math.pow(old(...args), value);
        };
    };
}
// Decorator Factories: kĩ thuật truyền tham số cho 1 decorator thông qua khia niệm closure 
let Student = (() => {
    let _classDecorators = [logger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _age_decorators;
    let _age_initializers = [];
    let _age_extraInitializers = [];
    let _greet_decorators;
    let _sum_decorators;
    let _luyThua_decorators;
    var Student = _classThis = class {
        constructor(id, name, age) {
            this.id = __runInitializers(this, _instanceExtraInitializers);
            this.age = __runInitializers(this, _age_initializers, void 0);
            __runInitializers(this, _age_extraInitializers);
            this.id = id;
            this.name = name;
            this.age = age;
        }
        greet() {
            return `hello bạn ní ${this.name}`;
        }
        // Tính tổng
        sum(a, b) {
            return a + b;
        }
        luyThua(a) {
            return a;
        }
        // Sử dụng từ khóa get / set
        get id1() {
            console.log("gọi get");
            return this.id;
        }
        set id1(id) {
            console.log("gọi set");
            this.id = id;
        }
    };
    __setFunctionName(_classThis, "Student");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _age_decorators = [x2];
        _greet_decorators = [follow];
        _sum_decorators = [beforeSum];
        _luyThua_decorators = [pow(2)];
        __esDecorate(_classThis, null, _greet_decorators, { kind: "method", name: "greet", static: false, private: false, access: { has: obj => "greet" in obj, get: obj => obj.greet }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _sum_decorators, { kind: "method", name: "sum", static: false, private: false, access: { has: obj => "sum" in obj, get: obj => obj.sum }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _luyThua_decorators, { kind: "method", name: "luyThua", static: false, private: false, access: { has: obj => "luyThua" in obj, get: obj => obj.luyThua }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _age_decorators, { kind: "field", name: "age", static: false, private: false, access: { has: obj => "age" in obj, get: obj => obj.age, set: (obj, value) => { obj.age = value; } }, metadata: _metadata }, _age_initializers, _age_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Student = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Student = _classThis;
})();
let student = new Student(1, "Trung", 20);
console.log(student);
student.greet();
console.log(student.sum(1, 2));
student.id1 = 10;
console.log(student.age);
console.log(student.luyThua(5)); // 25
