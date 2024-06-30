import zodiacSigns from "zodiac-signs";
import info from "./dataGoroskop";

const zodiac = zodiacSigns("en");

export function calculateAstrology(data) {
	try {
		const zodiacSign = zodiac.getSignByDate({
			day: data.day,
			month: data.month,
		});

		let userName = zodiacSign.name;

		console.log("zodiacSign:", userName);
		console.log(info(userName));

		return info(userName);
	} catch (error) {
		console.error("Ошибка в calculateAstrology:", error);
		return { error: `Ошибка при расчете: ${error.message}` };
	}
}
