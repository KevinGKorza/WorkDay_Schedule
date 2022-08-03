//Remember to display today's date and day
//Remember camel letters

var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);


$(document).ready(function () {
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
})

function timeTracker() {
var currentTime = moment().hour();
$(".time-block").each(function () {
    var blockscheduleTime = parseInt($(this).attr("id").split("hour")[1]);

    if (blockscheduleTime < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (blockscheduleTime === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }

})

}

//local storage
$("#hour8am .description").val(localStorage.getItem("hour8am"));
$("#hour9am .description").val(localStorage.getItem("hour9am"));
$("#hour10am .description").val(localStorage.getItem("hour10am"));
$("#hour11am .description").val(localStorage.getItem("hour11am"));
$("#hour12pm .description").val(localStorage.getItem("hour12pm"));
$("#hour13pm .description").val(localStorage.getItem("hour13pm"));
$("#hour14pm .description").val(localStorage.getItem("hour14pm"));
$("#hour15pm .description").val(localStorage.getItem("hour15pm"));
$("#hour16pm .description").val(localStorage.getItem("hour16pm"));
$("#hour17pm .description").val(localStorage.getItem("hour17pm"));



timeTracker();






})
