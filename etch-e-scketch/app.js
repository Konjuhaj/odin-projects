const squares = document.querySelector('.squares');
const resetBtn = document.querySelector('button');

function createSquares(num) {

	console.log(num);
	squares.innerHTML = "";
	for (i = 1; i <= num; i++) {
		const div = document.createElement('div');
		div.classList.add('square');
		squares.appendChild(div);
		console.log(Math.floor(Math.sqrt(num)))
		squares.style.gridTemplateColumns = `repeat(${Math.floor(Math.sqrt(num))}, minmax(30px, 1fr))`
	}
}

resetBtn.addEventListener('click', () => {
	const num = Number(prompt('How many squares would you like?'));
	createSquares(num > 100 ? 100 : num);
})

createSquares(16 * 16);

