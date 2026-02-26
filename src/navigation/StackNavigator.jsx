// src/navigation/StackNavigator.js

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import AddWorkoutScreen from "../screens/AddWorkoutScreen";
import WorkoutDetailsScreen from "../screens/WorkoutDetailsScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddWorkout" component={AddWorkoutScreen} />
        <Stack.Screen name="WorkoutDetails" component={WorkoutDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}