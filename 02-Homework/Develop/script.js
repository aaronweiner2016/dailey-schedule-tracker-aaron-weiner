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

 
var timeNine = moment("9","kk").format("kk");
// $("#time-nine").text(timeNine);
var timeTen = moment("10","kk").format("kk");
// $("#time-ten").text(timeTen);
var timeEleven = moment("11","kk").format("kk");
// $("#time-eleven").text(timeEleven);
var timeTwelve = moment("12","kk").format("kk");
// $("#time-twelve").text(timeTwelve);
var timeOne = moment("13","kk").format("kk");
// $("#time-one").text(timeOne);
var timeTwo = moment("14","kk").format("kk");
// $("#time-two").text(timeTwo);
var timeThree = moment("15","kk").format("kk");
// $("#time-three").text(timeThree);
var timeFour = moment("16","kk").format("kk");
// $("#time-four").text(timeFour);
var timeFive = moment("17","kk").format("kk");
// $("#time-five").text(timeFive);


var arrayTimes = [timeNine, timeTen, timeEleven, timeTwelve, timeOne, timeTwo, timeThree, timeFour, timeFive];
var contentArray = [contentNine, contentTen, contentEleven, contentTwelve, contentOne, contentTwo, contentThree, contentFour, contentFive]


for(i = 0; i < arrayTimes.length; i++){
    if(arrayTimes[i] === time){
        contentArray[i].setAttribute("style", "background-color: red;");
    }else if(arrayTimes[i] < time){
        contentArray[i].setAttribute("style", "background-color: grey;");
    }else{
        contentArray[i].setAttribute("style", "background-color: green;");
    }
}

if (timeTwo < time){
    console.log("bad");
}else{
    console.log("good");
}

console.log(time);
console.log(timeOne, timeTwo, timeNine, timeTen, timeEleven, timeTwelve, timeThree, timeFour, timeFive);





// if(timeOne > timeTwelve){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// if(timeEleven <= moment()){
//     console.log("good");
// }else{
//     console.log("bad");
// }

// if (timeNine === time){
//     contentNine.setAttribute("style", "background-color: red;")
// }else if (timeNine < time){ // timenine < timeten???????
//     contentNine.setAttribute("style", "background-color: grey;")
// }else{
//     contentNine.setAttribute("style", "background-color: green;")
// }//????????????????????

// if (timeTen === time){
//     contentTen.setAttribute("style", "background-color: red;")
// }else if (timeTen < time){ //timeten < timeeleven??????/
//     contentTen.setAttribute("style", "background-color: grey;")
// }else{
//     contentTen.setAttribute("style", "background-color: green;")
// }//??????????????????

// if (timeEleven === time){
//     contentEleven.setAttribute("style", "background-color: red;")
// }else if (timeEleven < time){
//     contentEleven.setAttribute("style", "background-color: grey;")
// }else{
//     contentEleven.setAttribute("style", "background-color: green;")
// }//???????????????

// if (timeTwelve === time){
//     contentTwelve.setAttribute("style", "background-color: red;")
// }else if (timeTwelve < time){
//     contentTwelve.setAttribute("style", "background-color: grey;")
// }else{
//     contentTwelve.setAttribute("style", "background-color: green;")
// }//?????????????????????

// if (timeOne === time){
//     contentOne.setAttribute("style", "background-color: red;")
// }else if (timeOne < time){
//     contentOne.setAttribute("style", "background-color: grey;")
// }else{
//     contentOne.setAttribute("style", "background-color: green;")
// }

// if (timeTwo === time){
//     contentTwo.setAttribute("style", "background-color: red;")
// }else if (timeTwo < time){
//     contentTwo.setAttribute("style", "background-color: grey;")
// }else{
//     contentTwo.setAttribute("style", "background-color: green;")
// }

// if (timeThree === time){
//     contentThree.setAttribute("style", "background-color: red;")
// }else if (timeThree < time){
//     contentThree.setAttribute("style", "background-color: grey;")
// }else{
//     contentThree.setAttribute("style", "background-color: green;")
// }

// if (timeFour === time){
//     contentFour.setAttribute("style", "background-color: red;")
// }else if (timeFour < time){
//     contentFour.setAttribute("style", "background-color: grey;")
// }else{
//     contentFour.setAttribute("style", "background-color: green;")
// }

// if (timeFive === time){
//     contentFive.setAttribute("style", "background-color: red;")
// }else if (timeFive < time){
//     contentFive.setAttribute("style", "background-color: grey;")
// }else{
//     contentFive.setAttribute("style", "background-color: green;")
// }


// function submit(){

// }

