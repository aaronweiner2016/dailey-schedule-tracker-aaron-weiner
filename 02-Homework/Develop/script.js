var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var time = moment().format("kk");

$("#currentDay").text(date);


var contentNine = document.getElementById("content-nine");
var contentTen = document.getElementById("content-ten");
var contentEleven = document.getElementById("content-eleven");
var contentTwelve = document.getElementById("content-twelve");
var contentOne = document.getElementById("content-one");
var contentTwo = document.getElementById("content-two");
var contentThree = document.getElementById("content-three");
var contentFour = document.getElementById("content-four");
var contentFive = document.getElementById("content-five");

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
    // update textcontent with localstorage value for that  time

}


var infoArray = [];

var eventItem = document.querySelector("#event");
var eventItemTwo = document.querySelector("#event-two");
var eventItemThree = document.querySelector("#event-three");
var eventItemFour = document.querySelector("#event-four");
var eventItemFive = document.querySelector("#event-five");
var eventItemSix = document.querySelector("#event-six");
var eventItemSeven = document.querySelector("#event-seven");
var eventItemEight = document.querySelector("#event-eight");
var eventItemNine = document.querySelector("#event-nine");

// var events = [eventItem, eventItemTwo, eventItemThree, eventItemFour, eventItemFive, eventItemSix, eventItemSeven, eventItemEight, eventItemNine];

var saveBtn = document.querySelector("#save-one");
var saveBtnTwo = document.querySelector("#save-two");
var saveBtnThree = document.querySelector("#save-three");
var saveBtnFour = document.querySelector("#save-four");
var saveBtnFive = document.querySelector("#save-five");
var saveBtnSix = document.querySelector("#save-six");
var saveBtnSeven = document.querySelector("#save-seven");
var saveBtnEight = document.querySelector("#save-eight");
var saveBtnNine = document.querySelector("#save-nine");

var p = document.querySelector("#p");
// var save = [saveBtn, saveBtnTwo, saveBtnThree, saveBtnFour, saveBtnFive, saveBtnSix, saveBtnSeven, saveBtnEight, saveBtnNine];
    


// var keys = localStorage.setItem([("messages",key),("messages-two", keyTwo),( keyThree), keyfour, keyfive, keySix, keySeven, keyEight, keyNine]);



// for(i = 0; i < events.length; i++){

// }

// for(i = 0; i < save.length; i++){

// }

// for(i = 0; i < keys.length; i++){

// }


// function init() {
//     renderMessage()
// }



// saveBtn.addEventListener("click", function(event){
//     event.preventDefault();
//     var key = eventItem.value;
//     localStorage.setItem("messages", key);
//     renderMessage();
    
    
// });
// function renderMessage() {
//     var messagesBack = localStorage.getItem("messages");
    
//     eventItem.value = messagesBack;
// }


$(".save").on("click", function() {
    console.logv("hit")
    console.log($(this));
    console.log($(this).siblings());

    // var timeName = $(this).siblings(".event").attr("id");
    // var message = $(this).siblings(".event").val();

    // localStorage.setItem(timeName, message);
})


// saveBtnTwo.addEventListener("click", function(event){
//     event.preventDefault();
//     var keyTwo = eventItemTwo.value;
//     localStorage.setItem("messages-two", keyTwo);
   
// });

// saveBtnThree.addEventListener("click", function(event){
//     event.preventDefault();
//     var keyThree = eventItemThree.value;
//     localStorage.setItem("messages-three", keyThree);
    
// });

// saveBtnFour.addEventListener("click", function(event){
//     event.preventDefault();
//     var keyfour = eventItemFour.value;
//     localStorage.setItem("messages-four", keyfour);
   
// });

// saveBtnFive.addEventListener("click", function(event){
//     event.preventDefault();
//     var keyfive = eventItemFive.value;
//     localStorage.setItem("messages-five", keyfive);
   
// });

// saveBtnSix.addEventListener("click", function(event){
//     event.preventDefault();
//     var keySix = eventItemSix.value;
//     localStorage.setItem("messages-six", keySix);
   
// });

// saveBtnSeven.addEventListener("click", function(event){
//     event.preventDefault();
//     var keySeven = eventItemSeven.value;
//     localStorage.setItem("messages-seven", keySeven);
    
// });

// saveBtnEight.addEventListener("click", function(event){
//     event.preventDefault();
//     var keyEight = eventItemEight.value;
//     localStorage.setItem("messages-eight", keyEight);
   
// });

// saveBtnNine.addEventListener("click", function(event){
//     event.preventDefault();
//     var keyNine = eventItemNine.value;
//     localStorage.setItem("messages-nine", keyNine);
    
// });




// init();