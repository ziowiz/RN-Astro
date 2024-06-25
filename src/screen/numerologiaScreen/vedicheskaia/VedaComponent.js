import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	StyleSheet,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import calculateMatrix from "./formulasVeda";
import { about } from "./formulasVeda";

export default function VedaComponent() {
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
		const matrix = calculateMatrix(day, month, year);
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
							Эта цифра покажет первые 40% нашего внутреннего мира:{" "}
						</Text>
						<Text style={styles.resultTextAbout}>
							{matrix.day}({matrix.descriptions.day})
						</Text>
						<Text style={styles.resultText}>
							Вторая цифра отражает 10% нашего «я»:{" "}
						</Text>
						<Text style={styles.resultTextAbout}>
							{matrix.month} ({matrix.descriptions.month})
						</Text>
						<Text style={styles.resultText}>
							Год рождения покажет еще 10% будущей характеристики:{" "}
						</Text>
						<Text style={styles.resultTextAbout}>
							{matrix.year}({matrix.descriptions.year})
						</Text>
						<Text style={styles.resultText}>
							Общая цифра даст нам недостающие 40% образа внутреннего Я:{" "}
						</Text>
						<Text style={styles.resultTextAbout}>
							{matrix.total} ({matrix.descriptions.total})
						</Text>
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
		width: 200,
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
		fontSize: 16,
		fontWeight: "600",
		fontFamily: "Comfortaa-Regular",
		marginTop: 26,
		marginBottom: 16,
		color: "#333",
	},
	resultTextAbout: {
		fontSize: 17,
		fontFamily: "Jura-Medium",
		color: "#333",
	},
});
