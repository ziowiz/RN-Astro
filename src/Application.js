import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StateProvider } from "./context/stateContext";
import NumerologiaScreen from "./screen/numerologiaScreen/NumerologiaScreen";
import AstrologiaScreen from "./screen/astrologiaScreen/AstrologiaScreen";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Нумерология")}
			>
				<Text style={styles.buttonText}>Нумерология</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Астрология")}
			>
				<Text style={styles.buttonText}>Астрология</Text>
			</TouchableOpacity>
		</View>
	);
}

export default function Application() {
	return (
		<StateProvider>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: "#f8f8f8",
						},
						headerTitleStyle: {
							fontWeight: "bold",
						},
						headerTintColor: "#333",
					}}
				>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{ title: "Главная" }}
					/>
					<Stack.Screen
						name="Нумерология"
						component={NumerologiaScreen}
					/>
					<Stack.Screen
						name="Астрология"
						component={AstrologiaScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</StateProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f8f8f8",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		backgroundColor: "#ffffff",
		paddingVertical: 12,
		paddingHorizontal: 24,
		marginVertical: 10,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
	},
	buttonText: {
		color: "#007aff",
		fontSize: 18,
		fontWeight: "600",
	},
});
