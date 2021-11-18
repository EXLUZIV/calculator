let a = '';
let b = '';
let sign = '';
let finish = false;

const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operation = ['-', '+', '*', '/'];

const out = document.querySelector('.currentOperand p');
const clear = () => {
	a = '';
	b = '';
	sign = '';
	finish = false;
	out.textContent = '0';
};

document.querySelector('.ac').onclick = clear;
document.querySelector('.calculator').onclick = (event) => {
	if (!event.target.classList.contains('btn')) {
		return
	};
	if (event.target.classList.contains('ac')) {
		return;
	};

	out.textContent = '';
	const key = event.target.textContent.replace(/\s{2,}/g,' ');

	if (num.includes(key)) {
		if (b === '' && sign === '') {
			a += key;
			out.textContent = a;
		} else if (a !== '' && b !== '' && finish === true) {
			console.log('123')
			b = key;
			finish = false;
			out.textContent = b;
		} else{
			b += key;
			out.textContent = b;
		};
		return;
	};

	if (operation.includes(key)) {
		sign = key;
		out.textContent = sign;
		return
	};

	if (key === '= ') {
		switch (sign) {
			case "+":
				a = +a + +b;
				break;
			case "-":
				a = a - b;
				break;
			case "*":
				 a = a * b;
				break;
			case "/":
				if (b === '0') {
					out.textContent = 'Error';
					a = '';
					b = '';
					sign = '';
					return;
				}
				a = a / b;
				break;
		};
		finish = true;
		out.textContent = a;
		console.log(a, sign, b);
	};
};

