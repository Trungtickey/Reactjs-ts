// Viết một hàm chung TypeScript chấp nhận hai đối số: một mảng thuộc loại bất kỳ và hai chỉ mục. Hàm sẽ hoán đổi các phần tử tại các chỉ mục đã chỉ định và trả về mảng đã sửa đổi


function number<T>(array: T[], index1: number, index2: number): T[] {
    // Kiểm tra các chỉ mục hợp lệ
    if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
        throw new Error('Số không hợp lệ');
    }
    // Hoán đổi các phần tử
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
}
// Kiểm tra với mảng:
let numArray = [1, 2, 3, 4, 5];
console.log(number(numArray, 1, 3));