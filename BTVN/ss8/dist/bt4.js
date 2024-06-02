"use strict";
function bp(inp) {
    if (typeof inp === "number") {
        return inp * inp;
    }
    else if (Array.isArray(inp)) {
        return inp.map((num) => num * num);
    }
}
console.log(bp(2));
console.log(bp([1, 2, 3, 4, 5]));
