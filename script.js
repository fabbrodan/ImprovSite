$("document").ready(function() {
    if (sessionStorage.getItem("timerStart") == null) {
        sessionStorage.setItem("timerStart", new Date);
    }
    siteTimer();
});

// function to start a timer based off the start Date parameter
function siteTimer() {
    setInterval(() => {
        $(".Timer").text(Math.round((new Date - Date.parse(sessionStorage.getItem("timerStart"))) / 1000, 0) + " Second(s)");   
        }, 1000);
}