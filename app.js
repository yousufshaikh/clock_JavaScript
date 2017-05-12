// setInterval(displayClock, 500);
function displayClock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var dayNight = "AM";

    if (hours > 12) {
        dayNight = "PM";
    }

    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + dayNight;
}
setInterval(displayClock, 500);
