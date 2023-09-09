
function getDayOfTheWeek() {
    const date = new Date();
    daysoftheweek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    today = date.getDay();
    return (`${daysoftheweek[today - 1]}`);
}

const displayDay = document.getElementById("dayofweek");

displayDay.innerHTML = getDayOfTheWeek();



function updateUTCTime() {
    const timeElement = document.getElementById("utctime");
    const currentTimeMillis = new Date().getTime();
    timeElement.innerHTML = `${currentTimeMillis}`;
}

setInterval(updateUTCTime, 100);
updateUTCTime();