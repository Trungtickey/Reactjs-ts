// Làm phẳng mảng

const lamPhangMang = <T>(arr : Array<T>): Array<T> =>{
    //Logic: 
    // Duyệt qua lần lượt từng phần tử 
    // Kiểm tra xem có phải 1 mảng hay không rồi tiếp tục duyệt
    let newArr : Array<T> = [];
    arr.forEach(e=>{
        if(Array.isArray(e)){
            // Phần tử là một mảng
            // Thì gọi hàm lamPhangMang lại để làm phẳng mảng đó
            newArr = [...newArr,...lamPhangMang(e)]; // đệ quy
        } else {
            newArr = [...newArr, e]
        }
    })
    return newArr;
}

let arr = [1,[2,[3,4],5],6]

console.log(lamPhangMang(arr));
