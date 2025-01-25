const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const second = document.getElementById('second');
const day = document.querySelector('.day');

let mountName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let int = setInterval(() => {
    let today = new Date();
    let d = today.getDate();
    let h = today.getHours();
    let m = today.getMonth();
    let y = today.getFullYear();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    day.innerHTML = `${d} ${mountName[m]} ${y}`;
    hour.innerHTML = h;
    minutes.innerHTML = min;
    second.innerHTML = sec;
})