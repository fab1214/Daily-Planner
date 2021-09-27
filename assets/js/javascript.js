
//Moment JS Variables
var currentDayEl = document.querySelector("#currentDay");
var currentTime = moment();
var currentHour = parseInt(moment().format('HH'));

//Add time & date
currentDayEl.textContent = currentTime.format("dddd MMMM DD, YYYY - h:mm A");

//button click to save text & time to localStorage
var button = document.querySelectorAll(".btn");
button.forEach(function(currentBtn){
    currentBtn.addEventListener('click', function(event){
        var text = event.target.previousElementSibling.value;
        var time = event.target.parentElement.dataset.hour;
        localStorage.setItem(time, text);
    })
});

//retrieve localStorage using array for data-hour
var localStorageTime = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < localStorageTime.length; i++) {
    var dataHour = localStorage.getItem(localStorageTime[i]);
    $(".form" + localStorageTime[i]).val(dataHour);
};

var item = $(this).data('hour');

$('textarea').each(function(){
    if(item < currentHour) {
     $(this).addClass('past');
    }else if(item === currentHour) {
        $(this).addClass('present');
    }else{
        $(this).addClass('future');
    }
});