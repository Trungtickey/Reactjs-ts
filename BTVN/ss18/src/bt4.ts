type PredicateFn = ()=> boolean;
// 
function validate (validateFn : PredicateFn){
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor){
        //logic
        // Lấy ra hàm cần xử lý trước khi chỉnh sửa
        let div = descriptor.value;
        console.log(div);
        // Tiến hành chỉnh sửa
        descriptor.value = (a:number, b:number)=>{
            // Kiểm tra số b
            if(validateFn(b)){
                // Hợp lệ
                return div(a,b);
            } else{
                // Ko hợp lệ
                throw new Error("Không thể chia cho 0")
            }
        }
    }
}

// Hàm kiểm tra số có =0 hay ko
function checkNumber(a:number){
    return a != 0;
}
// Lớp kiểm tra
class Test{
    @validate(checkNumber)
    div(a:number, b:number){
        return a/b;
    }
}

let test = new Test();
console.log(test.div(3,2));
console.log(test.div(3,0));