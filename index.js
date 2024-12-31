function updateClock() {
    const hoursElement = document.getElementById('hrs');
    const minutesElement = document.getElementById('mins');
    const secondsElement = document.getElementById('secs');
    const ampmElement = document.getElementById('ampm');

    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
    ampmElement.textContent = ampm;
}

setInterval(updateClock, 1000);
updateClock(); // initial call to set the time immediately
