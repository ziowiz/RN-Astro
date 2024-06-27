import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import calculateAvesticNumber from "./formulasAveist";
import { about } from "./formulasAveist";

export default function AveistComponent() {
	const [error, setError] = useState("");
	const [day, setDay] = useState("1");
	const [month, setMonth] = useState("1");
	const [year, setYear] = useState("2024");
	const [matrix, setMatrix] = useState(null);

	const handleSubmit = () => {
		if (!day || !month || !year) {
			setError("Не все поля заполнены. Не хватает исходных данных");
			return;
		}
		const matrix = calculateAvesticNumber(day, month, year);
		setError("");
		setMatrix(matrix);
	};

	const days = Array.from({ length: 31 }, (_, i) => i + 1);
	const months = Array.from({ length: 12 }, (_, i) => i + 1);
	const currentYear = new Date().getFullYear();
	const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
	return (
		<ScrollView contentContainerStyle={styles.scrollContainer}>
			<View>
				<View style={styles.container}>
					<View style={styles.containerRow}>
						<Text style={styles.label}>День:</Text>
						<Picker
							selectedValue={day}
							style={styles.picker}
							onValueChange={(itemValue) => setDay(itemValue)}
							mode="dropdown" // or "dialog" dropdown
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

				{matrix && (
					<View style={styles.resultContainer}>
						<Text style={styles.resultText}>
							Ваше авестийское число: {matrix.number}
						</Text>
						<Text style={styles.resultTextAbout}>{matrix.cycle}</Text>
						<Text style={styles.resultTextAbout}>{matrix.planet}</Text>
					</View>
				)}
				{!matrix && (
					<View>
						<Text style={styles.resultTextAbout}>{about}</Text>
					</View>
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
		marginBottom: 8,
		color: "#333",
	},
	error: {
		color: "red",
		marginBottom: 16,
	},
	resultContainer: {
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
		marginTop: 26,
		marginBottom: 16,
		color: "#333",
	},
	resultTextAbout: {
		fontSize: 19,
		marginBottom: 20,
		fontFamily: "Jura-Medium",
		color: "#333",
	},
});
