import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import ZodiacComponent from "./zodiac/ZodiacComponent";
import GoroscopComponent from "./goroskop/GoroscopComponennt";
import LoveKharactComponent from "./loveHarakter/LoveKharactComponent";
import IndianGoroscopComponent from "./indianGoroskop/IndianGoroscopComponent";
export default function AstrologiaScreen() {
	const [typeAstro, setTypeAstro] = useState("indianGoroscope");

	return (
		<View style={styles.container}>
			<View style={styles.containerRow}>
				<Text style={styles.label}>Тип астрологии:</Text>
				<Picker
					selectedValue={typeAstro}
					style={styles.picker}
					onValueChange={(itemValue) => setTypeAstro(itemValue)}
				>
					<Picker.Item
						style={styles.pickerItem}
						label="Общие данные"
						value="zodiac"
					/>
					<Picker.Item
						style={styles.pickerItem}
						label="Европейский гороскоп"
						value="goroscope"
					/>
					<Picker.Item
						style={styles.pickerItem}
						label="Отношения "
						value="loveHaract"
					/>
					<Picker.Item
						style={styles.pickerItem}
						label="Индийская трактовка"
						value="indianGoroscope"
					/>
				</Picker>
			</View>
			{typeAstro === "zodiac" && <ZodiacComponent />}
			{typeAstro === "goroscope" && <GoroscopComponent />}
			{typeAstro === "loveHaract" && <LoveKharactComponent />}
			{typeAstro === "indianGoroscope" && <IndianGoroscopComponent />}
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
