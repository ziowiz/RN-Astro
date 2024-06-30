import React from "react";
import {
	StyleSheet,
	Dimensions,
	Text,
	TouchableOpacity,
	ImageBackground,
	View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StateProvider } from "./context/stateContext";
import NumerologiaScreen from "./screen/numerologiaScreen/NumerologiaScreen";
import AstrologiaScreen from "./screen/astrologiaScreen/AstrologiaScreen";
const { width } = Dimensions.get("window");
import * as Animatable from "react-native-animatable";

const Stack = createNativeStackNavigator();
function HomeScreen({ navigation }) {
	return (
		<ImageBackground
			source={require("./img/bgHome.png")}
			style={styles.background}
		>
			<View style={styles.container}>
				<Animatable.View
					animation="fadeInUp"
					delay={200}
					useNativeDriver
				>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("Нумерология")}
					>
						<Animatable.View
							animation="pulse"
							easing="ease-out"
							delay={200}
							iterationCount="infinite"
							style={styles.buttonGlow}
						/>
						<Text style={styles.buttonText}>Нумерология</Text>
					</TouchableOpacity>
				</Animatable.View>
				<Animatable.View
					animation="fadeInUp"
					delay={300}
					useNativeDriver
				>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("Астрология")}
					>
						<Animatable.View
							animation="pulse"
							easing="ease-out"
							delay={300}
							iterationCount="infinite"
							style={styles.buttonGlow}
						/>
						<Text style={styles.buttonText}>Астрология</Text>
					</TouchableOpacity>
				</Animatable.View>
			</View>
		</ImageBackground>
	);
}
export default function Application() {
	return (
		<StateProvider>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: "#0c0c0c",
							headerTransparent: "systemMaterialDark",
						},
						headerTitleStyle: {
							fontSize: 30,
							fontWeight: "Regular",
							color: "#ffffff",
						},
						statusBarStyle: "light",
						animationTypeForReplace: "pop",
						animation: "slide_from_bottom",
						headerTintColor: "#ffffff",
						statusBarColor: "#0c0c0c",
						headerTitleAlign: "center",
						headerBackTitle: "Назад",
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
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		paddingVertical: 15,
		paddingHorizontal: 24,
		marginVertical: 15,
		width: width * 0.85,
		height: 75,
		elevation: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#ffffff",
		fontSize: 34,
		fontWeight: "700",
		fontFamily: "Jura-Medium",
		textAlign: "center",
		textShadowColor: "#5c49ee",
		textShadowOffset: { width: 0, height: 0 },
		textShadowRadius: 10,
	},
	buttonGlow: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "transparent",
		borderRadius: 120,
		opacity: 0.2,
		borderColor: "#7a68ff",
		backgroundColor: "#5c49ee",
		borderWidth: 1,
		shadowColor: "#5c49ee",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.8,
		shadowRadius: 15,
	},
	background: {
		flex: 1,
		width: "100%",
		height: "100%",
		resizeMode: "cover", // Заполнение с обрезкой лишнего
	},
});