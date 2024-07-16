// console.log("hello");



// hàm in ra tên
// const printName = (name: string, callback: Function) => {
//     // in ra sau 1 khoảng thời gian ngẫu nhiên 1- 5 s
//     let randomTime = Math.random() * 5 + 1;
//     setTimeout(() => {
//         console.log(name);
//         callback()

//     }, randomTime * 1000)
// }

// gọi hàm
// printName("Tâm anh", () => { // 1
//     printName("Minh tuyết", () => { //2
//         printName("Hà Nguyên", () => { //3
//             printName("Thiện Thúy", () => { //4
//                 printName("Duy Quang", () => {  //5
//                     console.log("Finished!");
//                 })
//             })
//         })
//     })
// })
// 5
// đây là ví dụ là bất đồng bộ

// 3 cách xử lí bất đồng bộ :
// callback : 1 hàm làm tham số của hàm khác
// asyn / await
// promise

// tạo promise 
let promise = new Promise((resolve: Function, reject: Function) => {
    // 
    resolve("Huỳnh Tanh Âm") // là 1 hàm bất đồng bộ     
    // thành công 
    // 
    console.log("tạo promise");

    // reject("tâm anh") // cũng là bất đồng bộ 

});



// sử dụng promise 

// promise.then((name)=>{
//     console.log("name: " + name);
//     console.log("Thành công");
//     return 1;
// }).then((num)=>{
//     console.log(num);
//     return 2
// }).then((name)=>{
//     console.log(name);
// })
// .catch(err=>{
//     console.log(err);

// })

// console.log("kết thúc");


// in ra các tên sau 1 thời gian ngẫu nhiên 
function printName(name: string) {
    return new Promise((resolve: Function, reject) => {
        let time = Math.floor(Math.random() * 5) * 1000
        console.log(time);
        setTimeout(
            () => {
                console.log(name);
                resolve();
            }, time)
    })
}

// printName("Tâm anh").then(() => printName("kha")) // nếu như then này thanh công
//     .then(() => printName("Trân ngu")) // thì mới thực thi then kế tiếp
//     .then(() => printName("hão sưa"))
//     .catch((err) => console.log(err))


// asyn/ await  : cấu trúc giúp Promise đơn giản hơn 

const getAll= async()=>{
    await printName("Tâm Anh")
    await printName("Kha Trần")
    await printName("Trân Không")
    await printName("Hào Sưa")
    await printName("Trung Tickey")
    console.log("Finished")
}
getAll();












