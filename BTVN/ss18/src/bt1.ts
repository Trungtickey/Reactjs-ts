// Viết hàm decorator functions để log ra thông tin về hàm mà nó decorates. Hàm decorates này sẽ log ra được tên hàm, tham số đầu vào của hàm, và kết quả trả về. Sử dụng console.log() để logging
function Log(
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const temp = descriptor.value;
    descriptor.value = (...ars: any) => {
      console.log(`Function name: ${propertyName}`);
  
      console.log(`Arguments: ${JSON.stringify(ars)}`);
  
      return temp(...ars);
    };
  }
  class loggerr {
    @Log
    sum(a: number, b: number) {
      return a + b;
    }
    @Log
    outName(c: string): string {
      return c;
    }
  }
  
  let tes = new loggerr();
  
  console.log(tes.sum(2, 3));
  console.log(tes.outName("a"));