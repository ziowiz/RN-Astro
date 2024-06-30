import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { calculateAstrology } from "./formulasIndian";

export default function IndianGoroscopComponent() {
	const [error, setError] = useState("");
	const [day, setDay] = useState("1");
	const [month, setMonth] = useState("1");

	const [matrix, setMatrix] = useState(null);

	const handleSubmit = () => {
		let data = {
			day: Number(day),
			month: Number(month),
		};
		const result = calculateAstrology(data);
		if (result === "string") {
			setError(result);
			setMatrix(null);
		} else {
			console.log(result);
			setMatrix(result);
			setError("");
		}
	};

	const days = Array.from({ length: 31 }, (_, i) =>
		(i + 1).toString().padStart(2, "0")
	);
	const months = Array.from({ length: 12 }, (_, i) =>
		(i + 1).toString().padStart(2, "0")
	);

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
				</View>
			</View>
			{error && <Text style={styles.error}>{error}</Text>}
			<TouchableOpacity
				style={styles.button}
				onPress={handleSubmit}
			>
				<Text style={styles.buttonText}>Рассчитать</Text>
			</TouchableOpacity>

			{matrix ? (
				<View style={styles.resultContainer}>
					<Text style={styles.resultTextAbout}>{matrix}</Text>
				</View>
			) : (
				<View style={styles.resultContainer}>
					<Text style={styles.resultTextAbout}>
						Индийская астрология в любви рассматривает влияние планет и звезд на
						личные отношения. Ведическая традиция выделяет уникальные
						характеристики каждого знака и их влияние на романтические чувства и
						поведение. Этот гороскоп поможет вам понять, как планетарные влияния
						могут формировать ваши любовные отношения и какие астрологические
						советы помогут укрепить вашу связь с партнером.
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
