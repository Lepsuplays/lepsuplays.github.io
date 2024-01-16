

//       Timer Dates
//               day-month-year
var christmas       = "24/12/####"
var newYear         = "31/12/####"
var DevsBirthday    = "01/02/####" 


// variables
var date

var seconds
var minutes
var hour
var day
var month
var year

// Function that updates time
function TimeUpdate() {
    date = new Date();
    
    seconds = date.getSeconds();
    minutes = date.getMinutes();
    hour    = date.getHours();
    day     = date.getDate();
    month   = date.getMonth() + 1;
    year    = date.getFullYear();
    
    // Calls functions that updates times
    calculateTimeLeft(christmas, "christmasTimer");
    calculateTimeLeft(newYear, "newYearTimer");
    calculateTimeLeft(DevsBirthday, "DevsBirhdayTimer")
    // Recalls function after one second
    setTimeout(TimeUpdate, 1000);
}
// Calls function on first time
TimeUpdate()


function calculateTimeLeft(data, target) {
    var targetDay = data.split("/")[0]
    var targetMonth = data.split("/")[1]
    var targetYear = data.split("/")[2]
    
    if (targetYear === "####") {
        targetYear = year
    }
    
    // Variables that contain target and current time
    let targetDate = new Date(targetYear, targetMonth, targetDay, 0 , 0 ,0);
    let currentDate = new Date(year, month, day, hour, minutes, seconds);
    
    // This down part contains five calculations that calculates diffrent time data. logig is first it calculates days and then it calculates hours left - days left * 24 witch makes days left appear as hours left so it is possible to subtrack and so one.

    // Calculations
    // To calculate the time difference of two dates
    let Difference_In_Time = currentDate.getTime() - targetDate.getTime();
    // Checs if date has already passed and sets date to be one year later
    if (Difference_In_Time > 0) {
        targetYear = year + 1

        targetDate = new Date(targetYear, targetMonth, targetDay, 0 , 0 ,0);
        currentDate = new Date(year, month, day, hour, minutes, seconds);

        Difference_In_Time = currentDate.getTime() - targetDate.getTime();
    }
    
    // To calculate the number of days between two dates
    let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24 * (-1)));
    
    // Calculating how diffrence in hours
    let Difference_In_Hours = Math.floor(Difference_In_Time / (1000 * 3600 * (-1))) - Difference_In_Days * 24;
    
    // Calculating diffrence in minutes
    let Difference_In_Minutes = Math.floor(Difference_In_Time / (1000 * 60 * (-1))) - Difference_In_Days * 24 * 60 - Difference_In_Hours * 60;
    
    // Calculating diffrence in seconds
    let Difference_In_Seconds = Math.round(Difference_In_Time / (1000 * (-1))) - Difference_In_Days * 24 * 3600 - Difference_In_Hours * 3600 - Difference_In_Minutes * 60;
    
    // Sets data in specific element
    document.getElementById(target).innerText = Difference_In_Days + " days " +  Difference_In_Hours + " hours " + Difference_In_Minutes + " Minutes " + Difference_In_Seconds + " Seconds";
}