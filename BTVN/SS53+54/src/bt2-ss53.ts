// Viết một hàm delayedCallback() nhận tham số truyền vào là một callback function và một số nguyên thể hiện thời gian delay (miligiây).

// Hàm delayedCallback() sẽ gọi callback function sau một khoảng thời gian nhất định.

function delayedCallback(callback: () => void, delay: number): void{
    setTimeout(callback, delay);
}

const sayFuckYouBro = () => {
    console.log("Đmm Fuck you!!!");
};

delayedCallback(sayFuckYouBro,5000); // Gọi hàm sau tgian quy định 