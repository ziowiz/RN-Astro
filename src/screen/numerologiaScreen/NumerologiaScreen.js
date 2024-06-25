import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import VedaComponent from "./vedicheskaia/VedaComponent";
import KabbalaComponent from "./kabbala/KabbalaComponent";
import PifagorComponent from "./pifagor/PifagorComponent";
export default function NumerologiaScreen() {
	const [numerologyType, setNumerologyType] = useState("pythagorean");

	return (
		<View style={styles.container}>
			<View style={styles.containerRow}>
				<Text style={styles.label}>Тип нумерологии:</Text>
				<Picker
					selectedValue={numerologyType}
					style={styles.picker}
					onValueChange={(itemValue) => setNumerologyType(itemValue)}
				>
					<Picker.Item
						style={styles.pickerItem}
						label="Пифагорейская"
						value="pythagorean"
					/>
					<Picker.Item
						style={styles.pickerItem}
						label="Каббалистическая"
						value="kabbalah"
					/>
					<Picker.Item
						style={styles.pickerItem}
						label="Ведическая"
						value="veda"
					/>
				</Picker>
			</View>
			{numerologyType === "kabbalah" && <KabbalaComponent />}
			{numerologyType === "veda" && <VedaComponent />}
			{numerologyType === "pythagorean" && <PifagorComponent />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 13,
		flex: 1,
		backgroundColor: "#F5F5F5",
	},
	containerRow: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		height: 50,
	},
	label: {
		fontSize: 18,
		fontWeight: "600",
		fontFamily: "Jura-Medium",
		color: "#333",
	},
	picker: {
		width: 200,
	},
	pickerItem: {
		fontFamily: "Comfortaa-Regular",
	},
});