function mergeObjects(...objects){
    return Object.assign({}, ...objects);
}

const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const obj3 = {d: 5};

const mergeObject = mergeObjects(obj1, obj2, obj3);

console.log(mergeObject);

// Gọi hàm với một bộ đối tượng khác
const objA = { name: 'Tickey', age: 20 };
const objB = { age: 21, city: 'HCM' };
const objC = { country: 'VN' };

const mergedObject2 = mergeObjects(objA, objB, objC);

console.log(mergedObject2); 