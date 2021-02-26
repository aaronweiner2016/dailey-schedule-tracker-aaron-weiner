$("#currentDay").html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));        //current date called to show immediately on page

function update() {
        $("#currentDay").html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));        // date called again to create a function
}

setInterval(update, 1000);       // calling my date function to update every second

var time = moment().format("kk");          // my invisible time to compare for my background color changes 



// getting my textareas from html

var contentNine = $("#hour-9");
var contentTen = $("#hour-10");
var contentEleven = $("#hour-11");
var contentTwelve = $("#hour-12");
var contentOne = $("#hour-1");
var contentTwo = $("#hour-2");
var contentThree = $("#hour-3");
var contentFour = $("#hour-4");
var contentFive = $("#hour-5");

// getting my save buttons from html

var saveBtn = document.querySelector(".save");

// creating variables for the times

var timeNine = moment("9", "kk").format("kk");
var timeTen = moment("10", "kk").format("kk");
var timeEleven = moment("11", "kk").format("kk");
var timeTwelve = moment("12", "kk").format("kk");
var timeOne = moment("13", "kk").format("kk");
var timeTwo = moment("14", "kk").format("kk");
var timeThree = moment("15", "kk").format("kk");
var timeFour = moment("16", "kk").format("kk");
var timeFive = moment("17", "kk").format("kk");

// creating arrays for my for loop to sort through

var arrayTimes = [timeNine, timeTen, timeEleven, timeTwelve, timeOne, timeTwo, timeThree, timeFour, timeFive];
var contentArray = [contentNine, contentTen, contentEleven, contentTwelve, contentOne, contentTwo, contentThree, contentFour, contentFive]


// my for loop to go through my contentArray and arrayTimes which correlate eachother and add the classes as needed

for (var i = 0; i < arrayTimes.length; i++) {
        if (arrayTimes[i] === time) {
                contentArray[i].addClass("present");
        } else if (arrayTimes[i] < time) {
                contentArray[i].addClass("past");
        } else {
                contentArray[i].addClass("future");
        }
}

// creating a button click which will save the box of text to the local storage

$(".save").on("click", function (event) {
        event.preventDefault();
        var timeName = $(this).siblings(".event").attr("id");
        var message = $(this).siblings(".event").val();
        localStorage.setItem(timeName, message);
        console.log(timeName);
        console.log(message);
})

// getting my items out of local storage to have on page

$("#hour-9").val(localStorage.getItem("hour-9"));
$("#hour-10").val(localStorage.getItem("hour-10"));
$("#hour-11").val(localStorage.getItem("hour-11"));
$("#hour-12").val(localStorage.getItem("hour-12"));
$("#hour-1").val(localStorage.getItem("hour-1"));
$("#hour-2").val(localStorage.getItem("hour-2"));
$("#hour-3").val(localStorage.getItem("hour-3"));
$("#hour-4").val(localStorage.getItem("hour-4"));
$("#hour-5").val(localStorage.getItem("hour-5"));