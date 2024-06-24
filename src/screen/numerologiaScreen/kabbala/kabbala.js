const russianAlphabet = {
	А: 1,
	Б: 2,
	В: 3,
	Г: 4,
	Д: 5,
	Е: 6,
	Ё: 7,
	Ж: 8,
	З: 9,
	И: 1,
	Й: 2,
	К: 3,
	Л: 4,
	М: 5,
	Н: 6,
	О: 7,
	П: 8,
	Р: 9,
	С: 1,
	Т: 2,
	У: 3,
	Ф: 4,
	Х: 5,
	Ц: 6,
	Ч: 7,
	Ш: 8,
	Щ: 9,
	Ъ: 1,
	Ы: 2,
	Ь: 3,
	Э: 4,
	Ю: 5,
	Я: 6,
};

const englishAlphabet = {
	A: 1,
	B: 2,
	C: 3,
	D: 4,
	E: 5,
	F: 6,
	G: 7,
	H: 8,
	I: 9,
	J: 1,
	K: 2,
	L: 3,
	M: 4,
	N: 5,
	O: 6,
	P: 7,
	Q: 8,
	R: 9,
	S: 1,
	T: 2,
	U: 3,
	V: 4,
	W: 5,
	X: 6,
	Y: 7,
	Z: 8,
};

function getLetterValue(letter) {
	if (russianAlphabet.hasOwnProperty(letter.toUpperCase())) {
		return {
			value: russianAlphabet[letter.toUpperCase()],
			language: "russian",
		};
	} else if (englishAlphabet.hasOwnProperty(letter.toUpperCase())) {
		return {
			value: englishAlphabet[letter.toUpperCase()],
			language: "english",
		};
	} else {
		return { value: 0, language: null };
	}
}

function calculateNameValue(name) {
	let currentLanguage = null;
	let sum = 0;

	for (let letter of name) {
		const { value, language } = getLetterValue(letter);
		if (!language) return "Выбраный язык не поддерживается";

		if (!currentLanguage) {
			currentLanguage = language;
		} else if (currentLanguage !== language) {
			return "Выбраный язык не поддерживается";
		}

		sum += value;
	}

	return sum;
}

function calculateKabbalah(firstName, middleName = null, lastName) {
	const fullName = middleName
		? `${firstName}${middleName}${lastName}`
		: `${firstName}${lastName}`;
	const nameValue = calculateNameValue(fullName);

	if (typeof nameValue === "string") {
		return nameValue; // Вернет сообщение об ошибке, если язык не поддерживается
	}

	return nameValue;
}

const kabbalisticValues = {
	1: "Единица — Суть и первопричина, Солнце",
	2: "Двойка — Энергия взаимодействия, Луна",
	3: "Тройка — Триединство, Юпитер",
	4: "Четверка — Материальное, Уран",
	5: "Пятерка — Перемены, Меркурий",
	6: "Шестерка — Гармония, Венера",
	7: "Семерка — Завершение, Нептун",
	8: "Восьмерка — Справедливость, Сатурн",
	9: "Девятка — Рождение, Марс",
};

function getKabbalisticValue(sum) {
	const reducedSum = sum % 9 || 9;
	return kabbalisticValues[reducedSum];
}

module.exports = {
	calculateKabbalah,
	getKabbalisticValue,
};
