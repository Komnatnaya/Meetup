'use strict';
// Таймер
	function startTimer() {
	var timer = document.getElementById("timer");
	var time = timer.innerHTML;
	var arr = time.split(":");
	var d = arr[0];
	var h = arr[1];
	var m = arr[2];
	var s = arr[3];
	if (s == 0) {
		if (m == 0) {
			if (h == 0) {
				if (d == 0) {
					window.location.reload();
					return;
				}
				d--;
				h = 24;
				if (h < 10) h = "0" + d;
			}
			h--;
			m = 60;
			if (h < 10) h = "0" + h;
		}
		m--;
		if (m < 10) m = "0" + m;
		s = 59;
	}
	else s--;
	if (s < 10) s = "0" + s;
	document.getElementById("timer").innerHTML = d+" : "+h+" : "+m+" : "+s;
	setTimeout(startTimer, 1000);
}

startTimer();
