const squares = document.querySelector('.squares');
const resetBtn = document.querySelector('button');

function getRandomColor()  {
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	return ('#' + randomColor);
}

function createSquares(num) {

	console.log(num);
	squares.innerHTML = "";
	for (i = 1; i <= num; i++) {
		const div = document.createElement('div');
		div.classList.add('square');
		div.addEventListener('mouseover', () => {
			div.style.backgroundColor = getRandomColor();
		})
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

