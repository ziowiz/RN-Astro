import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import {
	interpretCharacter,
	interpretEnergy,
	interpretInterest,
	interpretHealth,
	interpretLogic,
	interpretLabor,
	interpretLuck,
	interpretDuty,
	interpretMemory,
	textAbaut,
} from "./dataSlovane";
import calculateMatrix from "./formulasSlovane";

export default function SlovaneComponent() {
	const [error, setError] = useState("");
	const [day, setDay] = useState("1");
	const [minute, setMinute] = useState("1");
	const [hour, setHour] = useState("1");
	const [month, setMonth] = useState("1");
	const [year, setYear] = useState("2024");
	const [matrix, setMatrix] = useState([]);

	const handleSubmit = () => {
		try {
			const matrixResult = calculateMatrix(day, month, year, hour, minute);
			setError("");
			setMatrix(matrixResult);
		} catch (e) {
			setError("Ошибка в расчете матрицы");
			console.error(e);
		}
	};

	const minutes = Array.from({ length: 60 }, (_, i) => i + 1);
	const hours = Array.from({ length: 24 }, (_, i) => i + 1);
	const days = Array.from({ length: 31 }, (_, i) => i + 1);
	const months = Array.from({ length: 12 }, (_, i) => i + 1);
	const currentYear = new Date().getFullYear();
	const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

	return (
		<ScrollView contentContainerStyle={styles.scrollContainer}>
			<View style={styles.container}>
				<View style={styles.containerRow}>
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
							mode="dropdown" // or "dialog"
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
							mode="dropdown" // or "dialog"
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
							mode="dropdown" // or "dialog"
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
				{error && <Text style={styles.error}>{error}</Text>}
				<TouchableOpacity
					style={styles.button}
					onPress={handleSubmit}
				>
					<Text style={styles.buttonText}>Рассчитать</Text>
				</TouchableOpacity>
				{matrix.length ? (
					<View style={styles.resultContainer}>
						<Text style={styles.resultText}>Число характера {matrix[0]}: </Text>
						<Text style={styles.resultTextAbout}>
							{interpretCharacter(matrix[0])}
						</Text>
						<Text style={styles.resultText}>Число энергии {matrix[1]}: </Text>
						<Text style={styles.resultTextAbout}>
							{interpretEnergy(matrix[1])}
						</Text>
						<Text style={styles.resultText}>Число интереса {matrix[2]}: </Text>
						<Text style={styles.resultTextAbout}>
							{interpretInterest(matrix[2])}
						</Text>
						<Text style={styles.resultText}>Число здоровья {matrix[3]}: </Text>
						<Text style={styles.resultTextAbout}>
							{interpretHealth(matrix[3])}
						</Text>
						<Text style={styles.resultText}>Число логики {matrix[4]}: </Text>
						<Text style={styles.resultTextAbout}>
							{interpretLogic(matrix[4])}
						</Text>
						<Text style={styles.resultText}>Число труда {matrix[5]}: </Text>
						<Text style={styles.resultTextAbout}>
							{interpretLabor(matrix[5])}
						</Text>
						<Text style={styles.resultText}>Число удачи {matrix[6]}: </Text>
						<Text style={styles.resultTextAbout}>
							{interpretLuck(matrix[6])}
						</Text>
						<Text style={styles.resultText}>Число долга {matrix[7]}: </Text>
						<Text style={styles.resultTextAbout}>
							{interpretDuty(matrix[7])}
						</Text>
						<Text style={styles.resultText}>Число памяти {matrix[8]}: </Text>
						<Text style={styles.resultTextAbout}>
							{interpretMemory(matrix[8])}
						</Text>
					</View>
				) : (
					<Text style={styles.resultTextAbout}>{textAbaut}</Text>
				)}
			</View>
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
	},
});
