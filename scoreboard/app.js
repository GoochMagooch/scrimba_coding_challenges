// Home/Guest Point Values
let homeScore = document.getElementById('home-score')
let homeValue = homeScore.innerText;
let guestScore = document.getElementById('guest-score')

// Button Calls for Functions and Point Counter (Home)
let homeOnePoint = document.getElementById('home-one')
let homeTwoPoint = document.getElementById('home-two')
let homeThreePoint = document.getElementById('home-three')
let homeCount = 0

// Button Calls for Functions and Point Counter (Guest)
let guestOnePoint = document.getElementById('guest-one')
let guestTwoPoint = document.getElementById('guest-two')
let guestThreePoint = document.getElementById('guest-three')
let guestCount = 0

// Highlights Higher Score in Green
function higherScore() {
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
    higherScore()
}
function twoPointHome() {
    homeScore.textContent = homeCount += 2
    higherScore()
}
function threePointHome() {
    homeScore.textContent = homeCount += 3
    higherScore()
}

// Guest Point Increment Functions
function onePointGuest() {
    guestScore.textContent = guestCount += 1
    higherScore()
}
function twoPointGuest() {
    guestScore.textContent = guestCount += 2
    higherScore()
}
function threePointGuest() {
    guestScore.textContent = guestCount += 3
    higherScore()
}

// Resets Both Scores
function newGame() {
    homeCount = 0
    homeScore.textContent = homeCount
    guestCount = 0
    guestScore.textContent = guestCount
    homeScore.style.color = '#F94F6D'
    guestScore.style.color = '#F94F6D'
}