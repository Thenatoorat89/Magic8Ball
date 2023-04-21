const ball = document.querySelector('img');
const input = document.querySelector('input');
const error = document.querySelector('.error');
const answer = document.querySelector('.answer');

const answersArr = [
	'Tak!',
	'Nie.',
	'Może.',
	'Ciężko powiedzieć...',
	'Chyba nie chcesz wiedzieć... :/',
	'Niewykluczone.',
];

const shakeBall = () => {
	ball.classList.add('shake-animation');
	setTimeout(checkInput, 1000);
};

const getAnswer = () => {
	const number = Math.floor(Math.random() * 6);
	answer.innerHTML = `<span>Odpowiedź to:</span> ${answersArr[number]}`;
};

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		getAnswer();
		error.textContent = '';
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi kończyć się znakiem "?"';
		answer.textContent = '';
	} else {
		error.textContent = 'Nie zadałeś pytania...';
		answer.textContent = '';
	}
	ball.classList.remove('shake-animation');
};

const enterKey = e => {
	if (e.key === 'Enter') {
		shakeBall();
	}
};

ball.addEventListener('click', shakeBall);
input.addEventListener('keyup', enterKey);
