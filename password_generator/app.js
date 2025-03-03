const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
    "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
    "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
    "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let genBtn = document.getElementById('gen-pw')
let numSym = document.getElementById('num-sym')
let numSymValue = numSym.innerText
numSym.textContent = numSymValue + ' on'
let numSymOff = false
let userInput = document.getElementById('input')
let pwOne = document.getElementById('pw-one')
let pwTwo = document.getElementById('pw-two')
    
numSym.addEventListener('click', function() {
    if (numSymOff === true) {
        numSymOff = false
        numSym.textContent = numSymValue + ' on'
    } else {
        numSymOff = true
        numSym.textContent = numSymValue + ' off'
    }
})
    
function createPassword() {
    let input = userInput.value ? parseInt(userInput.value) : 15
    let password = ''
    for (let i = 0; i < input; i++) {
        randChar = characters[Math.floor(Math.random() * characters.length)]
        if (numSymOff === true) {
            while (!/^[a-zA-Z]$/.test(randChar)) {
                randChar = characters[Math.floor(Math.random() * characters.length)]
            }
            password += randChar
        } else {
            password += randChar
        }
    }
    return password
}
    
genBtn.addEventListener('click', function() {
    pwOne.textContent = createPassword()
    pwTwo.textContent = createPassword()
})