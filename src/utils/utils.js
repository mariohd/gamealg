const randomInt = (min = 0, max = 10) => 
	Math.floor(Math.random() * (max - min + 1)) + min;

const randomValueBasedOn = (answer) => {
	let odds = randomInt(0, 6);
	switch(odds) {
		case 0:
			return answer + 1;
		case 1:
			return answer - 1;
		case 2:
			return parseInt(answer / 1.1, 10);
		case 3:
			return parseInt(answer * 1.1, 10);
		case 4:
			return answer - (2 * randomInt(1));
		case 5:
			return answer - (odds);
		default:
			return answer + randomInt(3, 15);
	}
}

const i18n = (value) => {
	if (typeof value === "boolean") {
		return value ? "Verdadeiro" : "Falso";
	}
	return value;
}

export { randomInt, randomValueBasedOn, i18n };