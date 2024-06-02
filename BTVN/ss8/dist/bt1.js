"use strict";
function parseInput(input) {
    if (typeof input === "number") {
        return input;
    }
    else if (input === "boolean") {
        return true;
    }
    else if (input === "string") {
        return "Hello, world!";
    }
    else if (input === "null") {
        return null;
    }
    else if (input === "undefined") {
        return undefined;
    }
    else {
        return "Invalid input";
    }
}
// Example usage:
console.log(parseInput(2));
console.log(parseInput("boolean")); // Output: true
console.log(parseInput("string")); // Output: Hello, world!
console.log(parseInput("null")); // Output: null
console.log(parseInput("undefined")); // Output: undefined
