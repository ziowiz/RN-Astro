import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { calculateKabbalah, getKabbalisticValue } from "./formulaKabbala";
// import { useFonts } from "expo-font";
export default function KabbalaComponent() {
	const [error, setError] = useState("");
	const [userName, setUserName] = useState("");
	const [userSureName, setUserSureName] = useState("");
	const [kabbalah, setKabblah] = useState(null);
	// const [fontsLoaded] = useFonts({
	// 	"Comfortaa-Regular": require("../../../font/Comfortaa-Regular.ttf"),
	// });
	const handleSubmit = () => {
		if (userName && userSureName) {
			const userNameTrim = userName.toUpperCase().replaceAll(" ", "");
			const userSureNameTrim = userSureName.toUpperCase().replaceAll(" ", "");
			const kabbalahMatrix = calculateKabbalah(userNameTrim, userSureNameTrim);
			if (typeof kabbalahMatrix === "string") {
				setError(kabbalahMatrix); // Установите сообщение об ошибке, если язык не поддерживается
				setKabblah(null);
			} else {
				const kabbalisticValue = getKabbalisticValue(kabbalahMatrix);
				setKabblah(kabbalisticValue);
				setError(""); // Очистите сообщение об ошибке
			}
		} else {
			setError("Не все поля заполнены. Не хватает исходных данных");
			setKabblah(null);
		}
	};
	return (
		<ScrollView contentContainerStyle={styles.scrollContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Ваше имя..."
					onChangeText={(text) => setUserName(text)}
					value={userName}
				/>

				<TextInput
					style={styles.input}
					placeholder="Ваша фамилия..."
					onChangeText={(text) => setUserSureName(text)}
					value={userSureName}
				/>
			</View>
			{error && <Text style={styles.error}>{error}</Text>}
			<TouchableOpacity
				style={styles.button}
				onPress={handleSubmit}
			>
				<Text style={styles.buttonText}>Рассчитать</Text>
			</TouchableOpacity>

			{kabbalah ? (
				<View style={styles.resultContainer}>
					<Text style={styles.resultText}>{kabbalah}</Text>
				</View>
			) : (
				<View style={styles.resultContainer}>
					<Text style={styles.resultText}>
						Каббалистическая нумерология - это эзотерическое учение, основанное
						на каббале, которое использует числа для анализа личности и судьбы
						человека. Она считает, что каждое число имеет свой смысл и значение,
						и что эти значения могут быть использованы для предсказания будущего
						и понимания личности. Учение Каббала, в зависимости от духовного
						состояния человека, покажется ему или абсурдом самого нелепого
						свойства, или сможет ввести в мистическое состояние, даст
						возможность приобщиться к иной, возвышенной точке зрения. Целью
						изучения каббалы является постижение индивидуумом единства
						действительности в своём ощущении и сознании. Передача постигнутого
						осуществляется по каббалистической методике, адаптированной к
						свойствам каждого последующего поколения: при помощи книг, в группе
						изучающих, под руководством Учителя.
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
	inputContainer: {
		marginBottom: 6,
	},
	label: {
		fontSize: 16,
		fontWeight: "600",
		marginBottom: 4,
		fontFamily: "Comfortaa-Regular",
		color: "#333",
	},
	input: {
		height: 40,
		marginBottom: 30,
		borderColor: "#CCCCCC",
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 8,
		fontFamily: "Comfortaa-Regular",
		backgroundColor: "#FFFFFF",
	},
	error: {
		color: "red",
		fontFamily: "Comfortaa-Regular",
		marginBottom: 16,
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
	resultContainer: {
		marginTop: 16,
		padding: 16,
		backgroundColor: "#FFFFFF",
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 1,
	},
	resultText: {
		fontSize: 19,
		color: "#333",
		fontFamily: "Jura-Medium",
	},
});
