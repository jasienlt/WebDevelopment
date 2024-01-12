window.onload = function () {
    //declare variables to store default values

    var ms = document.querySelector("#milliseconds");
    var s = document.querySelector("#seconds");
    var m = document.querySelector("#minutes");
    var h = document.querySelector("#hour");

    var butStart = document.querySelector("#start");
    var butStop = document.querySelector("#stop");
    var butReset = document.querySelector("#reset");

    var interval;
    var milliseconds = 0;
    var seconds = 0;
    var minutes = 0;
    var hour = 0;

    //set the HTML markup for displaying variables
    ms.innerHTML = ".00";
    s.innerHTML = ":00";
    m.innerHTML = ":00";
    h.innerHTML = "00";

    //for Start button, clear any previous setInterval, then setInterval to Start
    butStart.onclick = function () {
        clearInterval(interval);
        interval = setInterval(start, 10);
    }

    //for Stop button, then stop the interval run only
    butStop.onclick = function () {
        clearInterval(interval);
    }

    //for Reset button, adjust all variables to 0
    butReset.onclick = function () {
        clearInterval(interval);
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        hour = 0;
        ms.innerHTML = milliseconds + "0";
        s.innerHTML = ":" + seconds + "0";
        m.innerHTML = ":" + minutes + "0";
        h.innerHTML = hour + "0";
    }

    function start() {
        //starts from the smallest variable and build up
        milliseconds++;

        //if milliseconds is less than 10, add a padding 0
        if (milliseconds < 9) {
            ms.innerHTML = "0" + milliseconds;
        }

        //if milliseconds is from 10 onwards, no change required
        if (milliseconds > 9) {
            ms.innerHTML = milliseconds;
        }

        //if milliseconds is from 100, revert milliseconds back to 0, add to seconds
        if (milliseconds > 99) {
            seconds++;
            s.innerHTML = "0" + seconds;
            milliseconds = 0;
            ms.innerHTML = "0" + milliseconds;
        }

        //if seconds is reaching 10, no change required/remove the padding 0
        if (seconds > 9) {
            s.innerHTML = ":" + seconds;
        }

        //if seconds is reaching 60, reset seconds back to 0, add to minutes
        if (seconds > 58) {
            minutes++;
            m.innerHTML = ":0" + minutes;
            seconds = 0;
            s.innerHTML = ":0" + seconds;
        }

        //if minutes is reaching 10, remove the padding 0
        if (minutes > 9) {
            m.innerHTML = ":" + minutes;
        }

        if (minutes > 58) {
            hour++;
            h.innerHTML = "0" + hour;
            minutes = 0;
            m.innerHTML = "0" + minutes;
        }

        if (hour > 9) {
            h.innerHTML = hour;
        }
    }
}