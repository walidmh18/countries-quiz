const mainSec = document.querySelector('.main')
const capitalSec = document.querySelector('.capitalsQuiz')
const options = document.querySelectorAll('.option')
const capitalCity = document.querySelector('.capitalCity')
const playAgainBtn = document.querySelectorAll('.playAgainBtn')
const capitalQuizContainer = document.querySelector('.capitalQuizContainer')
const lostplayAgainBtn = document.querySelectorAll('.lostplayAgainBtn')
const backtoLobbyBtn = document.querySelectorAll('.backtoLobbyBtn')
const lostMsg= document.querySelectorAll('.lostMsg')
const game= document.querySelectorAll('.game')
const score = document.querySelectorAll('.score')



let country = {
    capital:'',
    name:'',
    code:''
}


    let capitalQuizs = {
    score: 0
}

function getCountry() {
    fetch('./countries.json')
    .then(res=> res.json())
    .then(countries=> {
        let randomIndex = Math.floor(Math.random() * countries.length)
        country.capital = countries[randomIndex].capital[0]
        country.name = countries[randomIndex].name.common
        country.code = countries[randomIndex].cca3.toLowerCase()
        console.log(country);
        let randomIndex2 = Math.floor(Math.random() * countries.length)
        while (randomIndex2 == randomIndex) {
            randomIndex2 =  Math.floor(Math.random() * countries.length)
        }
        let country2 = countries[randomIndex2].name.common


        let randomIndex3 = Math.floor(Math.random() * countries.length)
        while (randomIndex3 == randomIndex || randomIndex3 == randomIndex2) {
            randomIndex2 =  Math.floor(Math.random() * countries.length)
        }
        let country3 = countries[randomIndex3].name.common


        let randomIndex4 = Math.floor(Math.random() * countries.length)
        while (randomIndex4 == randomIndex || randomIndex4 == randomIndex2 || randomIndex4 == randomIndex3) {
            randomIndex4 =  Math.floor(Math.random() * countries.length)
        }
        let country4 = countries[randomIndex4].name.common

        
        capitalCity.innerText = country.capital
        countryFlag.setAttribute('src', `data/${country.code}.svg`)


        let randomBtnIndex = Math.floor(Math.random() * 4)
        options[randomBtnIndex].innerText = country.name
        options[randomBtnIndex + 4].innerText = country.name

        let randomBtnIndex2 = Math.floor(Math.random() * 4)
        while (randomBtnIndex2 == randomBtnIndex) {
            randomBtnIndex2 = Math.floor(Math.random() * 4)
        }
        options[randomBtnIndex2].innerText = country2
        options[randomBtnIndex2 + 4].innerText = country2

        let randomBtnIndex3 = Math.floor(Math.random() * 4)
        while (randomBtnIndex3 == randomBtnIndex || randomBtnIndex3 == randomBtnIndex2) {
            randomBtnIndex3 = Math.floor(Math.random() * 4)
        }
        options[randomBtnIndex3].innerText = country3
        options[randomBtnIndex3 + 4].innerText = country3


        let randomBtnIndex4 = Math.floor(Math.random() * 4)
        while (randomBtnIndex4 == randomBtnIndex || randomBtnIndex4 == randomBtnIndex2 || randomBtnIndex4 == randomBtnIndex3) {
            randomBtnIndex4 = Math.floor(Math.random() * 4)
        }
        options[randomBtnIndex4].innerText = country4
        options[randomBtnIndex4 + 4].innerText = country4

    })
}
function capitalQuiz() {
 
    getCountry()
    // capitalCity.innerText = country.capital

 
}
function startCapital() {
    mainSec.style.display = 'none' 
    capitalSec.style.display = 'block'
    playAgainCapitals()
    
}
let clicks = {
    num: 0
}
function capitalSubmit(btn) {
    clicks.num ++
    if (clicks.num >1) {
        return
    }
    btn.style.background = '#ffc107'
    setTimeout(() => {
        verifyCapital(btn)
    }, 1500);
}

function verifyCapital(btn) {
    if (btn.innerText == country.name) {
        btn.style.background = '#28a745'
        setTimeout(() => {
            playAgainBtn.forEach(btn=>{
                btn.style.display = 'block'
            })
            
        }, 1500);
        capitalQuizs.score ++
    } else {
        btn.style.background = '#dc3545'
        options.forEach(option=> {
            if (option.innerText == country.name) {
                option.style.background = '#28a745'
            }
        })
        setTimeout(() => {
            lostMsg.forEach(msg=>{
                msg.style.display = 'block'
            })
            backtoLobbyBtn.forEach(btn=>{
                btn.style.display = 'block'
            })
            game.forEach(game=>{
                game.style.display = 'none'
            })
            score.forEach(el=>{
                el.innerText = capitalQuizs.score

            })
            
        }, 2500);

    }
}

function playAgain() {


    options.forEach(option=>{
        option.style.background = '#dcdcdc'
        option.style.display = 'block'
    })
    playAgainBtn.forEach(btn=>{
        btn.style.display = 'none'
    })
    lostMsg.forEach(btn=>{
        btn.style.display = 'none'
    })
    game.forEach(gamee=>{
        gamee.style.display = 'block'  
    })
    clicks.num = 0
    
}
function playAgainCapitals() {
    playAgain()
    capitalQuiz()
}
function playAgainFlag() {
    playAgain()
    flagsQuiz()
}





const flagsQuizContainer = document.querySelector('.flagsQuiz')
const countryFlag = document.querySelector('.countryFlag')
function backToLobby() {
    mainSec.style.display = 'block' 
    flagsQuizContainer.style.display = 'none'
    capitalSec.style.display = 'none'
    capitalQuizs.score = 0
}
function startFlag() {
    flagsQuizContainer.style.display = 'block'
    mainSec.style.display = 'none' 
    playAgainFlag()

}
function flagsQuiz() {
    getCountry()
    console.log(country);

}