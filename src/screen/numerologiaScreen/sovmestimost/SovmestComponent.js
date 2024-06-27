import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { calculateCompatibility, textAbaut } from "./formulasSovmest";

export default function SovmestComponent() {
	const [error, setError] = useState("");
	const [dayPartner, setDayPartner] = useState("1");
	const [monthPartner, setMonthPartner] = useState("1");
	const [yearPartner, setYearPartner] = useState("2024");
	const [day, setDay] = useState("1");
	const [month, setMonth] = useState("1");
	const [year, setYear] = useState("2024");
	const [matrix, setMatrix] = useState([]);

	const handleSubmit = () => {
		try {
			const matrixResult = calculateCompatibility(
				day,
				month,
				year,
				dayPartner,
				monthPartner,
				yearPartner
			);
			setError("");
			setMatrix(matrixResult);
		} catch (e) {
			setError("Ошибка в расчете матрицы");
			console.error(e);
		}
	};

	const days = Array.from({ length: 31 }, (_, i) => i + 1);
	const months = Array.from({ length: 12 }, (_, i) => i + 1);
	const currentYear = new Date().getFullYear();
	const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

	return (
		<ScrollView contentContainerStyle={styles.scrollContainer}>
			<View>
				<View style={styles.container}>
					<View style={styles.containerRow}></View>
					<View style={styles.containerRow}>
						<Text style={styles.label}>Ваш день рождения:</Text>
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
						<Text style={styles.label}>Ваш месяц рождения:</Text>
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
						<Text style={styles.label2}>Ваш год рождения:</Text>
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
					<View style={styles.containerRow}>
						<Text style={styles.label}>День рождения партнера:</Text>
						<Picker
							selectedValue={dayPartner}
							style={styles.picker}
							onValueChange={(itemValue) => setDayPartner(itemValue)}
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
						<Text style={styles.label}>Месяц рождения партнера:</Text>
						<Picker
							selectedValue={monthPartner}
							style={styles.picker}
							onValueChange={(itemValue) => setMonthPartner(itemValue)}
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
						<Text style={styles.label}>Год рождения партнера:</Text>
						<Picker
							selectedValue={yearPartner}
							style={styles.picker}
							onValueChange={(itemValue) => setYearPartner(itemValue)}
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
				{matrix.compatibility ? (
					<View style={styles.resultContainer}>
						<Text style={styles.resultText}>
							Ваше число:
							<Text style={styles.resultTextAbout}>
								{matrix.characteristic1}:
							</Text>
						</Text>
						<Text style={styles.resultText}>
							Число партнера:
							<Text style={styles.resultTextAbout}>
								{matrix.characteristic2}:
							</Text>
						</Text>
						<Text style={styles.resultTextAbout}>{matrix.compatibility}</Text>
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
		width: 150,
		alignSelf: "center",
		backgroundColor: "#f5f5f5",
	},
	label: {
		fontSize: 18,
		fontWeight: "600",
		fontFamily: "Jura-Medium",
		marginBottom: 5,
		color: "#333",
	},
	label2: {
		fontSize: 18,
		fontWeight: "600",
		fontFamily: "Jura-Medium",

		marginBottom: 12,
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
		marginTop: 20,
		fontSize: 19,
		fontFamily: "Jura-Medium",
		color: "#333",
	},
});
