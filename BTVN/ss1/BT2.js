let classes = [
    {
        id: 1,
        number: 10,
    },
    {
        id: 2,
        number: 20,
    },
    {
        id: 3,
        number: 30,
    },
    {
        id: 4,
        number: 40,
    },
    {
        id: 5,
        number: 50,
    },
    {
        id: 6,
        number: 60,
    },
    {
        id: 7,
        number: 70,
    },
    {
        id: 8,
        number: 15,
    },
    {
        id: 9,
        number: 25,
    },
    {
        id: 10,
        number: 35,
    },
];
//Sử dụng map để tạo ra mảng mới với điều kiện số học phần học thỏa mãn với điều chỉnh
let updatedClasses = classes.map(classes => {
    if (classes.number < 30){
        // Tăng lên 10
        return {id:classes.id, number:classes.number + 10};
    } else if (classes.number > 40) {
        // Giảm đi 10
        return {id:classes.id, number:classes.number - 10};
    } else {
        return classes;
    }
});

console.log(updatedClasses);