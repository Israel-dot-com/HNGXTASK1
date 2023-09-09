
function getDayOfTheWeek() {
    const date = new Date();
    daysoftheweek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    today = date.getDay();
    return (`Current Day of the week is: ${daysoftheweek[today - 1]}`);
}

const displayDay = document.getElementById("dayofweek");

displayDay.innerHTML = getDayOfTheWeek();



function updateUTCTime() {
    const timeElement = document.getElementById("utctime");
    const currentTimeMillis = new Date().getTime();
    timeElement.innerHTML = `Current UTC Time in milliseconds: ${currentTimeMillis}`;
}

setInterval(updateUTCTime, 100);
updateUTCTime();