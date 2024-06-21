function cachingDecorator(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
): PropertyDescriptor{
    const originalMethod = descriptor.value;
    const cache: Record<string, any> ={};

    descriptor.value = function (...args: any[]){
        const cacheKey = JSON.stringify(args);

        if (cache[cacheKey]){
            console.log(`Using cached result for ${propertyKey}(${args.join(", ")})`);
            return cache[cacheKey];
        }

        const result = originalMethod.apply(this, args);
        cache[cacheKey] = result;
        console.log(
          `Calculated result for ${propertyKey}(${args.join(", ")}): ${result}`
        );
        return result;
    };
    return descriptor; 
}

class Example1 {
    @cachingDecorator
    add(a: number, b: number): number {
      console.log("Calculating sum...");
      return a + b;
    }
  }
  
  const exampleInstance1 = new Example1();
  console.log(exampleInstance1.add(2, 3)); // Output: "Calculating sum..." and then 5
  console.log(exampleInstance1.add(2, 3)); // Output: 5 (no "Calculating sum..." because the result is cached)