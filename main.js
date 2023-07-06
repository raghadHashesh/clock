const degree = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
setInterval(() => {
    const date = new Date();
    const hour = date.getHours() * 30;
    const minute = date.getMinutes() * degree;
    const second = date.getSeconds() * degree;

    hr.style.transform = `rotatez(${hour + (minute / 12)}deg)`;
    min.style.transform = `rotatez(${minute}deg)`;
    sec.style.transform = `rotatez(${second}deg)`;
})