const formulas = require("./formulas");
const responses = require("./responses");
import React, { useState } from "react";
function getNumerologyResponse(birthDate, numerologyType) {
	const [matrix, setMatrix] = useState(null);
	const { day, month, year } = birthDate;
	let result;
	switch (numerologyType) {
		case "pythagorean":
			const calculateMatrix = () => {
				const dateNumbers = `${day}${month}${year}`.split("").map(Number);

				// Сложение всех цифр для первого дополнительного числа
				const firstSum = dateNumbers.reduce((acc, num) => acc + num, 0);

				// Сумма цифр первого дополнительного числа
				const secondSum = firstSum
					.toString()
					.split("")
					.map(Number)
					.reduce((acc, num) => acc + num, 0);

				// Удвоенная первая цифра даты рождения
				const doubledFirstDigit = 2 * Number(day[0]);

				// Вычитание удвоенной первой цифры из первого дополнительного числа
				const thirdSum = firstSum - doubledFirstDigit;

				// Сумма цифр третьего дополнительного числа
				const fourthSum = thirdSum
					.toString()
					.split("")
					.map(Number)
					.reduce((acc, num) => acc + num, 0);

				// Создание матрицы
				const allNumbers = [
					...dateNumbers,
					...firstSum.toString().split("").map(Number),
					...secondSum.toString().split("").map(Number),
					...thirdSum.toString().split("").map(Number),
					...fourthSum.toString().split("").map(Number),
				];

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

				setMatrix(matrix);
			};
			break;
		case "kabbalah":
			result = formulas.kabbalah(birthDate);
			break;
		default:
			return "Unknown numerology type";
	}

	// Получаем ответы на основе расчета
	let response = "";
	if (numerologyType === "pythagorean") {
		const matrix = result.matrix;
		response += `Характер, сила воли: ${matrix.character}\n`;
		response += `Здоровье, красота: ${matrix.health}\n`;
		response += `Удача, везение: ${matrix.luck}\n`;
		response += `Энергетика, харизма: ${matrix.energy}\n`;
		response += `Логика, интуиция: ${matrix.logic}\n`;
		response += `Чувство долга: ${matrix.duty}\n`;
		response += `Познание, творчество: ${matrix.knowledge}\n`;
		response += `Трудолюбие, мастерство: ${matrix.labor}\n`;
		response += `Память, ум: ${matrix.memory}\n`;

		response += `Самооценка (столбец 1-2-3): 5\n`;
		response += `Зарабатывание денег (столбец 4-5-6): 4\n`;
		response += `Потенциал таланта (столбец 7-8-9): 3\n`;
		response += `Целеустремленность (строка 1-4-7): 4\n`;
		response += `Семейность (строка 2-5-8): 4\n`;
		response += `Стабильность (строка 3-6-9): 4\n`;
		response += `Духовный потенциал (диагональ 1-5-9): 6\n`;
		response += `Темперамент (диагональ 3-5-7): 1\n`;
	} else {
		response += responses[numerologyType][result.firstNumber];
	}

	// Модальное окно с предупреждением
	alert("Это развлечение, не доверяйте этому результату на 100%.");

	return response;
}

module.exports = getNumerologyResponse;
