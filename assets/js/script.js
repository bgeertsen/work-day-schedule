let date = new Date();

// sets the date in the header
$("#currentDay").text("date: " + moment(date).format("MMMM Do YYYY"));

// put all the task slots in an array to set their backgrounds with a for loop
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
// reloads the backgrounds if the user keeps the page open. will update without having to refresh

setInterval(setBackground(), (1000 * 60) * 60);

// added event listners to each button to save each task also alert user that the task has been saved
$("#btn9").on("click", function(){
    localStorage.setItem("event1", $("#9").val())
    alert("Saved task!");
})

$("#btn10").on("click", function(){
    localStorage.setItem("event2", $("#10").val())
    alert("Saved task!");
})

$("#btn11").on("click", function(){
    localStorage.setItem("event3", $("#11").val())
    alert("Saved task!");
})

$("#btn12").on("click", function(){
    localStorage.setItem("event4", $("#12").val())
    alert("Saved task!");
})

$("#btn13").on("click", function(){
    localStorage.setItem("event5", $("#13").val())
    alert("Saved task!");
})

$("#btn14").on("click", function(){
    localStorage.setItem("event6", $("#14").val())
    alert("Saved task!");
})

$("#btn15").on("click", function(){
    localStorage.setItem("event7", $("#15").val())
    alert("Saved task!");
})

$("#btn16").on("click", function(){
    localStorage.setItem("event8", $("#16").val())
    alert("Saved task!");
})

$("#btn17").on("click", function(){
    localStorage.setItem("event9", $("#17").val())
    alert("Saved task!");
})

// load each event if the user refreshes page
function loadEvents(){
    $("#9").text(localStorage.getItem("event1"))
    $("#10").text(localStorage.getItem("event2"))
    $("#11").text(localStorage.getItem("event3"))
    $("#12").text(localStorage.getItem("event4"))
    $("#13").text(localStorage.getItem("event5"))
    $("#14").text(localStorage.getItem("event6"))
    $("#15").text(localStorage.getItem("event7"))
    $("#16").text(localStorage.getItem("event8"))
    $("#17").text(localStorage.getItem("event9"))
}

loadEvents();