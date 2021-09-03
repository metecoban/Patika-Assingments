let myName = document.getElementById(`myName`);
let myClock = document.getElementById(`myClock`);

document.addEventListener('DOMContentLoaded', () => {
    let name = prompt(`Write your name: `);
    myName.innerHTML = name;

    showTime();
});

function showTime() {
    let today = new Date();
    let time = today.toLocaleTimeString('en-GB');
    let day = today.getDay();
    day = day === 1 ? `Pazartesi` 
        : day === 2 ? `Sali` 
        : day === 3 ? `Carsamba` 
        : day === 4 ? `Persembe` 
        : day === 5 ? `Cuma` 
        : day === 6 ? `Cumartesi` : `Pazar`;

    myClock.innerHTML = time + `   ` + day;
}
setInterval(showTime, 1000);
