const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answersArr = ['Tak!', 'Nie.', 'Może.', 'Ciężko powiedzieć...', 'Chyba nie chcesz znać odpowiedzi :/']

const checkInput = () => {
    if(input.value !== '' && input.value.slice(-1) === '?'){
        getAnswer();
        error.textContent = ''
    }else if(input.value !== '' && input.value.slice(-1) !== '?'){
        error.textContent = 'Pytanie musi kończyć się znakiem "?".'
        answer.textContent = ''
    }      
    else {
        error.textContent = 'Musisz zadać pytanie!'
        answer.textContent= ''
    }
    ball.classList.remove('shake-animation')
}

const getAnswer = () => {
    const number = Math.floor(Math.random()*5)
    answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`
}

const shakeBall = () => {
    ball.classList.add('shake-animation')
    setTimeout(checkInput,1000)
}

ball.addEventListener('click', shakeBall)