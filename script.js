
function getDayOfTheWeek() {
    const date = new Date();
    daysoftheweek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    today = date.getDay();
    return (`Current Day of the week is: ${daysoftheweek[today - 1]}`);
}

const displayDay = document.getElementById("dayofweek");

displayDay.innerHTML = getDayOfTheWeek();



function getTimeInUTC() {
    const currentTimeMillis = new Date().getTime();
    return (`Current UTC Time in milliseconds: ${currentTimeMillis}`);
}

const timeElement = document.getElementById("utctime");

timeElement.innerHTML = getTimeInUTC();