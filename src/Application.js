import React, { useState, useEffect } from "react"; //Импорт хуков из реакта
import { StyleSheet, Text, TouchableOpacity } from "react-native"; //Импорт стилей из нетива
import { NavigationContainer } from "@react-navigation/native"; // Импорт навигацииобщий блок
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //Импорт Навигатора
import { StateProvider } from "./context/stateContext"; // Импортируем PostProvider
import NumerologiaScreen from "./screen/numerologiaScreen/NumerologiaScreen";
const Stack = createNativeStackNavigator(); // Создание навигационного стека

export default function Application() {
	return (
		<StateProvider>
			<NavigationContainer>
				<Stack.Navigator style={styles.container}>
					<Stack.Screen
						name="Numerologia"
						component={NumerologiaScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</StateProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000000",
		alignItems: "center",
		justifyContent: "center",
	},
});
