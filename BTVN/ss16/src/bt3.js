"use strict";
// Khai báo enum WeekDays
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Sunday"] = 0] = "Sunday";
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
})(WeekDays || (WeekDays = {}));
// Hàm generic để in tất cả các giá trị của enum
function printEnumValues(enumObject) {
    for (const day in enumObject) {
        if (isNaN(Number(day))) {
            console.log(day);
        }
    }
}
printEnumValues(WeekDays); // Gọi hàm để in tất cả các giá trị của WeekDays
