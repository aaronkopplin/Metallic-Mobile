import * as React from "react";
import { Button, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/home";

const App = () => {
    return <HomeScreen />;
};

export default App;
