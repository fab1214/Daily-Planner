
//Moment JS Variables
var currentDayEl = document.querySelector("#currentDay");
var currentTime = moment();
//Add time & date
currentDayEl.textContent = currentTime.format("dddd MMMM DD, YYYY - h:mm A");

var button = document.querySelectorAll(".btn");

button.forEach(function(currentBtn){
    currentBtn.addEventListener('click', function(event){
        var text = event.target.previousElementSibling.value;
        var time = event.target.parentElement.dataset.hour;
        localStorage.setItem(time, text);
    })
});