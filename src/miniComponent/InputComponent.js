import React from "react";
import {
	View,
	Text,
	Picker,
	StyleSheet,
	ScrollView,
	TextInput,
	TouchableOpacity,
} from "react-native";

const DateTimePicker = ({
	label,
	selectedValue,
	onValueChange,
	options,
	mode = "dropdown",
}) => (
	<View style={styles.containerRow}>
		<Text style={styles.label}>{label}:</Text>
		<Picker
			selectedValue={selectedValue}
			style={styles.picker}
			onValueChange={onValueChange}
			mode={mode}
		>
			{options.map((option) => (
				<Picker.Item
					key={option}
					label={option.toString()}
					value={option.toString()}
				/>
			))}
		</Picker>
	</View>
);

const DatePickerForm = ({
	hour,
	setHour,
	minute,
	setMinute,
	day,
	setDay,
	month,
	setMonth,
	year,
	setYear,
	dayPartner,
	setDayPartner,
	monthPartner,
	setMonthPartner,
	yearPartner,
	setYearPartner,
	userName,
	setUserName,
	userSureName,
	setUserSureName,
}) => {
	const days = Array.from({ length: 31 }, (_, i) => i + 1);
	const months = Array.from({ length: 12 }, (_, i) => i + 1);
	const currentYear = new Date().getFullYear();
	const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
	const hours = Array.from({ length: 24 }, (_, i) => i);
	const minutes = Array.from({ length: 60 }, (_, i) => i);

	return (
		<ScrollView contentContainerStyle={styles.scrollContainer}>
			<View style={styles.container}>
				<DateTimePicker
					label="Час"
					selectedValue={hour}
					onValueChange={setHour}
					options={hours}
				/>
				<DateTimePicker
					label="Минута"
					selectedValue={minute}
					onValueChange={setMinute}
					options={minutes}
				/>
				<DateTimePicker
					label="День"
					selectedValue={day}
					onValueChange={setDay}
					options={days}
				/>
				<DateTimePicker
					label="Месяц"
					selectedValue={month}
					onValueChange={setMonth}
					options={months}
				/>
				<DateTimePicker
					label="Год"
					selectedValue={year}
					onValueChange={setYear}
					options={years}
				/>
				<DateTimePicker
					label="День рождения партнера"
					selectedValue={dayPartner}
					onValueChange={setDayPartner}
					options={days}
				/>
				<DateTimePicker
					label="Месяц рождения партнера"
					selectedValue={monthPartner}
					onValueChange={setMonthPartner}
					options={months}
				/>
				<DateTimePicker
					label="Год рождения партнера"
					selectedValue={yearPartner}
					onValueChange={setYearPartner}
					options={years}
				/>

				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Ваше имя..."
						onChangeText={setUserName}
						value={userName}
					/>
					<TextInput
						style={styles.input}
						placeholder="Ваша фамилия..."
						onChangeText={setUserSureName}
						value={userSureName}
					/>
				</View>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Рассчитать</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

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
	inputContainer: {
		marginBottom: 20,
	},
	input: {
		height: 40,
		borderColor: "#ccc",
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 10,
	},
});

export default DatePickerForm;
