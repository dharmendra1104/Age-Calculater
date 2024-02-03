const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

const form = document.querySelector("form");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

function calcAge() {
    let yearGap = year - yearInp.value;
    let monthGap;
    let dateGap;

    if (month >= monthInp.value) {
        monthGap = month - monthInp.value;
    } else {
        yearGap--;
        monthGap = 12 + month - monthInp.value;
    }

    if (day >= dayInp.value) {
        dateGap = day - dayInp.value;
    } else {
        monthGap--;
        dateGap = 31 + day - dayInp.value;
        if (monthGap < 0) {
            monthGap = 11;
            yearGap--;
        }
    }

    dayOtp.innerHTML = dateGap;
    monthOtp.innerHTML = monthGap;
    yearOtp.innerHTML = yearGap;
}

function handleSubmit(event) {
    event.preventDefault();
    calcAge();
}

form.addEventListener("submit", handleSubmit);
