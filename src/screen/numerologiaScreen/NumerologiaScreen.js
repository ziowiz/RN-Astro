import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import VedaComponent from "./vedicheskaia/VedaComponent";
import KabbalaComponent from "./kabbala/KabbalaComponent";
import PifagorComponent from "./pifagor/PifagorComponent";
import ChinaComponent from "./china/ChinaComponent";
import TaroNumerComponent from "./taroNumerologia/taroNumerComponent";
import AveistComponent from "./aveist/AveistComponent";
import SlovaneComponent from "./slovane/SlovaneComponent";
import SovmestComponent from "./sovmestimost/SovmestComponent";
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
						label="Пифагорская нумерология"
						value="pythagorean"
					/>
					<Picker.Item
						style={styles.pickerItem}
						label="Каббалистическая нумерология"
						value="kabbalah"
					/>
					<Picker.Item
						style={styles.pickerItem}
						label="Ведическая нумерология"
						value="veda"
					/>
					<Picker.Item
						style={styles.pickerItem}
						label="У-Син нумерология"
						value="china"
					/>
					<Picker.Item
						style={styles.pickerItem}
						label="Таро нумерология"
						value="TaroNumerologia"
					/>
					<Picker.Item
						style={styles.pickerItem}
						label="Авестийская нумерология"
						value="aveist"
					/>
					<Picker.Item
						style={styles.pickerItem}
						label="Словянская нумерология"
						value="slovan"
					/>
					<Picker.Item
						style={styles.pickerItem}
						label="Совместимость характеров"
						value="sovmestimost"
					/>
				</Picker>
			</View>
			{numerologyType === "kabbalah" && <KabbalaComponent />}
			{numerologyType === "veda" && <VedaComponent />}
			{numerologyType === "pythagorean" && <PifagorComponent />}
			{numerologyType === "china" && <ChinaComponent />}
			{numerologyType === "TaroNumerologia" && <TaroNumerComponent />}
			{numerologyType === "aveist" && <AveistComponent />}
			{numerologyType === "slovan" && <SlovaneComponent />}
			{numerologyType === "sovmestimost" && <SovmestComponent />}
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