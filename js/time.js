//Timer
document.getElementById('timer').innerHTML =
    005 + ':' + 00;
startTimer();

var myTime;
var isStop = false;

function startTimer() {
    let presentTime = document.getElementById('timer').innerHTML;
    let timeArray = presentTime.split(/[:]+/);
    let m = timeArray[0];
    let s = checkSecond((timeArray[1] - 1))
    //  
    // console.log(s);
    if (s == 59) {
        m = m - 1;
        if (m < 0) { alert('timer completed') };
    }

    // if (m == '4' && s == '55') {
    //     clearTimeout(myTime)
    //     console.log('stop');
    // }
    // console.log(isStop);
    if (m >= 0 ) {
        myTime = setTimeout(startTimer, 1000)
        document.getElementById('timer').innerHTML = m + ":" + s;
    }
}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
}