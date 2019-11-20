$("document").ready(function() {
    // Start the timer on first time the site is loaded during the session
    if (sessionStorage.getItem("timerStart") == null) {
        sessionStorage.setItem("timerStart", new Date);
    }
    siteTimer();

    // set the theme according to session storage
    if (sessionStorage.getItem("theme") == null) {
        sessionStorage.setItem("theme", "dark");
        $("#themeswitcher").attr("value", "Ljust Tema");
    }
    else {
        if (sessionStorage.getItem("theme") == "dark") {
            $('link').attr("href", "Styles/darktheme.css");
            $("#themeswitcher").attr("value", "Ljust Tema");
            $('#headerImg').attr("src", "Images/Improviseramera_dark.png");
        }
        else if (sessionStorage.getItem("theme") == "light") {
            $('link').attr("href", "Styles/lighttheme.css");
            $("#themeswitcher").attr("value", "Mörkt Tema");
            $('#headerImg').attr("src", "Images/Improviseramera_light.png");
        }
    }

    // bind the theme switching funtion to the themeswitcher button
    $("#themeswitcher").click(function() {
        switchTheme();
    });

    LastUpdated();

    // bind the checkbox function to checkboxes click event
    $(".projectChkBox").on("click", function() {
        setChecked($(this));
    });

    // set checked attribute on checkboxes depending on local storage
    var checkBoxes = document.getElementsByClassName("projectChkBox");
    Array.from(checkBoxes).forEach((element) => {
        if (localStorage.getItem(element.getAttribute("id")) != null) {
            element.setAttribute("checked", "true");
            var rowId = element.getAttribute("id").replace("Check", "Row");
            $("#" + rowId).css("text-decoration", "line-through");
        }
    });
});

// function to start a timer based off the start Date parameter
function siteTimer() {
    setInterval(() => {
        $(".Timer").text(Math.round((new Date - Date.parse(sessionStorage.getItem("timerStart"))) / 1000, 0) + " Sekunder");   
        }, 1000);
}

// Switch the theme and update button values on click of the button
function switchTheme() {
    if (sessionStorage.getItem("theme") == "dark") {
        sessionStorage.setItem("theme", "light");
        $('link').attr("href", "Styles/lighttheme.css");
        $("#themeswitcher").attr("value", "Mörkt Tema");
        $("#headerImg").attr("src", "Images/Improviseramera_light.png");
    }
    else if (sessionStorage.getItem("theme") == "light") {
        sessionStorage.setItem("theme", "dark");
        $('link').attr("href", "Styles/darktheme.css");
        $("#themeswitcher").attr("value", "Ljust Tema");
        $("#headerImg").attr("src", "Images/Improviseramera_dark.png");
    }
}

// Get data about the last modification about of the document. Then convert it
// as a DateString. Then find the element with the correct class and have that
// show the string.
function LastUpdated() {
    var date = new Date(document.lastModified).toDateString();
    var el = document.getElementsByClassName("date");

    // Atm I don't know how to make javascript show "�" so I did it like this. 
    el[0].textContent = "Daniel \u00C5slund & Emil Rundberg" + " " + "(" + date + ")";
}

// set and remove the local storage values for the checked boxes to be remembered across sessions
function setChecked(chkBox) {
    var rowId = chkBox.attr("id").replace("Check", "Row");

    if (localStorage.getItem(chkBox.attr("id")) == null) {
        localStorage.setItem(chkBox.attr("id"), "true");
        $("#"+rowId).css("text-decoration", "line-through");
    }
    else {
        localStorage.removeItem(chkBox.attr("id"));
        $("#"+rowId).css("text-decoration", "");
    }
}