let date = new Date();

$("#currentDay").text("date: " + moment(date).format("MMMM Do YYYY"));

let timesArray = [$("#9"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16"), $("#17")]

const setBackground = function() {
    for (i = 0; i < timesArray.length; i++)
    if (moment(date).hour() == timesArray[i].attr("id")) {
        timesArray[i].addClass("present")
    } else if (moment(date).hour() > timesArray[i].attr("id")) {
        timesArray[i].addClass("past")
    } else {
        timesArray[i].addClass("future")
    }

}

setBackground();

