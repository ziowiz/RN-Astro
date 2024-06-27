const calculateMatrix = (day, month, year, hour, minute) => {
	const dateNumbers = `${day}${month}${year}${hour}${minute}`
		.split("")
		.map(Number);
	console.log("dateNumbers - " + dateNumbers);

	// Сложение всех цифр для первого дополнительного числа
	const firstSum = dateNumbers.reduce((acc, num) => acc + num, 0);
	console.log("firstSum - " + firstSum);

	// Сумма цифр первого дополнительного числа
	const secondSum = firstSum
		.toString()
		.split("")
		.map(Number)
		.reduce((acc, num) => acc + num, 0);
	console.log("secondSum - " + secondSum);

	// Удвоенная первая цифра даты рождения (учитываем ведущий ноль)
	const doubledFirstDigit =
		2 * (day[0] === "0" ? Number(day[1]) : Number(day[0]));
	console.log("doubledFirstDigit - " + doubledFirstDigit);

	// Вычитание удвоенной первой цифры из первого дополнительного числа
	const thirdSum = firstSum - doubledFirstDigit;
	console.log("thirdSum - " + thirdSum);

	// Сумма цифр третьего дополнительного числа
	const fourthSum = thirdSum
		.toString()
		.split("")
		.map(Number)
		.reduce((acc, num) => acc + num, 0);
	console.log("fourthSum - " + fourthSum);

	// Создание матрицы из девяти цифр
	let allNumbers = [
		...dateNumbers,
		...firstSum.toString().split("").map(Number),
		...secondSum.toString().split("").map(Number),
		...thirdSum.toString().split("").map(Number),
		...fourthSum.toString().split("").map(Number),
	];
	console.log("allNumbers - " + allNumbers);

	// Исключаем нули из массива
	allNumbers = allNumbers.filter((num) => num !== 0);
	console.log("filtered allNumbers - " + allNumbers);

	// Возвращаем девять цифр
	const matrix = allNumbers.slice(0, 9);
	console.log("matrix - " + matrix);

	return matrix;
};

module.exports = calculateMatrix;
