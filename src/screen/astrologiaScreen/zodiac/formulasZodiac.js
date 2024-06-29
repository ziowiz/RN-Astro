import zodiacSigns from "zodiac-signs";
import { zodiacInfo, stone, element } from "./astrologyData";

const zodiac = zodiacSigns("en");

export function calculateAstrology(data) {
	try {
		const zodiacSign = zodiac.getSignByDate({
			day: data.day,
			month: data.month,
		});

		let userName = zodiacSign.name;
		let symbol = zodiacSign.symbol;

		console.log("zodiacSign:", userName);
		console.log("symbol:", symbol);

		return zodiacInfo(userName);
	} catch (error) {
		console.error("Ошибка в calculateAstrology:", error);
		return { error: `Ошибка при расчете: ${error.message}` };
	}
}
