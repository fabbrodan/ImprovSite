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
            $('link').attr("href", "Styles/darktheme.css");
            $("#themeswitcher").attr("value", "Light Theme");
            $('#headerImg').attr("src", "Images/Improviseramera_dark.png");
        }
        else if (sessionStorage.getItem("theme") == "light") {
            $('link').attr("href", "Styles/lighttheme.css");
            $("#themeswitcher").attr("value", "Dark Theme");
            $('#headerImg').attr("src", "Images/Improviseramera_light.png");
        }
    }

    $("#themeswitcher").click(function() {
        switchTheme();
    });

    LastUpdated();
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
        $('link').attr("href", "Styles/lighttheme.css");
        $("#themeswitcher").attr("value", "Dark Theme");
        $("#headerImg").attr("src", "Images/Improviseramera_light.png");
    }
    else if (sessionStorage.getItem("theme") == "light") {
        sessionStorage.setItem("theme", "dark");
        $('link').attr("href", "Styles/darktheme.css");
        $("#themeswitcher").attr("value", "Light Theme");
        $("#headerImg").attr("src", "Images/Improviseramera_dark.png");
    }
}

// Get data about when the document was last modified as a date. Then show it
// as a DateString. Then find the element with the correct class and have that
// show the string. 
function LastUpdated() {
    var date = new Date(document.lastModified).toDateString();
    var el = document.getElementsByClassName("date");

    // Atm I don't know how to make javascript show "Å" so I did it like this. 
    el[0].textContent = "Daniel \u00C5slund & Emil Rundberg" + " " + "(" + date + ")";
}