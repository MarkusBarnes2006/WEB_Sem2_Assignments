









const currentDate = new Date();
 const month = currentDate.getMonth();

 switch(month){
    case 1:
        document.getElementById("month").innerHTML = "January"
    case 2:
        document.getElementById("month").innerHTML = "February"
    case 3:
        document.getElementById("month").innerHTML = "March"
    case 4:
        document.getElementById("month").innerHTML = "April"
    case 5:
        document.getElementById("month").innerHTML = "May"
    case 6:
        document.getElementById("month").innerHTML = "June"
    case 7:
        document.getElementById("month").innerHTML = "July"
    case 8:
        document.getElementById("month").innerHTML = "August"
    case 9:
        document.getElementById("month").innerHTML = "September"
    case 10:
        document.getElementById("month").innerHTML = "October"
    case 11:
        document.getElementById("month").innerHTML = "November"
    case 12:
        document.getElementById("month").innerHTML = "December"
    case 0:
        document.getElementById("month").innerHTML = "Unknown Month"
 }

const calenderMap = new Map([
    [1, "1-1"],
    [2, "1-2"],
    [3, "1-3"],
    [4, "1-4"],
    [5, "1-5"],
    [6, "1-6"],
    [7, "1-7"],
    [8, "2-1"],
    [9, "2-2"],
    [10, "2-4"],
    [11, "2-5"],
    [12, "2-6"],
    [13, "2-7"],
    [14, "3-1"],
    [15, "3-2"],
    [16, "3-3"],
    [17, "3-4"],
    [18, "3-5"],
    [19, "3-6"],
    [20, "3-7"],
    [21, "4-1"],
    [22, "4-2"],
    [23, "4-3"],
    [24, "4-4"],
    [25, "4-5"],
    [26, "4-6"],
    [27, "4-7"],
    [28, "5-2"],
    [29, "5-1"],
    [30, "5-2"],
    [31, "5-3"],
    [32, "5-4"],
    [33, "5-5"],
    [34, "5-6"],
    [35, "5-7"],
    
]);
const FirstDayDate = new Date(year, month, 1);
const firstDayNumber = FirstDayDate.getDay() + 1;
const lastDayofMonth = new Date(year, month + 1, 1);
lastDayofMonth.setDate(lastDayofMonth.getDate() - 1);
const lastDayofMonthNumber = lastDayofMonth.getDay();
console.log(lastDayofMonthNumber);

for(i = 1; i <= 35; i++){
    if(i < firstDayNumber){
        let id = calenderMap.get(i);
        document.getElementById(id).innerHTML = "";
    }

}

