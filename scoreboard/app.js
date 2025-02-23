// Home/Guest Point Values
let homeScore = document.getElementById('home-score')
let homeValue = homeScore.innerText
let guestScore = document.getElementById('guest-score')

// Buttons for Point Counters (Home)
let homeOnePoint = document.getElementById('home-one')
let homeTwoPoint = document.getElementById('home-two')
let homeThreePoint = document.getElementById('home-three')
let homeCount = 0

// Buttons for Point Counter (Guest)
let guestOnePoint = document.getElementById('guest-one')
let guestTwoPoint = document.getElementById('guest-two')
let guestThreePoint = document.getElementById('guest-three')
let guestCount = 0

// Period Counter
let period = document.getElementById('period')
let periodVal = period.innerText
let periodCount = 0

// Reset Button
let reset = document.getElementById('reset-timer')

// Timer Variables and Function
let time = document.getElementById('timer')
let startTimer = document.getElementById('start-timer')

let minutes = document.getElementById('minute')
let minutesVal = minutes.innerText
let minutesVar = 2
let secondZero = 0

let seconds = document.getElementById('second')
let secondsVal = seconds.innerText
let secondsVar = 59


// Starts Timer and Increments Period
function start() {
    for (let i = 0; i < 2; i++) {
        while (secondsVar >= 0) {
            seconds.textContent = secondsVar
            if (secondsVar < 10 || secondsVar > 0) {
                seconds.textContent = `${secondZero}` + `${secondsVar}`
            }
            secondsVar--
        }
        minutesVar -= 1
        minutes.textContent = minutesVar
        if (periodCount < 2) {
            periodCount += 1
            period.textContent = periodCount
        }
    }
}

// Highlights Higher Score in Green
function leader() {
    if (homeCount > guestCount) {
        homeScore.style.color = '#00FF00'
        guestScore.style.color = '#F94F6D'
    } else if (guestCount > homeCount) {
        guestScore.style.color = '#00FF00'
        homeScore.style.color = '#F94F6D'
    } else {
        homeScore.style.color = '#F94F6D'
        guestScore.style.color = '#F94F6D'
    }
}

// Home Point Increment Functions
function onePointHome() {
    homeScore.textContent = homeCount += 1
    leader()
}
function twoPointHome() {
    homeScore.textContent = homeCount += 2
    leader()
}
function threePointHome() {
    homeScore.textContent = homeCount += 3
    leader()
}

// Guest Point Increment Functions
function onePointGuest() {
    guestScore.textContent = guestCount += 1
    leader()
}
function twoPointGuest() {
    guestScore.textContent = guestCount += 2
    leader()
}
function threePointGuest() {
    guestScore.textContent = guestCount += 3
    leader()
}

// Resets timer
function resetTimer() {
    minutes.textContent = minutesVal
    seconds.textContent = secondsVal
}

// Resets Both Scores
function newGame() {
    homeCount = 0
    homeScore.textContent = homeCount
    guestCount = 0
    guestScore.textContent = guestCount
    homeScore.style.color = '#F94F6D'
    guestScore.style.color = '#F94F6D'
    minutes.textContent = minutesVal
    seconds.textContent = secondsVal
    period.textContent = periodVal
}