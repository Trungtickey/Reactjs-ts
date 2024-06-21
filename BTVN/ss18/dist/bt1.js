"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Viết hàm decorator functions để log ra thông tin về hàm mà nó decorates. Hàm decorates này sẽ log ra được tên hàm, tham số đầu vào của hàm, và kết quả trả về. Sử dụng console.log() để logging
function Log(target, propertyName, descriptor) {
    const temp = descriptor.value;
    descriptor.value = (...ars) => {
        console.log(`Function name: ${propertyName}`);
        console.log(`Arguments: ${JSON.stringify(ars)}`);
        return temp(...ars);
    };
}
class loggerr {
    sum(a, b) {
        return a + b;
    }
    outName(c) {
        return c;
    }
}
__decorate([
    Log
], loggerr.prototype, "sum", null);
__decorate([
    Log
], loggerr.prototype, "outName", null);
let tes = new loggerr();
console.log(tes.sum(2, 3));
console.log(tes.outName("a"));
