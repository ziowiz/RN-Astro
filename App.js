import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Application from "./src/Application";

const fetchFonts = () => {
	return Font.loadAsync({
		"Comfortaa-Regular": require("./src/font/Comfortaa-Regular.ttf"),
		"Jura-Medium": require("./src/font/Jura-Medium.ttf"),
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	return <Application />;
}
