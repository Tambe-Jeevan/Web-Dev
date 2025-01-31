const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
let hr = document.getElementById("hr");
let min = document.getElementById("min");

    const dates = new Date();
    const weekDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const yearMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    date.innerHTML = dates.getDate();
    day.innerHTML = weekDays[dates.getDay()];
    month.innerHTML = yearMonth[dates.getMonth()];
    year.innerHTML = dates.getFullYear();

    hr.innerHTML = `${dates.getHours()}  hr`;
    min.innerHTML = `${dates.getMinutes()}  min`;