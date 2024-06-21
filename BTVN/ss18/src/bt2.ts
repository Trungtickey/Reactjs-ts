// Viết một hàm timing decorator có thể gọi là “timingDecorator” để tính toán và log ra được thời gian thực thi hàm decorator. Hàm decorator phải log ra được tên hàm, tham số, và thời gian thực thi tính bằng miliseconds và kết quả trả về. Sử dụng console.log() để logging

function timingDecorator(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;
  
    descriptor.value = async function (...args: any[]) {
      const start = Date.now();
      const result = await originalMethod.apply(this, args);
      const end = Date.now();
      const executionTime = end - start;
  
      console.log(`Function ${propertyKey} executed in ${executionTime}ms`);
      console.log(`Arguments: ${JSON.stringify(args)}`);
      console.log(`Result: ${JSON.stringify(result)}`);
  
      return result;
    };
  
    return descriptor;
  }
  
  class Example {
    @timingDecorator
    async someAsyncFunction(arg1: number, arg2: string): Promise<string> {
      // Simulate some asynchronous work
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return `Result: ${arg1} ${arg2}`;
    }
  }
  
  const exampleInstance = new Example();
  exampleInstance.someAsyncFunction(42, "hello");