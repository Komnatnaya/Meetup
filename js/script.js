'use strict';
// Timer
	function startTimer() {
	var timer = document.getElementById("timer");
	var time = timer.innerHTML;
	var arr = time.split(":");
	var day = arr[0];
	var hour = arr[1];
	var minute = arr[2];
	var second = arr[3];
	if (second == 0) {
		if (minute == 0) {
			if (hour == 0) {
				if (day == 0) {
					window.location.reload();
					return;
				}
				day--;
				hour = 24;
				if (hour < 10) hour = "0" + day;
			}
			hour--;
			minute = 60;
			if (hour < 10) hour = "0" + hour;
		}
		minute--;
		if (minute < 10) minute = "0" + minute;
		second = 59;
	}
	else second--;
	if (second < 10) second = "0" + second;
	document.getElementById("timer").innerHTML = day+" : "+hour+" : "+minute+" : "+second;
	setTimeout(startTimer, 1000);
}

startTimer();


// Map

var popup = document.querySelector(".contact__overlay-map");
var viewMap = popup.querySelector(".contact__view-map");
var contactShow = document.querySelector(".contact__show");

viewMap.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("contact__overlay-map--none");
	contactShow.classList.add("contact__show--show");
});
contactShow.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("contact__overlay-map--none");
	contactShow.classList.remove("contact__show--show");
});

// scrollup

$(document).ready(function(){
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.up, .alert').fadeIn();
    } else {
      $('.up, .alert').fadeOut();
    }
  });
  $('.up').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 3000);
    return false;
  });
});
