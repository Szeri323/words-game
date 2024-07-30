const words = ['mama', 'tata', 'dziadek', 'babcia']
const wordsAll = [...words]
const tile = document.querySelector('.tile');
const words_list = document.querySelector('.words_list')
const words_left = document.querySelector('.words_left')
const word_field = document.querySelector('.word_field')
const win_field = document.querySelector('.win')
const input = document.querySelector('input')
const button = document.querySelector('button')
const score_field = document.querySelector('.score')
let score = 0

// function showKey(e) {
//     tile.innerHTML = ` ${e.key}`;
// }

// document.addEventListener('keypress', showKey);

function showWordsList() {
    words_list.innerHTML = ''
    for (let word of wordsAll) {
        words_list.innerHTML += `<span>${word}</span>` + " "
    }
}
showWordsList()
function showWordsLeft() {
    words_left.innerHTML = ''
    for (let word of words) {
        words_left.innerHTML += `<span>${word}</span>` + " "
    }
}
showWordsLeft()

function initialGame() {
    random_index = getRandomNumber(words.length)
    let word = words[random_index]
    words.splice(random_index, 1)
    showWordsLeft()
    letters = word.split('')
    for (let letter of letters) {
        word_field.innerHTML += `<span>${letter}</span>`
    }
    score_field.textContent = score
}



function getRandomNumber(number) {
    return Math.floor(Math.random() * number)
}

function gameLogic(e) {
    if (letters[0] == e.key) {
        letters.shift()
    }
    word_field.innerHTML = ''
    for (let letter of letters) {
        word_field.innerHTML += `<span>${letter}</span>`
    }
    if (letters.length == 0) {
        score++
        updateScore()
        if (words.length == 0) {
            document.removeEventListener('keypress', gameLogic)
            win_field.textContent = 'You win!'
            return
        }
        random_index = getRandomNumber(words.length)
        word = words[random_index]
        words.splice(random_index, 1)
        letters = word.split('')
        word_field.innerHTML = ''
        for (let letter of letters) {
            word_field.innerHTML += `<span>${letter}</span>`
        }
        showWordsLeft()
    }
}

function updateScore() {
    score_field.textContent = score
}

function printText() {
    words.push(input.value)
    wordsAll.push(input.value)
    showWordsList()
    showWordsLeft()
}

// word_field.textContent = word
document.addEventListener('keypress', gameLogic);
button.addEventListener('click', printText);

initialGame()