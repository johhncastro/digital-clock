const TIME_UPDATE_INTERVAL = 1000;

const timeOutPut = document.querySelector(".time");
const secOutPut = document.querySelector(".sec");
const ampmOutPut = document.querySelector(".ampm");
const monthOutPut = document.querySelector(".month");
const dayOfWeekOutPut = document.querySelector(".dayofweek");
const dayOutPut = document.querySelector(".day");
const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formatTimeComponent = (val) => val < 10 ? "0" : "";

const getCurrentDateComponents = () => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    return {h, m, s, day: d.getDay(), month: d.getMonth(), date: d.getDate()}
}

const updateTimeDisplay = () => {
    const {h, m, s, day, month, date} = getCurrentDateComponents();
    dayOfWeekOutPut.innerHTML = weekday[day];
    monthOutPut.innerHTML = monthName[month];
    dayOutPut.innerHTML = date;
    const time = `${formatTimeComponent(h)}${h}:${formatTimeComponent(m)}${m}`;
    const sec = `${formatTimeComponent(s)}${s}`;
    const ampm = h >= 12 ? "PM" : "AM";
    timeOutPut.innerHTML = time;
    secOutPut.innerHTML = sec;
    ampmOutPut.innerHTML = ampm;
}

setInterval(updateTimeDisplay, TIME_UPDATE_INTERVAL);

