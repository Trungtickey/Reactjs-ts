function task1(callback: () => void): void {
    setTimeout(() => {
        console.log('Task 1 hoàn thành sau 1 giây');
        callback();
    }, 1000);
}

function task2(callback: () => void): void {
    setTimeout(() => {
        console.log('Task 2 hoàn thành sau 1.5 giây');
        callback();
    }, 1500);
}


function task3(callback: () => void): void {
    setTimeout(() => {
        console.log('Task 3 hoàn thành sau 2 giây');
        callback();
    }, 2000);
} 

// Thực thi các hàm tuần tự
task1(() => {
    task2(() => {
        task3(() => {
            console.log('Tất cả các task đã hoàn thành');
        });
    });
});
