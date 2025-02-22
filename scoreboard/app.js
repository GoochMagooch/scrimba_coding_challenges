let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')

let homeOnePoint = document.getElementById('home-one')
let homeTwoPoint = document.getElementById('home-two')
let homeThreePoint = document.getElementById('home-three')
let homeCount = 0

let guestOnePoint = document.getElementById('guest-one')
let guestTwoPoint = document.getElementById('guest-two')
let guestThreePoint = document.getElementById('guest-three')
let guestCount = 0

function onePointHome() {
    homeScore.textContent = homeCount += 1
}

function onePointGuest() {
    guestScore.textContent = guestCount += 1
}

function newGame() {
    homeCount = 0
    homeScore.textContent = homeCount
    guestCount = 0
    guestScore.textContent = guestCount
}