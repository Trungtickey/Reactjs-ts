function hasUppercase(str) {
    return str.split('').some(char => char === char.toUpperCase() && isNaN(char));
  }
  
  // Ví dụ sử dụng
  console.log(hasUppercase("Hello")); // true
  console.log(hasUppercase("hello")); // false
  