let homeCount = document.getElementById("homeCount");
let guestCount = document.getElementById("guestCount");
let home = 0;
let guest = 0;

// For the Home scorecard
function increment1home() {
    home += 1;
    homeCount.textContent = home;
}
function increment2home() {
    home += 2;
    homeCount.textContent = home;
}
function increment3home() {
    home += 3;
    homeCount.textContent = home;
}

// Functions for Guest scorecard
function increment1guest() {
    guest += 1;
    guestCount.textContent = guest;
}
function increment2guest() {
    guest += 2;
    guestCount.textContent = guest;
}
function increment3guest() {
    guest += 3;
    guestCount.textContent = guest;
}

// Functions to reset scoreboard
function reset() {
    home = 0; 
    guest = 0;
    homeCount.textContent = home;
    guestCount.textContent = guest;
}