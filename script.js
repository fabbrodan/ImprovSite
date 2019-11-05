$("document").ready(function() {
    var startTime = new Date;
    siteTimer(startTime);
});

// function to start a timer based off the start Date parameter
function siteTimer(start) {
    setInterval(() => {
        $(".Timer").text(Math.round((new Date - start) / 1000, 0) + " Second(s)");   
        }, 1000);
        console.log("setInterval called");
}

function toggleDarkMode() {
    
}