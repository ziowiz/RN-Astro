import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { calculateAstrology } from "./formulasZodiac";

export default function ZodiacComponent() {
	const [error, setError] = useState("");
	const [day, setDay] = useState("1");
	const [minute, setMinute] = useState("0");
	const [hour, setHour] = useState("0");
	const [month, setMonth] = useState("1");
	const [year, setYear] = useState("2024");
	const [astrologyResult, setAstrologyResult] = useState(null);

	const handleSubmit = () => {
		let data = {
			day: Number(day),
			month: Number(month),
			year: Number(year),
			minute: Number(minute),
			hour: Number(hour),
		};
		const result = calculateAstrology(data);
		if (result === "string") {
			setError(result);
			setAstrologyResult(null);
		} else {
			setAstrologyResult(result);
			console.log(result);
			setError("");
		}
	};

	const minutes = Array.from({ length: 60 }, (_, i) =>
		i.toString().padStart(2, "0")
	);
	const hours = Array.from({ length: 24 }, (_, i) =>
		i.toString().padStart(2, "0")
	);
	const days = Array.from({ length: 31 }, (_, i) =>
		(i + 1).toString().padStart(2, "0")
	);
	const months = Array.from({ length: 12 }, (_, i) =>
		(i + 1).toString().padStart(2, "0")
	);
	const currentYear = new Date().getFullYear();
	const years = Array.from({ length: 100 }, (_, i) =>
		(currentYear - i).toString()
	);

	return (
		<ScrollView contentContainerStyle={styles.scrollContainer}>
			<View>
				<View style={styles.container}>
					<View style={styles.containerRow2}>
						<Text style={styles.label}>Время:</Text>
						<View style={styles.containerRow3}>
							<Picker
								selectedValue={hour}
								style={styles.picker2}
								onValueChange={(itemValue) => setHour(itemValue)}
								mode="dialog"
							>
								{hours.map((h) => (
									<Picker.Item
										key={h}
										label={h.toString()}
										value={h.toString()}
									/>
								))}
							</Picker>
							{/* </View>
					<View style={styles.containerRow}> */}

							<Picker
								selectedValue={minute}
								style={styles.picker2}
								onValueChange={(itemValue) => setMinute(itemValue)}
								mode="dialog" // or "dialog"
							>
								{minutes.map((m) => (
									<Picker.Item
										key={m}
										label={m.toString()}
										value={m.toString()}
									/>
								))}
							</Picker>
						</View>
					</View>
					<View style={styles.containerRow}>
						<Text style={styles.label}>День:</Text>
						<Picker
							selectedValue={day}
							style={styles.picker}
							onValueChange={(itemValue) => setDay(itemValue)}
							mode="dialog" // or "dialog"
						>
							{days.map((d) => (
								<Picker.Item
									key={d}
									label={d.toString()}
									value={d.toString()}
								/>
							))}
						</Picker>
					</View>
					<View style={styles.containerRow}>
						<Text style={styles.label}>Месяц:</Text>
						<Picker
							selectedValue={month}
							style={styles.picker}
							onValueChange={(itemValue) => setMonth(itemValue)}
							mode="dialog" // or "dialog"
						>
							{months.map((m) => (
								<Picker.Item
									key={m}
									label={m.toString()}
									value={m.toString()}
								/>
							))}
						</Picker>
					</View>
					<View style={styles.containerRow}>
						<Text style={styles.label}>Год:</Text>
						<Picker
							selectedValue={year}
							style={styles.picker}
							onValueChange={(itemValue) => setYear(itemValue)}
							mode="dialog" // or "dialog"
						>
							{years.map((y) => (
								<Picker.Item
									key={y}
									label={y.toString()}
									value={y.toString()}
								/>
							))}
						</Picker>
					</View>
				</View>
			</View>
			{error && <Text style={styles.error}>{error}</Text>}
			<TouchableOpacity
				style={styles.button}
				onPress={handleSubmit}
			>
				<Text style={styles.buttonText}>Рассчитать</Text>
			</TouchableOpacity>

			{astrologyResult ? (
				<View style={styles.resultContainer}>
					<Text style={styles.resultTextAbout}>
						Знак зодиака: {astrologyResult.name}
					</Text>
					<Text style={styles.resultTextAbout}>
						День: {astrologyResult.day}
					</Text>
					<Text style={styles.resultTextAbout}>
						Счастливые числа: {astrologyResult.luckyNumbers}
					</Text>
					<Text style={styles.resultTextAbout}>
						Цветы: {astrologyResult.flowers}
					</Text>
					<Text style={styles.resultTextAbout}>
						Драгоценные камни: {astrologyResult.gemstones}
					</Text>
					<Text style={styles.resultTextAbout}>
						Сильные стороны: {astrologyResult.strengths}
					</Text>
					<Text style={styles.resultTextAbout}>
						Слабые стороны: {astrologyResult.weaknesses}
					</Text>
					<Text style={styles.resultTextAbout}>
						Любимые занятия: {astrologyResult.favoriteActivities}
					</Text>
					<Text style={styles.resultTextAbout}>
						Совместимые знаки: {astrologyResult.compatibleSigns}
					</Text>
					<Text style={styles.resultTextAbout}>
						Несовместимые знаки: {astrologyResult.incompatibleSigns}
					</Text>
					<Text style={styles.resultTextAbout}>
						Камень рождения: {astrologyResult.birthstone}
					</Text>
					<Text style={styles.resultTextAbout}>
						Металл: {astrologyResult.metal}
					</Text>
					<Text style={styles.resultTextAbout}>
						Счастливый день: {astrologyResult.luckyDay}
					</Text>
					<Text style={styles.resultTextAbout}>
						Карта Таро: {astrologyResult.tarotCard}
					</Text>
					<Text style={styles.resultTextAbout}>
						Животное: {astrologyResult.animal}
					</Text>
					<Text style={styles.resultTextAbout}>
						Время года: {astrologyResult.season}
					</Text>
					<Text style={styles.resultTextAbout}>
						Девиз: {astrologyResult.motto}
					</Text>
					<Text style={styles.resultTextAbout}>
						Часть тела: {astrologyResult.bodyPart}
					</Text>
					<Text style={styles.resultTextAbout}>
						Энергия: {astrologyResult.energy}
					</Text>
					<Text style={styles.resultTextAbout}>
						Полярность: {astrologyResult.polarity}
					</Text>
					<Text style={styles.resultTextAbout}>
						Духовный цвет: {astrologyResult.spiritColor}
					</Text>
					<Text style={styles.resultTextAbout}>
						Сила камня: {astrologyResult.powerStone}
					</Text>
					<Text style={styles.resultTextAbout}>
						Символ элемента: {astrologyResult.elementSymbol}
					</Text>
					<Text style={styles.resultTextAbout}>
						Чакра: {astrologyResult.chakra}
					</Text>
					<Text style={styles.resultTextAbout}>
						Положительные ключевые слова: {astrologyResult.positiveKeywords}
					</Text>
					<Text style={styles.resultTextAbout}>
						Отрицательные ключевые слова: {astrologyResult.negativeKeywords}
					</Text>
					<Text style={styles.resultTextAbout}>
						Архетип: {astrologyResult.archetype}
					</Text>
					<Text style={styles.resultTextAbout}>
						Духовное животное: {astrologyResult.spiritualAnimal}
					</Text>
					<Text style={styles.resultTextAbout}>
						Счастливый талисман: {astrologyResult.luckyCharm}
					</Text>
					<Text style={styles.resultTextAbout}>
						Любимая еда: {astrologyResult.favoriteFood}
					</Text>
					<Text style={styles.resultTextAbout}>
						Любимый напиток: {astrologyResult.favoriteDrink}
					</Text>
					<Text style={styles.resultTextAbout}>
						Любимая музыка: {astrologyResult.favoriteMusic}
					</Text>
					<Text style={styles.resultTextAbout}>
						Любимый спорт: {astrologyResult.favoriteSport}
					</Text>
					<Text style={styles.resultTextAbout}>
						Любимое хобби: {astrologyResult.favoriteHobby}
					</Text>
					<Text style={styles.resultTextAbout}>
						Известные личности: {astrologyResult.famousPeople}
					</Text>
					<Text style={styles.resultTextAbout}>
						Счастливый цветок: {astrologyResult.luckyFlower}
					</Text>
					<Text style={styles.resultTextAbout}>
						Управляющая планета: {astrologyResult.rulingPlanet}
					</Text>
					<Text style={styles.resultTextAbout}>
						Благоприятный месяц: {astrologyResult.favorableMonth}
					</Text>
					<Text style={styles.resultTextAbout}>
						Ключевая сила: {astrologyResult.keyStrength}
					</Text>
					<Text style={styles.resultTextAbout}>
						Ключевая слабость: {astrologyResult.keyWeakness}
					</Text>
				</View>
			) : (
				<View style={styles.resultContainer}>
					<Text style={styles.resultTextAbout}>
						Астрология - это древняя практика изучения движения и расположения
						небесных тел с целью понимания и предсказания земных событий и
						человеческих дел. Она основана на идее, что положение звезд и планет
						в момент рождения человека может влиять на его характер, судьбу и
						жизненный путь. Астрология включает в себя анализ знаков зодиака,
						планетарных аспектов и домов гороскопа. Хотя научное сообщество не
						признает астрологию как науку, многие люди находят в ней источник
						самопознания и руководство в жизни. Астрологический анализ может
						предоставить интересные перспективы для размышления о себе и своем
						месте в мире.
					</Text>
				</View>
			)}
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	scrollContainer: {
		flexGrow: 1,
		padding: 6,
		backgroundColor: "#F5F5F5",
	},
	containerRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: 60,
	},
	containerRow2: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: 60,
	},
	containerRow3: {
		flexDirection: "row",
		justifyContent: "",
		alignItems: "center",
		height: 60,
	},
	button: {
		backgroundColor: "#007AFF",
		paddingVertical: 10,
		paddingHorizontal: 32,
		borderRadius: 8,
		alignItems: "center",
		marginBottom: 16,
	},
	buttonText: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "600",
		fontFamily: "Jura-Medium",
	},
	container: {
		padding: 20,
		backgroundColor: "#fff",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 5,
		marginBottom: 20,
	},
	picker: {
		height: 30,
		width: 230,
		alignSelf: "center",
		backgroundColor: "#f5f5f5",
	},
	picker2: {
		height: 30,
		width: 110,
		marginLeft: 10,
		alignSelf: "center",
		backgroundColor: "#f5f5f5",
	},
	label: {
		fontSize: 18,
		fontWeight: "600",
		fontFamily: "Jura-Medium",
		marginBottom: 8,
		color: "#333",
	},
	error: {
		color: "red",
		marginBottom: 16,
	},
	matrixContainer: {
		padding: 20,
		backgroundColor: "#FFFFFF",
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 1,
	},

	resultText: {
		fontSize: 17,
		fontWeight: "600",
		fontFamily: "Comfortaa-Regular",

		marginTop: 16,
		color: "#333",
	},
	resultTextAbout: {
		fontSize: 19,
		fontFamily: "Jura-Medium",
		color: "#333",
		marginTop: 16,
	},
});
