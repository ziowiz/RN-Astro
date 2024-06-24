import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, Picker } from "react-native";
import { StateContext } from "../../context/stateContext";
import {
	interpretCharacter,
	interpretEnergy,
	interpretInterest,
	interpretHealth,
	interpretLogic,
	interpretLabor,
	interpretLuck,
	interpretDuty,
	textAbaut,
	interpretMemory,
} from "./pifagor"; // Assuming the file is named pifagor.js
import calculateMatrix from "./formulas"; // Assuming the file is named calculateMatrix.js

export default function App() {
	const context = useContext(StateContext);
	const [error, setError] = useState("");
	const [day, setDay] = useState("");
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");
	const [numerologyType, setNumerologyType] = useState("pythagorean");
	const [matrix, setMatrix] = useState(null);

	const handleSubmit = () => {
		if (!day || !month || !year) {
			setError("Не все поля заполнены. Не хватает исходных данных");
			return;
		}
		if (numerologyType === "pythagorean") {
			const matrix = calculateMatrix(day, month, year);
			setMatrix(matrix);
		} else if (numerologyType === "kabbalah") {
			// Assuming calculateKabbalah is a function defined elsewhere
			// calculateKabbalah(named, surname);
		} else {
			setError("Не все поля заполнены. Не хватает исходных данных");
		}
	};

	return (
		<View style={{ padding: 20 }}>
			<Text>День:</Text>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				placeholder="DD"
				keyboardType="numeric"
				onChangeText={(text) => setDay(text)}
				value={day}
			/>
			<Text>Месяц:</Text>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				placeholder="MM"
				keyboardType="numeric"
				onChangeText={(text) => setMonth(text)}
				value={month}
			/>
			<Text>Год:</Text>
			<TextInput
				style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
				placeholder="YYYY"
				keyboardType="numeric"
				onChangeText={(text) => setYear(text)}
				value={year}
			/>
			<Text>Тип нумерологии:</Text>
			<Picker
				selectedValue={numerologyType}
				style={{ height: 50, width: 150 }}
				onValueChange={(itemValue) => setNumerologyType(itemValue)}
			>
				<Picker.Item
					label="Пифагорейская"
					value="pythagorean"
				/>
				<Picker.Item
					label="Каббалистическая"
					value="kabbalah"
				/>
				{/* Другие варианты */}
			</Picker>
			<Button
				title="Рассчитать"
				onPress={handleSubmit}
			/>

			{matrix ? (
				<View>
					<Text>
						{matrix.ones} - Характер: {interpretCharacter(matrix.ones)}
					</Text>
					<Text>
						{matrix.twos} - Энергия: {interpretEnergy(matrix.twos)}
					</Text>
					<Text>
						{matrix.threes} - Интерес: {interpretInterest(matrix.threes)}
					</Text>
					<Text>
						{matrix.fours} - Здоровье: {interpretHealth(matrix.fours)}
					</Text>
					<Text>
						{matrix.fives} - Логика: {interpretLogic(matrix.fives)}
					</Text>
					<Text>
						{matrix.sixes} - Труд: {interpretLabor(matrix.sixes)}
					</Text>
					<Text>
						{matrix.sevens} - Удача: {interpretLuck(matrix.sevens)}
					</Text>
					<Text>
						{matrix.eights} - Долг: {interpretDuty(matrix.eights)}
					</Text>
					<Text>
						{matrix.nines} - Память: {interpretMemory(matrix.nines)}
					</Text>
					<Text>Максимальное значение в матрице: {matrix.maxValue}</Text>
				</View>
			) : (
				<Text>{textAbaut}</Text>
			)}
			{error && <Text>{error}</Text>}
		</View>
	);
}
