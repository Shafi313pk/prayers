// time in jeddah with detail 
// define a function to update the time every second
function updateTimeInJeddah() {
    // create a new date object with the current date and time
    var now = new Date();

    // set the timezone to Jeddah
    now.setHours(now.getHours() + 0);

    // get the current time in Jeddah
    var timeInJeddah = now.toLocaleTimeString();

    // display the time in the specified HTML element
    document.getElementById("timeInJeddahNow").innerHTML = timeInJeddah;
}

// update the time immediately when the page loads
updateTimeInJeddah();

// update the time every second using setInterval()
setInterval(updateTimeInJeddah, 1000);


// time in makkah
function updateTimeInMakkah() {
    var now = new Date();
    now.setHours(now.getHours() + 0);
    var timeInMakkah = now.toLocaleTimeString();
    document.getElementById("timeInMakkahNow").innerHTML = timeInMakkah;
}
updateTimeInMakkah();
setInterval(updateTimeInMakkah, 1000);












