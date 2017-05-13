// setInterval(displayClock, 500);
function displayClock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var dayNight = "PM";

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours < 12) {
        dayNight = "AM";
    }

    if (hours == 0) {
        hours = 12;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + dayNight;
}
setInterval(displayClock, 500);
