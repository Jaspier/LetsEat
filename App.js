import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
	StatusBar,
	StyleSheet,
	SafeAreaView,
	Text,
	View,
	Platform,
} from "react-native";

export default function App() {
	return (
		<>
			<SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
				<View style={{ padding: 16, backgroundColor: "lightgreen" }}>
					<Text>search</Text>
				</View>
				<View style={{ flex: 1, padding: 16, backgroundColor: "lightblue" }}>
					<Text>list</Text>
				</View>
			</SafeAreaView>
			<ExpoStatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({});
