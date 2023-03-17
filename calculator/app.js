const screen1Obj = document.querySelector('.numbers');
const g_operant = document.querySelector('.operant');
const screen2Obj = document.querySelector('.numbers2');

function add(num1, num2) {
	return num1 + num2;
}

function sub(num1, num2) {
	return num1 - num2;
}

function div(num1, num2) {
	return num1 / num2;
}

function mul(num1, num2) {
	return num1 * num2;
}

const operations = {
	"+": add,
	"-": sub,
	"÷": div,
	"*": mul
}

function operate(num1, num2, operator) {
	const num = operations[operator](num1, num2);
	if ((num1 == 0 || num2 == 0) && operator == '÷') return 'Division by 0';
	else if (num % 1 != 0) return(num.toFixed(1));
	else return (num);
}

function updateOperator(operator) {
	if (!g_operant.innerHTML) {
		g_operant.innerHTML = operator.innerHTML;
	}
	else {
		updateScreen(operate(Number(screen1Obj.innerHTML), Number(screen2Obj.innerHTML), g_operant.innerHTML), operator.innerHTML);
	}
}

function updateScreen(value, operation) {
	if (value == 'Division by 0') {
		screen1Obj.innerHTML = "You think you're funny, huh?";
		setTimeout(() => {
			clearScreen();
		}, 5500)
	}
	screen1Obj.innerHTML = value;
	screen2Obj.innerHTML = "";
	g_operant.innerHTML = operation
}

function addDot() {
	console.log('dot')
	if (!g_operant.innerHTML) {
		screen1Obj.innerHTML.indexOf('.') == -1 ? screen1Obj.innerHTML += '.' : "";
	} else {
		screen2Obj.innerHTML.indexOf('.') == -1 ? screen2Obj.innerHTML += '.': "";
	}
}

function clearScreen() {
	screen1Obj.innerHTML = "0";
	screen2Obj.innerHTML = "";
	g_operant.innerHTML = "";
}

function display(num) {
	let num1 = screen1Obj.innerHTML;
	const num2 = screen2Obj.innerHTML;

	if (num1 === '0') num1 = "";

	if (!g_operant.innerHTML & num != '=') {
		screen1Obj.innerHTML = num1 + num;
	} else if (!isNaN(Number(num))) {
		screen2Obj.innerHTML = num2 + num;
	} else {
		updateScreen(operate(Number(num1),Number(num2), g_operant.innerHTML), "");
	}
}

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) =>  {
	button.addEventListener('click', (e) => {
		display(button.innerHTML);
	})
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', clearScreen)

const erase = document.querySelector('.erase');
erase.addEventListener('click', () => {
	screen2Obj.innerHTML = "";
})

const operants = document.querySelectorAll('.operation');
operants.forEach((operation) => {
	operation.addEventListener('click', () => {
		updateOperator(operation);
	})
})

const dot = document.querySelector('.dot');
dot.addEventListener('click', addDot);

document.addEventListener('keydown', (e)=> {
	console.log (e.key);
	if (e.key == 'Backspace'){
		screen2Obj.innerHTML = "";
	}
	if (!isNaN(Number(e.key))) {
		display(e.key);
	}
})
