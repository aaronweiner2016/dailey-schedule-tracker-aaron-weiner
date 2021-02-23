var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var time = moment().format("kk");

$("#currentDay").text(date);

time = "09";
var contentNine = document.getElementById("hour-9");
var contentTen = document.getElementById("hour-10");
var contentEleven = document.getElementById("hour-11");
var contentTwelve = document.getElementById("hour-12");
var contentOne = document.getElementById("hour-1");
var contentTwo = document.getElementById("hour-2");
var contentThree = document.getElementById("hour-3");
var contentFour = document.getElementById("hour-4");
var contentFive = document.getElementById("hour-5");

var saveBtn = document.querySelector(".save");
 
var timeNine = moment("9","kk").format("kk");
var timeTen = moment("10","kk").format("kk");
var timeEleven = moment("11","kk").format("kk");
var timeTwelve = moment("12","kk").format("kk");
var timeOne = moment("13","kk").format("kk");
var timeTwo = moment("14","kk").format("kk");
var timeThree = moment("15","kk").format("kk");
var timeFour = moment("16","kk").format("kk");
var timeFive = moment("17","kk").format("kk");



var arrayTimes = [timeNine, timeTen, timeEleven, timeTwelve, timeOne, timeTwo, timeThree, timeFour, timeFive];
var contentArray = [contentNine, contentTen, contentEleven, contentTwelve, contentOne, contentTwo, contentThree, contentFour, contentFive]


for(i = 0; i < arrayTimes.length; i++){
    if(arrayTimes[i] === time){
        contentArray[i].classList.add("present");
    }else if(arrayTimes[i] < time){
        contentArray[i].classList.add("past");
    }else{
        contentArray[i].classList.add("future");
    }

}


// var infoArray = [];

// var eventItem = document.querySelector("#event");
// var eventItemTwo = document.querySelector("#event-two");
// var eventItemThree = document.querySelector("#event-three");
// var eventItemFour = document.querySelector("#event-four");
// var eventItemFive = document.querySelector("#event-five");
// var eventItemSix = document.querySelector("#event-six");
// var eventItemSeven = document.querySelector("#event-seven");
// var eventItemEight = document.querySelector("#event-eight");
// var eventItemNine = document.querySelector("#event-nine");


// var saveBtn = document.querySelector("#save-one");
// var saveBtnTwo = document.querySelector("#save-two");
// var saveBtnThree = document.querySelector("#save-three");
// var saveBtnFour = document.querySelector("#save-four");
// var saveBtnFive = document.querySelector("#save-five");
// var saveBtnSix = document.querySelector("#save-six");
// var saveBtnSeven = document.querySelector("#save-seven");
// var saveBtnEight = document.querySelector("#save-eight");
// var saveBtnNine = document.querySelector("#save-nine");

// var p = document.querySelector("#p");



$(".save").on("click", function(event) {
   event.preventDefault();
    var timeName = $(this).siblings(".event").attr("id");
    var message = $(this).siblings(".event").val();
    localStorage.setItem(timeName, message);
})


$("#hour-9").val(localStorage.getItem("hour-9"));
$("#hour-10").val(localStorage.getItem("hour-10"));
$("#hour-11").val(localStorage.getItem("hour-11"));
$("#hour-12").val(localStorage.getItem("hour-12"));
$("#hour-1").val(localStorage.getItem("hour-1"));
$("#hour-2").val(localStorage.getItem("hour-2"));
$("#hour-3").val(localStorage.getItem("hour-3"));
$("#hour-4").val(localStorage.getItem("hour-4"));
$("#hour-5").val(localStorage.getItem("hour-5"));

