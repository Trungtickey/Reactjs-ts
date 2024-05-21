function sortEmployee(employees, sortOrder){
    if (sortOrder === "Increase") {
        employees.sort((a, b) => a.age - b.age);
      } else if (sortOrder === "Decrease") {
        employees.sort((a, b) => b.age - a.age);
      } else {
        console.log("Invalid sortOrder. Please use 'Increase' or 'Decrease'.");
        return;
      }
    
      console.log("mảng xắp sếp:");
      employees.forEach((employee) => {
        console.log(`Name: ${employee.name}, Age: ${employee.age}`);
      });
    }
    
    // Ví dụ sử dụng hàm
    const employees = [
      { name: "Hồ Công Trung", age: 20 },
      { name: "Hồ Công Thành", age: 18 },
      { name: "Hồ Thị Mai Liên", age: 18 },
      { name: "Hồ Công Vương", age: 11 },
    ];
    
    sortEmployee(employees, "Increase");
    sortEmployee(employees, "Decrease");