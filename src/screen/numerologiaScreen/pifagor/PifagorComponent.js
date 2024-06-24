import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	Button,
	ScrollView,
	StyleSheet,
} from "react-native";
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
} from "./dataPifagora";
import calculateMatrix from "./formulasPifagor";

export default function PifagorComponent() {
	const [error, setError] = useState("");
	const [day, setDay] = useState("");
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");
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
	return (
		<ScrollView contentContainerStyle={styles.scrollContainer}>
			<View>
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
				{error && <Text>{error}</Text>}
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
});
