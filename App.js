import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Application from "./src/Application";

// Функция для загрузки шрифтов
const fetchFonts = () => {
	return Font.loadAsync({
		"Comfortaa-VariableFont_wght": require("./src/font/Comfortaa-VariableFont_wght.ttf"),
		"Jura-Medium": require("./src/font/Jura-Medium.ttf"),
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	useEffect(() => {
		const loadFonts = async () => {
			try {
				await SplashScreen.preventAutoHideAsync(); // Предотвращение автоматического скрытия заставки
				await fetchFonts(); // Загрузка шрифтов
				setFontLoaded(true); // Установка состояния загрузки шрифтов в true
				await SplashScreen.hideAsync(); // Скрытие заставки после загрузки шрифтов
			} catch (e) {
				console.warn(e); // Логирование ошибок
			}
		};

		loadFonts();
	}, []);

	if (!fontLoaded) {
		return null; // Возврат null, пока шрифты не загружены и заставка не скрыта
	}

	return <Application />; // Возврат основного компонента приложения после загрузки шрифтов
}
