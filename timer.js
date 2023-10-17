var countdown = () => {
    var countDate = new Date("NOVEMBER 5, 2023 00:00:00").getTime();
    var now = new Date().getTime();
    var remainingTime = countDate - now;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day  = hour * 24;

    var textDay = Math.floor(remainingTime / day);
    var textHour = Math.floor((remainingTime % day) / hour);
    var textMinute = Math.floor((remainingTime % hour) / minute);
    var textSecond = Math.floor((remainingTime % minute) / second);

    document.querySelector(".day").innerText = textDay > 0 ? textDay: 0;
    document.querySelector(".hour").innerText = textHour > 0 ? textHour: 0;
    document.querySelector(".minute").innerText = textMinute > 0 ? textMinute: 0;
    document.querySelector(".second").innerText = textSecond > 0 ? textSecond: 0;
};

setInterval(countdown,500);



