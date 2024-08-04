let display = document.getElementById('display');

function clearDisplay() {
	display.value = '';
}

function appendToDisplay(value) {
	display.value += value;
}

function calculate() {
	try {
		let result = eval(display.value);
		display.value = result;
	} catch (e) {
		display.value = 'Error';
	}
}
