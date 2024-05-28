// Khai báo enum WeekDays
enum WeekDays {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

// Hàm generic để in tất cả các giá trị của enum
function printEnumValues<T>(enumObject: T): void {
    for (const day in enumObject) {
        if (isNaN(Number(day))) {
            console.log(day);
        }
    }
}
printEnumValues(WeekDays); // Gọi hàm để in tất cả các giá trị của WeekDays
