const calculateMatrix = (day, month, year) => {
	const dateNumbers = `${day}${month}${year}`.split("").map(Number);
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

	// Создание матрицы
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

	const matrix = {
		ones: allNumbers.filter((num) => num === 1).length,
		twos: allNumbers.filter((num) => num === 2).length,
		threes: allNumbers.filter((num) => num === 3).length,
		fours: allNumbers.filter((num) => num === 4).length,
		fives: allNumbers.filter((num) => num === 5).length,
		sixes: allNumbers.filter((num) => num === 6).length,
		sevens: allNumbers.filter((num) => num === 7).length,
		eights: allNumbers.filter((num) => num === 8).length,
		nines: allNumbers.filter((num) => num === 9).length,
	};

	const maxValue = Math.max(...Object.values(matrix));

	console.log(
		"matrix - " +
			matrix.ones +
			" " +
			matrix.twos +
			" " +
			matrix.threes +
			" " +
			matrix.fours +
			" " +
			matrix.fives +
			" " +
			matrix.sixes +
			" " +
			matrix.sevens +
			" " +
			matrix.eights +
			" " +
			matrix.nines
	);
	const matrixResponse = { ...matrix, maxValue };
	return matrixResponse;
};

module.exports = calculateMatrix;
