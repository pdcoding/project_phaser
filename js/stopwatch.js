let h1 = document.getElementsByTagName('h1')[0],
	start = document.getElementById('start'),
	stop = document.getElementById('stop'),
	clear = document.getElementById('clear'),
	// milliseconds = 0,
	seconds = 0,
	minutes = 0,
	hours = 0,
	t;

function add() {
	seconds++;
	// if (milliseconds >= 100) {
	// 	milliseconds = 0;
	// 	seconds++;
	// }
	if (seconds >= 60) {
		seconds = 0;
		minutes++;
		if (minutes >= 60) {
			minutes = 0;
			hours++;
		}
	}

	h1.textContent =
		(hours ? (hours > 9 ? hours : '0' + hours) : '00') +
		':' +
		(minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
		':' +
		(seconds > 9 ? seconds : '0' + seconds);
	// +':' +
	// 	(milliseconds
	// 		? milliseconds > 9
	// 			? milliseconds
	// 			: '0' + milliseconds
	// 		: '00');

	timer();
}

function timer() {
	t = setTimeout(add, 10);
}
// timer();

start.onclick = timer;

stop.onclick = function() {
	clearTimeout(t);
	console.log('stop button pressed');
};

clear.onclick = function() {
	console.log('clear pressed');
	h1.textContent = '00:00:00';
	// milliseconds = 0;
	seconds = 0;
	minutes = 0;
	hours = 0;
};
