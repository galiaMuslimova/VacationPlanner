var name = window.prompt("Добро пожаловать! Пожалуйста, введите ваше имя");
var greeting = document.getElementById("greeting");
greeting.innerHTML += ", " + name + "!";

var enterDays = document.getElementById("enterDays");
enterDays.onclick = calculateDays;
var days;
function calculateDays() {
    var daysInput = document.getElementById("days");
    days = daysInput.value;
    var hoursMessage = document.getElementById("hoursMessage");
    hoursMessage.innerHTML = "У вас есть целых " + days * 24 + " часов для незабывемого отдыха!";    
    var message = document.getElementById("daysMessage");
    if (days < 4) {
        message.innerHTML = "Главное не сколько времени отдыхать, а насколько интересно это сделать!";
    }
    else if (days < 7) {
        message.innerHTML = "Отлично! Как раз успеете прекрасно отдохнуть!";
    }
    else {
        message.innerHTML = "За такое время можно полностью восстановить силы и набраться впчатлений на весь год!";
    }
    
    var timingNext = document.getElementById("timingNext");
    timingNext.removeAttribute("hidden");
    var budgetSection = document.getElementById("budgetSection");
    timingNext.onclick = function () {
        budgetSection.removeAttribute("hidden");
    }
}
var enterBudget = document.getElementById("enterBudget");
enterBudget.onclick = calculateBudget;
function calculateBudget() {
    var tripBudget = document.getElementById("tripBudget");
    var budget = tripBudget.value;
    var tripExchangeMsg = document.getElementById("tripExchangeMsg");
    tripExchangeMsg.innerHTML = "Ваш общий бюджет составляет " + budget + " рублей";
    var dailyExchangeMsg = document.getElementById("dailyExchangeMsg");
    var budgetDay = budget/days;
    budgetDay_str=budgetDay.toFixed(2);
    dailyExchangeMsg.innerHTML = "Это значит, что за один день вы сможете расходовать примерно  " + budgetDay_str + " рублей";
    var budgetNext = document.getElementById("budgetNext");
    budgetNext.removeAttribute("hidden");    
}
var images = ["images/bg1.jpg", "images/bg2.jpg", "images/bg3.jpg", "images/bg4.jpg"];
var currentImage = 0;
setInterval(changeImage, 6000);
function changeImage (){
    currentImage ++;
    if(currentImage > images.length-1){
        currentImage = 0;
    }
    document.body.style.backgroundImage = "url(" + images[currentImage] + ")";
}



