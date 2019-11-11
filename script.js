$("document").ready(function() {
    if (sessionStorage.getItem("timerStart") == null) {
        sessionStorage.setItem("timerStart", new Date);
    }
    siteTimer();

    if (sessionStorage.getItem("theme") == null) {
        sessionStorage.setItem("theme", "dark");
    }
    else {
        if (sessionStorage.getItem("theme") == "dark") {
            $('link').attr("href", "darktheme.css");
            $('#headerImg').attr("src", "Improviseramera_dark.png");
        }
        else if (sessionStorage.getItem("theme") == "light") {
            $('link').attr("href", "lighttheme.css");
            $('#headerImg').attr("src", "Improviseramera_light.png");
        }
    }

    $("#themeswitcher").click(function() {
        switchTheme();
    });
});

// function to start a timer based off the start Date parameter
function siteTimer() {
    setInterval(() => {
        $(".Timer").text(Math.round((new Date - Date.parse(sessionStorage.getItem("timerStart"))) / 1000, 0) + " Second(s)");   
        }, 1000);
}

function switchTheme() {
    if (sessionStorage.getItem("theme") == "dark") {
        sessionStorage.setItem("theme", "light");
        $('link').attr("href", "lighttheme.css");
        $("#themeswitcher").attr("value", "Dark Theme");
        $("#headerImg").attr("src", "Improviseramera_light.png");
    }
    else if (sessionStorage.getItem("theme") == "light") {
        sessionStorage.setItem("theme", "dark");
        $('link').attr("href", "darktheme.css");
        $("themeswitcher").attr("value", "Light Theme");
        $("#headerImg").attr("src", "Improviseramera_dark.png");
    }
}