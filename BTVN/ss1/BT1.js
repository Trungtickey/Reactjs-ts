let students = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        age: 18,
    },
    {
        id: 2,
        name: "Nguyễn Thị B",
        age: 19,
    },
    {
        id: 3,
        name: "Hồ Công Vương",
        age: 11,
    },
    {
        id: 4,
        name: "Hồ Công Thành",
        age: 18,
    },
    {
        id: 5,
        name: "Hồ Thị Mai Liên",
        age: 18,
    },
]

// C1.1
// students.forEach((students) =>{
//     console.log(students.name)
// })
// C1.2
//students.forEach((students) => console.log(students.id))
//C2
// console.log(students.map(students=>students.age));

students.map((students)=>{
    console.log(students.name)
})